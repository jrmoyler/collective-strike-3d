"""Blender 4.5 LTS inspection/export of the exact procedural Three.js hierarchy.
Run node scripts/export-arena-review.mjs first, then blender -b -t 4 -P this.py.
The GLB is an authoring/review artifact; the game ships the same procedural source.
"""
import bpy, json, math, pathlib, os
from mathutils import Matrix, Vector
root=pathlib.Path(__file__).resolve().parent.parent
out=root/os.environ.get('CS3D_REVIEW_OUT','docs/arena-pipeline/forge'); out.mkdir(parents=True,exist_ok=True)
bpy.ops.object.select_all(action='SELECT'); bpy.ops.object.delete(use_global=False)
data=json.loads((root/os.environ.get('CS3D_MESH_OUT','.img2threejs/forge/runtime-meshes.json')).read_text())
materials={}
for part in data['meshes']:
    coords=list(zip(*[iter(part['position'])]*3)); indices=part['indices'] or list(range(len(coords)))
    faces=list(zip(*[iter(indices)]*3)); mesh=bpy.data.meshes.new(part['name']); mesh.from_pydata(coords,[],faces); mesh.update()
    obj=bpy.data.objects.new(part['name'],mesh); bpy.context.collection.objects.link(obj)
    # Preserve Three Y-up while converting to Blender Z-up at the scene boundary.
    a=part['matrix']; world=Matrix([[a[c*4+r] for c in range(4)] for r in range(4)])
    basis=Matrix(((1,0,0,0),(0,0,-1,0),(0,1,0,0),(0,0,0,1)))
    obj.matrix_world=basis @ world
    p=part['material']; key=json.dumps(p,sort_keys=True)
    if key not in materials:
        mat=bpy.data.materials.new('surface-'+str(len(materials))); mat.use_nodes=True
        bsdf=mat.node_tree.nodes.get('Principled BSDF'); bsdf.inputs['Base Color'].default_value=(*p['color'],1)
        bsdf.inputs['Metallic'].default_value=p['metalness']; bsdf.inputs['Roughness'].default_value=p['roughness']
        bsdf.inputs['Emission Color'].default_value=(*p['emissive'],1); bsdf.inputs['Emission Strength'].default_value=p['emissiveIntensity']
        materials[key]=mat
    mesh.materials.append(materials[key])
    obj['source']='src/arena-assets.js'; obj['proceduralPart']=part['name']
# Geometry-only GLB validates portable geometry, hierarchy and materials.
bpy.ops.export_scene.gltf(filepath=str(out/'forge-runtime.glb'),export_format='GLB',export_yup=True)
bpy.ops.wm.save_as_mainfile(filepath=str(out/'forge-runtime.blend'),compress=True)
scene=bpy.context.scene; scene.render.engine='CYCLES'; scene.cycles.samples=16
scene.render.resolution_x=640; scene.render.resolution_y=960; scene.render.resolution_percentage=100
scene.world.color=(0.22,0.22,0.22)
for name,pos,power,size in [('Key',(7,-10,16),2300,9),('Fill',(-8,-3,9),1600,8),('Rim',(2,8,13),2600,6)]:
    bpy.ops.object.light_add(type='AREA',location=pos); light=bpy.context.object; light.name=name; light.data.energy=power; light.data.shape='DISK'; light.data.size=size
    light.rotation_euler=(Vector((0,0,5))-light.location).to_track_quat('-Z','Y').to_euler()
bpy.ops.object.camera_add(); camera=bpy.context.object; scene.camera=camera; camera.data.type='ORTHO'; camera.data.ortho_scale=16
for i,pos in enumerate([(16,-25,19),(-22,-20,17),(20,23,18)]):
    camera.location=pos; camera.rotation_euler=(Vector((0,0,6))-camera.location).to_track_quat('-Z','Y').to_euler()
    scene.render.filepath=str(out/f'blender-angle-{i}.png'); bpy.ops.render.render(write_still=True)
(out/'blender-manifest.json').write_text(json.dumps({'blender':bpy.app.version_string,'source':'src/arena-assets.js','meshCount':len(data['meshes']),'materialCount':len(materials),'textures':'Procedural runtime textures intentionally not baked in this geometry inspection; WebGL is material acceptance authority.','sockets':data['sockets'],'groups':data['groups']},indent=2))
