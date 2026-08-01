/* Collective Strike 3D runtime bundle - three@^0.185.1, animejs@^4.5.0 - regenerate with: npm run vendor */
(()=>{var gy=Object.defineProperty;var Lg=i=>{throw TypeError(i)};var Df=(i,e)=>{for(var t in e)gy(i,t,{get:e[t],enumerable:!0})};var Ng=(i,e,t)=>e.has(i)||Lg("Cannot "+t);var Wt=(i,e,t)=>(Ng(i,e,"read from private field"),t?t.call(i):e.get(i)),ya=(i,e,t)=>e.has(i)?Lg("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(i):e.set(i,t),Lr=(i,e,t,n)=>(Ng(i,e,"write to private field"),n?n.call(i,t):e.set(i,t),t);var Ug=(i,e,t,n)=>({set _(s){Lr(i,e,s,t)},get _(){return Wt(i,e,n)}});var Bm={};Df(Bm,{ACESFilmicToneMapping:()=>wd,AddEquation:()=>ji,AddOperation:()=>Kp,AdditiveAnimationBlendMode:()=>Fd,AdditiveBlending:()=>ko,AgXToneMapping:()=>Cd,AlphaFormat:()=>Ud,AlwaysCompare:()=>cm,AlwaysDepth:()=>Ga,AlwaysStencilFunc:()=>du,AmbientLight:()=>$l,AnimationAction:()=>rc,AnimationClip:()=>Ds,AnimationLoader:()=>Du,AnimationMixer:()=>Xu,AnimationObjectGroup:()=>Wu,AnimationUtils:()=>Pu,ArcCurve:()=>pl,ArrayCamera:()=>nc,ArrowHelper:()=>pd,AttachedBindMode:()=>hu,Audio:()=>ic,AudioAnalyser:()=>Hu,AudioContext:()=>zo,AudioListener:()=>ku,AudioLoader:()=>zu,AxesHelper:()=>md,BackSide:()=>xn,BasicDepthPacking:()=>nm,BasicShadowMap:()=>$0,BatchedMesh:()=>rl,BezierInterpolant:()=>Gl,Bone:()=>go,BooleanKeyframeTrack:()=>Ri,Box2:()=>oc,Box3:()=>Kt,Box3Helper:()=>dd,BoxGeometry:()=>Rs,BoxHelper:()=>ud,BufferAttribute:()=>yt,BufferGeometry:()=>it,BufferGeometryLoader:()=>ec,ByteType:()=>Pd,Cache:()=>mi,Camera:()=>gr,CameraHelper:()=>hd,CanvasTexture:()=>Cu,CapsuleGeometry:()=>hl,CatmullRomCurve3:()=>ml,CineonToneMapping:()=>Ad,CircleGeometry:()=>ul,ClampToEdgeWrapping:()=>An,Clock:()=>ju,Color:()=>be,ColorKeyframeTrack:()=>No,ColorManagement:()=>mt,Compatibility:()=>F_,CompressedArrayTexture:()=>wu,CompressedCubeTexture:()=>Eu,CompressedTexture:()=>hr,CompressedTextureLoader:()=>Lu,ConeGeometry:()=>yo,ConstantAlphaFactor:()=>Zp,ConstantColorFactor:()=>qp,Controls:()=>_d,CubeCamera:()=>tc,CubeDepthTexture:()=>cl,CubeReflectionMapping:()=>yi,CubeRefractionMapping:()=>is,CubeTexture:()=>Cs,CubeTextureLoader:()=>Nu,CubeUVReflectionMapping:()=>vr,CubicBezierCurve:()=>bo,CubicBezierCurve3:()=>gl,CubicInterpolant:()=>Vl,CullFaceBack:()=>yd,CullFaceFront:()=>Ip,CullFaceFrontBack:()=>Z0,CullFaceNone:()=>Rp,Curve:()=>Ln,CurvePath:()=>xl,CustomBlending:()=>Dp,CustomToneMapping:()=>Ed,CylinderGeometry:()=>vo,Cylindrical:()=>ed,Data3DTexture:()=>or,DataArrayTexture:()=>rr,DataTexture:()=>wn,DataTextureLoader:()=>Uu,DataUtils:()=>mu,DecrementStencilOp:()=>p_,DecrementWrapStencilOp:()=>g_,DefaultLoadingManager:()=>pm,DepthFormat:()=>gi,DepthStencilFormat:()=>ss,DepthTexture:()=>Ci,DetachedBindMode:()=>jp,DirectionalLight:()=>Zl,DirectionalLightHelper:()=>cd,DiscreteInterpolant:()=>kl,DodecahedronGeometry:()=>dl,DoubleSide:()=>vi,DstAlphaFactor:()=>kp,DstColorFactor:()=>Hp,DynamicCopyUsage:()=>P_,DynamicDrawUsage:()=>A_,DynamicReadUsage:()=>C_,EdgesGeometry:()=>fl,EllipseCurve:()=>ur,EqualCompare:()=>om,EqualDepth:()=>Wa,EqualStencilFunc:()=>y_,EquirectangularReflectionMapping:()=>Ho,EquirectangularRefractionMapping:()=>Wo,Euler:()=>Kn,EventDispatcher:()=>Dn,ExternalTexture:()=>xo,ExtrudeGeometry:()=>Sl,FileLoader:()=>jn,Float16BufferAttribute:()=>bu,Float32BufferAttribute:()=>Pe,FloatType:()=>gn,Fog:()=>Ka,FogExp2:()=>Ja,FramebufferTexture:()=>Au,FrontSide:()=>wi,Frustum:()=>Ei,FrustumArray:()=>sl,GLBufferAttribute:()=>Ju,GLSL1:()=>L_,GLSL3:()=>Bd,GreaterCompare:()=>am,GreaterDepth:()=>qa,GreaterEqualCompare:()=>Yc,GreaterEqualDepth:()=>Xa,GreaterEqualStencilFunc:()=>T_,GreaterStencilFunc:()=>S_,GridHelper:()=>ad,Group:()=>$i,HTMLTexture:()=>Ru,HalfFloatType:()=>cn,HemisphereLight:()=>Wl,HemisphereLightHelper:()=>od,IcosahedronGeometry:()=>Ml,ImageBitmapLoader:()=>Bu,ImageLoader:()=>Ls,ImageUtils:()=>$a,IncrementStencilOp:()=>f_,IncrementWrapStencilOp:()=>m_,InstancedBufferAttribute:()=>es,InstancedBufferGeometry:()=>Ql,InstancedInterleavedBuffer:()=>$u,InstancedMesh:()=>il,Int16BufferAttribute:()=>vu,Int32BufferAttribute:()=>yu,Int8BufferAttribute:()=>gu,IntType:()=>cc,InterleavedBuffer:()=>cr,InterleavedBufferAttribute:()=>Es,Interpolant:()=>ns,InterpolateBezier:()=>uu,InterpolateDiscrete:()=>so,InterpolateLinear:()=>Za,InterpolateSmooth:()=>Ua,InterpolationSamplingMode:()=>O_,InterpolationSamplingType:()=>U_,InvertStencilOp:()=>__,KeepStencilOp:()=>ys,KeyframeTrack:()=>En,LOD:()=>el,LatheGeometry:()=>Tl,Layers:()=>ar,LessCompare:()=>rm,LessDepth:()=>Ha,LessEqualCompare:()=>qc,LessEqualDepth:()=>Ts,LessEqualStencilFunc:()=>b_,LessStencilFunc:()=>v_,Light:()=>xi,LightProbe:()=>Kl,Line:()=>_i,Line3:()=>nd,LineBasicMaterial:()=>on,LineCurve:()=>So,LineCurve3:()=>_l,LineDashedMaterial:()=>zl,LineLoop:()=>ol,LineSegments:()=>Gn,LinearFilter:()=>It,LinearInterpolant:()=>Lo,LinearMipMapLinearFilter:()=>e_,LinearMipMapNearestFilter:()=>Q0,LinearMipmapLinearFilter:()=>bi,LinearMipmapNearestFilter:()=>Xo,LinearSRGBColorSpace:()=>oo,LinearToneMapping:()=>Md,LinearTransfer:()=>ao,Loader:()=>ln,LoaderUtils:()=>Bo,LoadingManager:()=>Oo,LoopOnce:()=>Qp,LoopPingPong:()=>tm,LoopRepeat:()=>em,MOUSE:()=>q0,Material:()=>Zt,MaterialBlending:()=>J0,MaterialLoader:()=>jl,MathUtils:()=>W_,Matrix2:()=>td,Matrix3:()=>rt,Matrix4:()=>nt,MaxEquation:()=>Op,Mesh:()=>Pt,MeshBasicMaterial:()=>kn,MeshDepthMaterial:()=>Po,MeshDistanceMaterial:()=>Do,MeshLambertMaterial:()=>Fl,MeshMatcapMaterial:()=>Bl,MeshNormalMaterial:()=>Ol,MeshPhongMaterial:()=>Nl,MeshPhysicalMaterial:()=>Ll,MeshStandardMaterial:()=>Io,MeshToonMaterial:()=>Ul,MinEquation:()=>Up,MirroredRepeatWrapping:()=>io,MixOperation:()=>Jp,MultiplyBlending:()=>Sd,MultiplyOperation:()=>Go,NearestFilter:()=>Ot,NearestMipMapLinearFilter:()=>j0,NearestMipMapNearestFilter:()=>K0,NearestMipmapLinearFilter:()=>yr,NearestMipmapNearestFilter:()=>Id,NeutralToneMapping:()=>Rd,NeverCompare:()=>sm,NeverDepth:()=>ka,NeverStencilFunc:()=>x_,NoBlending:()=>Hn,NoColorSpace:()=>Li,NoNormalPacking:()=>l_,NoToneMapping:()=>Qn,NormalAnimationBlendMode:()=>Xc,NormalBlending:()=>Ms,NormalGAPacking:()=>h_,NormalRGPacking:()=>c_,NotEqualCompare:()=>lm,NotEqualDepth:()=>Ya,NotEqualStencilFunc:()=>M_,NumberKeyframeTrack:()=>pr,Object3D:()=>xt,ObjectLoader:()=>Fu,ObjectSpaceNormalMap:()=>im,OctahedronGeometry:()=>Eo,OneFactor:()=>Bp,OneMinusConstantAlphaFactor:()=>$p,OneMinusConstantColorFactor:()=>Yp,OneMinusDstAlphaFactor:()=>Gp,OneMinusDstColorFactor:()=>Wp,OneMinusSrcAlphaFactor:()=>Va,OneMinusSrcColorFactor:()=>Vp,OrthographicCamera:()=>Pi,PCFShadowMap:()=>Vo,PCFSoftShadowMap:()=>Pp,PMREMGenerator:()=>Kc,Path:()=>Is,PerspectiveCamera:()=>qt,Plane:()=>di,PlaneGeometry:()=>fr,PlaneHelper:()=>fd,PointLight:()=>Yl,PointLightHelper:()=>rd,Points:()=>al,PointsMaterial:()=>_o,PolarGridHelper:()=>ld,PolyhedronGeometry:()=>ts,PositionalAudio:()=>Gu,PropertyBinding:()=>St,PropertyMixer:()=>sc,QuadraticBezierCurve:()=>Mo,QuadraticBezierCurve3:()=>To,Quaternion:()=>rn,QuaternionKeyframeTrack:()=>mr,QuaternionLinearInterpolant:()=>Hl,R11_EAC_Format:()=>Sc,RED_GREEN_RGTC2_Format:()=>jo,RED_RGTC1_Format:()=>Gc,REVISION:()=>ac,RG11_EAC_Format:()=>Ko,RGBADepthPacking:()=>r_,RGBAFormat:()=>_n,RGBAIntegerFormat:()=>pc,RGBA_ASTC_10x10_Format:()=>Oc,RGBA_ASTC_10x5_Format:()=>Lc,RGBA_ASTC_10x6_Format:()=>Nc,RGBA_ASTC_10x8_Format:()=>Uc,RGBA_ASTC_12x10_Format:()=>Fc,RGBA_ASTC_12x12_Format:()=>Bc,RGBA_ASTC_4x4_Format:()=>Ac,RGBA_ASTC_5x4_Format:()=>wc,RGBA_ASTC_5x5_Format:()=>Ec,RGBA_ASTC_6x5_Format:()=>Cc,RGBA_ASTC_6x6_Format:()=>Rc,RGBA_ASTC_8x5_Format:()=>Ic,RGBA_ASTC_8x6_Format:()=>Pc,RGBA_ASTC_8x8_Format:()=>Dc,RGBA_BPTC_Format:()=>zc,RGBA_ETC2_EAC_Format:()=>bc,RGBA_PVRTC_2BPPV1_Format:()=>xc,RGBA_PVRTC_4BPPV1_Format:()=>_c,RGBA_S3TC_DXT1_Format:()=>Zo,RGBA_S3TC_DXT3_Format:()=>$o,RGBA_S3TC_DXT5_Format:()=>Jo,RGBDepthPacking:()=>o_,RGBFormat:()=>Od,RGBIntegerFormat:()=>t_,RGB_BPTC_SIGNED_Format:()=>Vc,RGB_BPTC_UNSIGNED_Format:()=>kc,RGB_ETC1_Format:()=>vc,RGB_ETC2_Format:()=>yc,RGB_PVRTC_2BPPV1_Format:()=>gc,RGB_PVRTC_4BPPV1_Format:()=>mc,RGB_S3TC_DXT1_Format:()=>Yo,RGDepthPacking:()=>a_,RGFormat:()=>rs,RGIntegerFormat:()=>fc,RawShaderMaterial:()=>Ro,Ray:()=>Qi,Raycaster:()=>Ku,RectAreaLight:()=>Jl,RedFormat:()=>dc,RedIntegerFormat:()=>qo,ReinhardToneMapping:()=>Td,RenderTarget:()=>uo,RenderTarget3D:()=>qu,RepeatWrapping:()=>no,ReplaceStencilOp:()=>d_,ReverseSubtractEquation:()=>Np,RingGeometry:()=>Al,SIGNED_R11_EAC_Format:()=>Mc,SIGNED_RED_GREEN_RGTC2_Format:()=>Wc,SIGNED_RED_RGTC1_Format:()=>Hc,SIGNED_RG11_EAC_Format:()=>Tc,SRGBColorSpace:()=>Mn,SRGBTransfer:()=>vt,Scene:()=>ja,ShaderChunk:()=>ht,ShaderLib:()=>Si,ShaderMaterial:()=>Lt,ShadowMaterial:()=>Dl,Shape:()=>Ps,ShapeGeometry:()=>wl,ShapePath:()=>gd,ShapeUtils:()=>Jn,ShortType:()=>Dd,Skeleton:()=>nl,SkeletonHelper:()=>sd,SkinnedMesh:()=>tl,Source:()=>pi,Sphere:()=>Yt,SphereGeometry:()=>Co,Spherical:()=>Qu,SphericalHarmonics3:()=>Fo,SplineCurve:()=>Ao,SpotLight:()=>ql,SpotLightHelper:()=>id,Sprite:()=>Qa,SpriteMaterial:()=>mo,SrcAlphaFactor:()=>za,SrcAlphaSaturateFactor:()=>Xp,SrcColorFactor:()=>zp,StaticCopyUsage:()=>I_,StaticDrawUsage:()=>lo,StaticReadUsage:()=>E_,StereoCamera:()=>Vu,StreamCopyUsage:()=>D_,StreamDrawUsage:()=>w_,StreamReadUsage:()=>R_,StringKeyframeTrack:()=>Ii,SubtractEquation:()=>Lp,SubtractiveBlending:()=>bd,TOUCH:()=>Y0,TangentSpaceNormalMap:()=>Di,TetrahedronGeometry:()=>El,Texture:()=>Ft,TextureLoader:()=>Ou,TextureUtils:()=>xd,Timer:()=>_r,TimestampQuery:()=>N_,TorusGeometry:()=>Cl,TorusKnotGeometry:()=>Rl,Triangle:()=>fi,TriangleFanDrawMode:()=>s_,TriangleStripDrawMode:()=>i_,TrianglesDrawMode:()=>n_,TubeGeometry:()=>Il,UVMapping:()=>lc,Uint16BufferAttribute:()=>fo,Uint32BufferAttribute:()=>po,Uint8BufferAttribute:()=>_u,Uint8ClampedBufferAttribute:()=>xu,Uniform:()=>Yu,UniformsGroup:()=>Zu,UniformsLib:()=>Te,UniformsUtils:()=>Ns,UnsignedByteType:()=>Cn,UnsignedInt101111Type:()=>Nd,UnsignedInt248Type:()=>Sr,UnsignedInt5999Type:()=>Ld,UnsignedIntType:()=>Wn,UnsignedShort4444Type:()=>hc,UnsignedShort5551Type:()=>uc,UnsignedShortType:()=>br,VSMShadowMap:()=>xr,Vector2:()=>ne,Vector3:()=>R,Vector4:()=>Mt,VectorKeyframeTrack:()=>Uo,VideoFrameTexture:()=>Tu,VideoTexture:()=>ll,WebGL3DRenderTarget:()=>pu,WebGLArrayRenderTarget:()=>fu,WebGLCoordinateSystem:()=>Pn,WebGLCubeRenderTarget:()=>jc,WebGLRenderTarget:()=>Bt,WebGLRenderer:()=>Fm,WebGLUtils:()=>Cx,WebGPUCoordinateSystem:()=>As,WebXRController:()=>lr,WireframeGeometry:()=>Pl,WrapAroundEnding:()=>ro,ZeroCurvatureEnding:()=>bs,ZeroFactor:()=>Fp,ZeroSlopeEnding:()=>Ss,ZeroStencilOp:()=>u_,createCanvasElement:()=>hm,error:()=>ke,getConsoleFunction:()=>V_,log:()=>ho,setConsoleFunction:()=>z_,warn:()=>ve,warnOnce:()=>Ji});var ac="185",q0={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Y0={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Rp=0,yd=1,Ip=2,Z0=3,$0=0,Vo=1,Pp=2,xr=3,wi=0,xn=1,vi=2,Hn=0,Ms=1,ko=2,bd=3,Sd=4,Dp=5,J0=6,ji=100,Lp=101,Np=102,Up=103,Op=104,Fp=200,Bp=201,zp=202,Vp=203,za=204,Va=205,kp=206,Gp=207,Hp=208,Wp=209,Xp=210,qp=211,Yp=212,Zp=213,$p=214,ka=0,Ga=1,Ha=2,Ts=3,Wa=4,Xa=5,qa=6,Ya=7,Go=0,Jp=1,Kp=2,Qn=0,Md=1,Td=2,Ad=3,wd=4,Ed=5,Cd=6,Rd=7,hu="attached",jp="detached",lc=300,yi=301,is=302,Ho=303,Wo=304,vr=306,no=1e3,An=1001,io=1002,Ot=1003,Id=1004,K0=1004,yr=1005,j0=1005,It=1006,Xo=1007,Q0=1007,bi=1008,e_=1008,Cn=1009,Pd=1010,Dd=1011,br=1012,cc=1013,Wn=1014,gn=1015,cn=1016,hc=1017,uc=1018,Sr=1020,Ld=35902,Nd=35899,Ud=1021,Od=1022,_n=1023,gi=1026,ss=1027,dc=1028,qo=1029,rs=1030,fc=1031,t_=1032,pc=1033,Yo=33776,Zo=33777,$o=33778,Jo=33779,mc=35840,gc=35841,_c=35842,xc=35843,vc=36196,yc=37492,bc=37496,Sc=37488,Mc=37489,Ko=37490,Tc=37491,Ac=37808,wc=37809,Ec=37810,Cc=37811,Rc=37812,Ic=37813,Pc=37814,Dc=37815,Lc=37816,Nc=37817,Uc=37818,Oc=37819,Fc=37820,Bc=37821,zc=36492,Vc=36494,kc=36495,Gc=36283,Hc=36284,jo=36285,Wc=36286,Qp=2200,em=2201,tm=2202,so=2300,Za=2301,Ua=2302,uu=2303,bs=2400,Ss=2401,ro=2402,Xc=2500,Fd=2501,n_=0,i_=1,s_=2,nm=3200,r_=3201,o_=3202,a_=3203,Di=0,im=1,Li="",Mn="srgb",oo="srgb-linear",ao="linear",vt="srgb",l_="",c_="rg",h_="ga",u_=0,ys=7680,d_=7681,f_=7682,p_=7683,m_=34055,g_=34056,__=5386,x_=512,v_=513,y_=514,b_=515,S_=516,M_=517,T_=518,du=519,sm=512,rm=513,om=514,qc=515,am=516,lm=517,Yc=518,cm=519,lo=35044,A_=35048,w_=35040,E_=35045,C_=35049,R_=35041,I_=35046,P_=35050,D_=35042,L_="100",Bd="300 es",Pn=2e3,As=2001,N_={COMPUTE:"compute",RENDER:"render"},U_={PERSPECTIVE:"perspective",LINEAR:"linear",FLAT:"flat"},O_={NORMAL:"normal",CENTROID:"centroid",SAMPLE:"sample",FIRST:"first",EITHER:"either"},F_={TEXTURE_COMPARE:"depthTextureCompare"};function _y(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}var xy={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function eo(i,e){return new xy[i](e)}function B_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function co(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function hm(){let i=co("canvas");return i.style.display="block",i}var Og={},ws=null;function z_(i){ws=i}function V_(){return ws}function ho(...i){let e="THREE."+i.shift();ws?ws("log",e,...i):console.log(e,...i)}function k_(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ve(...i){i=k_(i);let e="THREE."+i.shift();if(ws)ws("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function ke(...i){i=k_(i);let e="THREE."+i.shift();if(ws)ws("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ji(...i){let e=i.join(" ");e in Og||(Og[e]=!0,ve(...i))}function G_(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var H_={[ka]:Ga,[Ha]:qa,[Wa]:Ya,[Ts]:Xa,[Ga]:ka,[qa]:Ha,[Ya]:Wa,[Xa]:Ts},Dn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fg=1234567,ir=Math.PI/180,sr=180/Math.PI;function Vn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[t&63|128]+fn[t>>8&255]+"-"+fn[t>>16&255]+fn[t>>24&255]+fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]).toLowerCase()}function Qe(i,e,t){return Math.max(e,Math.min(t,i))}function um(i,e){return(i%e+e)%e}function vy(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function yy(i,e,t){return i!==e?(t-i)/(e-i):0}function Oa(i,e,t){return(1-t)*i+t*e}function by(i,e,t,n){return Oa(i,e,1-Math.exp(-t*n))}function Sy(i,e=1){return e-Math.abs(um(i,e*2)-e)}function My(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Ty(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Ay(i,e){return i+Math.floor(Math.random()*(e-i+1))}function wy(i,e){return i+Math.random()*(e-i)}function Ey(i){return i*(.5-Math.random())}function Cy(i){i!==void 0&&(Fg=i);let e=Fg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ry(i){return i*ir}function Iy(i){return i*sr}function Py(i){return(i&i-1)===0&&i!==0}function Dy(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ly(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ny(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),d=r((e-n)/2),u=o((e-n)/2),f=r((n-e)/2),p=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*d,l*u,a*c);break;case"YZY":i.set(l*u,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*u,a*h,a*c);break;case"XZX":i.set(a*h,l*p,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*p,a*c);break;case"ZYZ":i.set(l*p,l*f,a*h,a*c);break;default:ve("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Tn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ct(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var W_={DEG2RAD:ir,RAD2DEG:sr,generateUUID:Vn,clamp:Qe,euclideanModulo:um,mapLinear:vy,inverseLerp:yy,lerp:Oa,damp:by,pingpong:Sy,smoothstep:My,smootherstep:Ty,randInt:Ay,randFloat:wy,randFloatSpread:Ey,seededRandom:Cy,degToRad:Ry,radToDeg:Iy,isPowerOfTwo:Py,ceilPowerOfTwo:Dy,floorPowerOfTwo:Ly,setQuaternionFromProperEuler:Ny,normalize:ct,denormalize:Tn},_m=class _m{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};_m.prototype.isVector2=!0;var ne=_m,rn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],f=r[o+1],p=r[o+2],_=r[o+3];if(d!==_||l!==u||c!==f||h!==p){let m=l*u+c*f+h*p+d*_;m<0&&(u=-u,f=-f,p=-p,_=-_,m=-m);let g=1-a;if(m<.9995){let b=Math.acos(m),S=Math.sin(b);g=Math.sin(g*b)/S,a=Math.sin(a*b)/S,l=l*g+u*a,c=c*g+f*a,h=h*g+p*a,d=d*g+_*a}else{l=l*g+u*a,c=c*g+f*a,h=h*g+p*a,d=d*g+_*a;let b=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=b,c*=b,h*=b,d*=b}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],u=r[o+1],f=r[o+2],p=r[o+3];return e[t]=a*p+h*d+l*f-c*u,e[t+1]=l*p+h*u+c*d-a*f,e[t+2]=c*p+h*f+a*u-l*d,e[t+3]=h*p-a*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),u=l(n/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"YZX":this._x=u*h*d+c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d-u*f*p;break;case"XZY":this._x=u*h*d-c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d+u*f*p;break;default:ve("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},xm=class xm{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bg.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),d=2*(r*n-o*t);return this.x=t+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Lf.copy(this).projectOnVector(e),this.sub(Lf)}reflect(e){return this.sub(Lf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};xm.prototype.isVector3=!0;var R=xm,Lf=new R,Bg=new rn,vm=class vm{constructor(e,t,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],p=n[8],_=s[0],m=s[3],g=s[6],b=s[1],S=s[4],x=s[7],A=s[2],M=s[5],C=s[8];return r[0]=o*_+a*b+l*A,r[3]=o*m+a*S+l*M,r[6]=o*g+a*x+l*C,r[1]=c*_+h*b+d*A,r[4]=c*m+h*S+d*M,r[7]=c*g+h*x+d*C,r[2]=u*_+f*b+p*A,r[5]=u*m+f*S+p*M,r[8]=u*g+f*x+p*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,p=t*d+n*u+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return e[0]=d*_,e[1]=(s*c-h*n)*_,e[2]=(a*n-s*o)*_,e[3]=u*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Ji("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Nf.makeScale(e,t)),this}rotate(e){return Ji("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Nf.makeRotation(-e)),this}translate(e,t){return Ji("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Nf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};vm.prototype.isMatrix3=!0;var rt=vm,Nf=new rt,zg=new rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vg=new rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Uy(){let i={enabled:!0,workingColorSpace:oo,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===vt&&(s.r=Ki(s.r),s.g=Ki(s.g),s.b=Ki(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===vt&&(s.r=to(s.r),s.g=to(s.g),s.b=to(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Li?ao:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ji("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ji("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[oo]:{primaries:e,whitePoint:n,transfer:ao,toXYZ:zg,fromXYZ:Vg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Mn},outputColorSpaceConfig:{drawingBufferColorSpace:Mn}},[Mn]:{primaries:e,whitePoint:n,transfer:vt,toXYZ:zg,fromXYZ:Vg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Mn}}}),i}var mt=Uy();function Ki(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function to(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Nr,$a=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Nr===void 0&&(Nr=co("canvas")),Nr.width=e.width,Nr.height=e.height;let s=Nr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Nr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=co("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ki(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ki(t[n]/255)*255):t[n]=Ki(t[n]);return{data:t,width:e.width,height:e.height}}else return ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Oy=0,pi=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Oy++}),this.uuid=Vn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Uf(s[o].image)):r.push(Uf(s[o]))}else r=Uf(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Uf(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?$a.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ve("Texture: Unable to serialize Texture."),{})}var Fy=0,Of=new R,Ft=class i extends Dn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=An,s=An,r=It,o=bi,a=_n,l=Cn,c=i.DEFAULT_ANISOTROPY,h=Li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fy++}),this.uuid=Vn(),this.name="",this.source=new pi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Of).x}get height(){return this.source.getSize(Of).y}get depth(){return this.source.getSize(Of).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){ve(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ve(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case no:e.x=e.x-Math.floor(e.x);break;case An:e.x=e.x<0?0:1;break;case io:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case no:e.y=e.y-Math.floor(e.y);break;case An:e.y=e.y<0?0:1;break;case io:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ft.DEFAULT_IMAGE=null;Ft.DEFAULT_MAPPING=lc;Ft.DEFAULT_ANISOTROPY=1;var ym=class ym{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],p=l[9],_=l[2],m=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,x=(f+1)/2,A=(g+1)/2,M=(h+u)/4,C=(d+_)/4,y=(p+m)/4;return S>x&&S>A?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=M/n,r=C/n):x>A?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=M/s,r=y/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=C/r,s=y/r),this.set(n,s,r,t),this}let b=Math.sqrt((m-p)*(m-p)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(m-p)/b,this.y=(d-_)/b,this.z=(u-h)/b,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ym.prototype.isVector4=!0;var Mt=ym,uo=class extends Dn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:It,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Ft(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:It,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new pi(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Bt=class extends uo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},rr=class extends Ft{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},fu=class extends Bt{constructor(e=1,t=1,n=1,s={}){super(e,t,s),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new rr(null,e,t,n),this._setTextureOptions(s),this.texture.isRenderTargetTexture=!0}},or=class extends Ft{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},pu=class extends Bt{constructor(e=1,t=1,n=1,s={}){super(e,t,s),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new or(null,e,t,n),this._setTextureOptions(s),this.texture.isRenderTargetTexture=!0}},vd=class vd{constructor(e,t,n,s,r,o,a,l,c,h,d,u,f,p,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,d,u,f,p,_,m)}set(e,t,n,s,r,o,a,l,c,h,d,u,f,p,_,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=u,g[3]=f,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vd().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Ur.setFromMatrixColumn(e,0).length(),r=1/Ur.setFromMatrixColumn(e,1).length(),o=1/Ur.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=o*h,f=o*d,p=a*h,_=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+p*c,t[5]=u-_*c,t[9]=-a*l,t[2]=_-u*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,p=c*h,_=c*d;t[0]=u+_*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=f*a-p,t[6]=_+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,p=c*h,_=c*d;t[0]=u-_*a,t[4]=-o*d,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*h,t[9]=_-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*h,f=o*d,p=a*h,_=a*d;t[0]=l*h,t[4]=p*c-f,t[8]=u*c+_,t[1]=l*d,t[5]=_*c+u,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,f=o*c,p=a*l,_=a*c;t[0]=l*h,t[4]=_-u*d,t[8]=p*d+f,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*d+p,t[10]=u-_*d}else if(e.order==="XZY"){let u=o*l,f=o*c,p=a*l,_=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+_,t[5]=o*h,t[9]=f*d-p,t[2]=p*d-f,t[6]=a*h,t[10]=_*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(By,e,zy)}lookAt(e,t,n){let s=this.elements;return Bn.subVectors(e,t),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),fs.crossVectors(n,Bn),fs.lengthSq()===0&&(Math.abs(n.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),fs.crossVectors(n,Bn)),fs.normalize(),bh.crossVectors(Bn,fs),s[0]=fs.x,s[4]=bh.x,s[8]=Bn.x,s[1]=fs.y,s[5]=bh.y,s[9]=Bn.y,s[2]=fs.z,s[6]=bh.z,s[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],p=n[2],_=n[6],m=n[10],g=n[14],b=n[3],S=n[7],x=n[11],A=n[15],M=s[0],C=s[4],y=s[8],w=s[12],I=s[1],D=s[5],L=s[9],q=s[13],Y=s[2],U=s[6],k=s[10],G=s[14],K=s[3],V=s[7],re=s[11],le=s[15];return r[0]=o*M+a*I+l*Y+c*K,r[4]=o*C+a*D+l*U+c*V,r[8]=o*y+a*L+l*k+c*re,r[12]=o*w+a*q+l*G+c*le,r[1]=h*M+d*I+u*Y+f*K,r[5]=h*C+d*D+u*U+f*V,r[9]=h*y+d*L+u*k+f*re,r[13]=h*w+d*q+u*G+f*le,r[2]=p*M+_*I+m*Y+g*K,r[6]=p*C+_*D+m*U+g*V,r[10]=p*y+_*L+m*k+g*re,r[14]=p*w+_*q+m*G+g*le,r[3]=b*M+S*I+x*Y+A*K,r[7]=b*C+S*D+x*U+A*V,r[11]=b*y+S*L+x*k+A*re,r[15]=b*w+S*q+x*G+A*le,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],p=e[3],_=e[7],m=e[11],g=e[15],b=l*f-c*u,S=a*f-c*d,x=a*u-l*d,A=o*f-c*h,M=o*u-l*h,C=o*d-a*h;return t*(_*b-m*S+g*x)-n*(p*b-m*A+g*M)+s*(p*S-_*A+g*C)-r*(p*x-_*M+m*C)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],p=e[12],_=e[13],m=e[14],g=e[15],b=t*a-n*o,S=t*l-s*o,x=t*c-r*o,A=n*l-s*a,M=n*c-r*a,C=s*c-r*l,y=h*_-d*p,w=h*m-u*p,I=h*g-f*p,D=d*m-u*_,L=d*g-f*_,q=u*g-f*m,Y=b*q-S*L+x*D+A*I-M*w+C*y;if(Y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/Y;return e[0]=(a*q-l*L+c*D)*U,e[1]=(s*L-n*q-r*D)*U,e[2]=(_*C-m*M+g*A)*U,e[3]=(u*M-d*C-f*A)*U,e[4]=(l*I-o*q-c*w)*U,e[5]=(t*q-s*I+r*w)*U,e[6]=(m*x-p*C-g*S)*U,e[7]=(h*C-u*x+f*S)*U,e[8]=(o*L-a*I+c*y)*U,e[9]=(n*I-t*L-r*y)*U,e[10]=(p*M-_*x+g*b)*U,e[11]=(d*x-h*M-f*b)*U,e[12]=(a*w-o*D-l*y)*U,e[13]=(t*D-n*w+s*y)*U,e[14]=(_*S-p*A-m*b)*U,e[15]=(h*A-d*S+u*b)*U,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,p=r*d,_=o*h,m=o*d,g=a*d,b=l*c,S=l*h,x=l*d,A=n.x,M=n.y,C=n.z;return s[0]=(1-(_+g))*A,s[1]=(f+x)*A,s[2]=(p-S)*A,s[3]=0,s[4]=(f-x)*M,s[5]=(1-(u+g))*M,s[6]=(m+b)*M,s[7]=0,s[8]=(p+S)*C,s[9]=(m-b)*C,s[10]=(1-(u+_))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Ur.set(s[0],s[1],s[2]).length(),a=Ur.set(s[4],s[5],s[6]).length(),l=Ur.set(s[8],s[9],s[10]).length();r<0&&(o=-o),ci.copy(this);let c=1/o,h=1/a,d=1/l;return ci.elements[0]*=c,ci.elements[1]*=c,ci.elements[2]*=c,ci.elements[4]*=h,ci.elements[5]*=h,ci.elements[6]*=h,ci.elements[8]*=d,ci.elements[9]*=d,ci.elements[10]*=d,t.setFromRotationMatrix(ci),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,s,r,o,a=Pn,l=!1){let c=this.elements,h=2*r/(t-e),d=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),p,_;if(l)p=r/(o-r),_=o*r/(o-r);else if(a===Pn)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===As)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Pn,l=!1){let c=this.elements,h=2/(t-e),d=2/(n-s),u=-(t+e)/(t-e),f=-(n+s)/(n-s),p,_;if(l)p=1/(o-r),_=o/(o-r);else if(a===Pn)p=-2/(o-r),_=-(o+r)/(o-r);else if(a===As)p=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};vd.prototype.isMatrix4=!0;var nt=vd,Ur=new R,ci=new nt,By=new R(0,0,0),zy=new R(1,1,1),fs=new R,bh=new R,Bn=new R,kg=new nt,Gg=new rn,Kn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return kg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kg,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Gg.setFromEuler(this),this.setFromQuaternion(Gg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Kn.DEFAULT_ORDER="XYZ";var ar=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Vy=0,Hg=new R,Or=new rn,Gi=new nt,Sh=new R,ba=new R,ky=new R,Gy=new rn,Wg=new R(1,0,0),Xg=new R(0,1,0),qg=new R(0,0,1),Yg={type:"added"},Hy={type:"removed"},Fr={type:"childadded",child:null},Ff={type:"childremoved",child:null},xt=class i extends Dn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vy++}),this.uuid=Vn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new R,t=new Kn,n=new rn,s=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new nt},normalMatrix:{value:new rt}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ar,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Or.setFromAxisAngle(e,t),this.quaternion.multiply(Or),this}rotateOnWorldAxis(e,t){return Or.setFromAxisAngle(e,t),this.quaternion.premultiply(Or),this}rotateX(e){return this.rotateOnAxis(Wg,e)}rotateY(e){return this.rotateOnAxis(Xg,e)}rotateZ(e){return this.rotateOnAxis(qg,e)}translateOnAxis(e,t){return Hg.copy(e).applyQuaternion(this.quaternion),this.position.add(Hg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wg,e)}translateY(e){return this.translateOnAxis(Xg,e)}translateZ(e){return this.translateOnAxis(qg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Sh.copy(e):Sh.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ba.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt(ba,Sh,this.up):Gi.lookAt(Sh,ba,this.up),this.quaternion.setFromRotationMatrix(Gi),s&&(Gi.extractRotation(s.matrixWorld),Or.setFromRotationMatrix(Gi),this.quaternion.premultiply(Or.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ke("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yg),Fr.child=e,this.dispatchEvent(Fr),Fr.child=null):ke("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hy),Ff.child=e,this.dispatchEvent(Ff),Ff.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yg),Fr.child=e,this.dispatchEvent(Fr),Fr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ba,e,ky),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ba,Gy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};xt.DEFAULT_UP=new R(0,1,0);xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var $i=class extends xt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Wy={type:"move"},lr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $i,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $i,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $i,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),g=this._getHandJoint(c,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Wy)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new $i;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},X_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ps={h:0,s:0,l:0},Mh={h:0,s:0,l:0};function Bf(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var be=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,mt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=mt.workingColorSpace){if(e=um(e,1),t=Qe(t,0,1),n=Qe(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Bf(o,r,e+1/3),this.g=Bf(o,r,e),this.b=Bf(o,r,e-1/3)}return mt.colorSpaceToWorking(this,s),this}setStyle(e,t=Mn){function n(r){r!==void 0&&parseFloat(r)<1&&ve("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ve("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);ve("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mn){let n=X_[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ve("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}copyLinearToSRGB(e){return this.r=to(e.r),this.g=to(e.g),this.b=to(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mn){return mt.workingToColorSpace(pn.copy(this),e),Math.round(Qe(pn.r*255,0,255))*65536+Math.round(Qe(pn.g*255,0,255))*256+Math.round(Qe(pn.b*255,0,255))}getHexString(e=Mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.workingToColorSpace(pn.copy(this),t);let n=pn.r,s=pn.g,r=pn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=mt.workingColorSpace){return mt.workingToColorSpace(pn.copy(this),t),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=Mn){mt.workingToColorSpace(pn.copy(this),e);let t=pn.r,n=pn.g,s=pn.b;return e!==Mn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ps),this.setHSL(ps.h+e,ps.s+t,ps.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ps),e.getHSL(Mh);let n=Oa(ps.h,Mh.h,t),s=Oa(ps.s,Mh.s,t),r=Oa(ps.l,Mh.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},pn=new be;be.NAMES=X_;var Ja=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new be(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},Ka=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new be(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ja=class extends xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kn,this.environmentIntensity=1,this.environmentRotation=new Kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},hi=new R,Hi=new R,zf=new R,Wi=new R,Br=new R,zr=new R,Zg=new R,Vf=new R,kf=new R,Gf=new R,Hf=new Mt,Wf=new Mt,Xf=new Mt,fi=class i{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),hi.subVectors(e,t),s.cross(hi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){hi.subVectors(s,t),Hi.subVectors(n,t),zf.subVectors(e,t);let o=hi.dot(hi),a=hi.dot(Hi),l=hi.dot(zf),c=Hi.dot(Hi),h=Hi.dot(zf),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,p=(o*h-a*l)*u;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Wi)===null?!1:Wi.x>=0&&Wi.y>=0&&Wi.x+Wi.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Wi.x),l.addScaledVector(o,Wi.y),l.addScaledVector(a,Wi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Hf.setScalar(0),Wf.setScalar(0),Xf.setScalar(0),Hf.fromBufferAttribute(e,t),Wf.fromBufferAttribute(e,n),Xf.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Hf,r.x),o.addScaledVector(Wf,r.y),o.addScaledVector(Xf,r.z),o}static isFrontFacing(e,t,n,s){return hi.subVectors(n,t),Hi.subVectors(e,t),hi.cross(Hi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hi.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),hi.cross(Hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Br.subVectors(s,n),zr.subVectors(r,n),Vf.subVectors(e,n);let l=Br.dot(Vf),c=zr.dot(Vf);if(l<=0&&c<=0)return t.copy(n);kf.subVectors(e,s);let h=Br.dot(kf),d=zr.dot(kf);if(h>=0&&d<=h)return t.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Br,o);Gf.subVectors(e,r);let f=Br.dot(Gf),p=zr.dot(Gf);if(p>=0&&f<=p)return t.copy(r);let _=f*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(zr,a);let m=h*p-f*d;if(m<=0&&d-h>=0&&f-p>=0)return Zg.subVectors(r,s),a=(d-h)/(d-h+(f-p)),t.copy(s).addScaledVector(Zg,a);let g=1/(m+_+u);return o=_*g,a=u*g,t.copy(n).addScaledVector(Br,o).addScaledVector(zr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Kt=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ui.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ui.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ui.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ui):ui.fromBufferAttribute(r,o),ui.applyMatrix4(e.matrixWorld),this.expandByPoint(ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Th.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Th.copy(n.boundingBox)),Th.applyMatrix4(e.matrixWorld),this.union(Th)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ui),ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Sa),Ah.subVectors(this.max,Sa),Vr.subVectors(e.a,Sa),kr.subVectors(e.b,Sa),Gr.subVectors(e.c,Sa),ms.subVectors(kr,Vr),gs.subVectors(Gr,kr),Ws.subVectors(Vr,Gr);let t=[0,-ms.z,ms.y,0,-gs.z,gs.y,0,-Ws.z,Ws.y,ms.z,0,-ms.x,gs.z,0,-gs.x,Ws.z,0,-Ws.x,-ms.y,ms.x,0,-gs.y,gs.x,0,-Ws.y,Ws.x,0];return!qf(t,Vr,kr,Gr,Ah)||(t=[1,0,0,0,1,0,0,0,1],!qf(t,Vr,kr,Gr,Ah))?!1:(wh.crossVectors(ms,gs),t=[wh.x,wh.y,wh.z],qf(t,Vr,kr,Gr,Ah))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Xi=[new R,new R,new R,new R,new R,new R,new R,new R],ui=new R,Th=new Kt,Vr=new R,kr=new R,Gr=new R,ms=new R,gs=new R,Ws=new R,Sa=new R,Ah=new R,wh=new R,Xs=new R;function qf(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Xs.fromArray(i,r);let a=s.x*Math.abs(Xs.x)+s.y*Math.abs(Xs.y)+s.z*Math.abs(Xs.z),l=e.dot(Xs),c=t.dot(Xs),h=n.dot(Xs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Zi=Xy();function Xy(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}let r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:a}}function In(i){Math.abs(i)>65504&&ve("DataUtils.toHalfFloat(): Value out of range."),i=Qe(i,-65504,65504),Zi.floatView[0]=i;let e=Zi.uint32View[0],t=e>>23&511;return Zi.baseTable[t]+((e&8388607)>>Zi.shiftTable[t])}function La(i){let e=i>>10;return Zi.uint32View[0]=Zi.mantissaTable[Zi.offsetTable[e]+(i&1023)]+Zi.exponentTable[e],Zi.floatView[0]}var mu=class{static toHalfFloat(e){return In(e)}static fromHalfFloat(e){return La(e)}},Xt=new R,Eh=new ne,qy=0,yt=class extends Dn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qy++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=lo,this.updateRanges=[],this.gpuType=gn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Eh.fromBufferAttribute(this,t),Eh.applyMatrix3(e),this.setXY(t,Eh.x,Eh.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix3(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Tn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Tn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Tn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Tn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Tn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),s=ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),s=ct(s,this.array),r=ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==lo&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}},gu=class extends yt{constructor(e,t,n){super(new Int8Array(e),t,n)}},_u=class extends yt{constructor(e,t,n){super(new Uint8Array(e),t,n)}},xu=class extends yt{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}},vu=class extends yt{constructor(e,t,n){super(new Int16Array(e),t,n)}},fo=class extends yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}},yu=class extends yt{constructor(e,t,n){super(new Int32Array(e),t,n)}},po=class extends yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}},bu=class extends yt{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=La(this.array[e*this.itemSize]);return this.normalized&&(t=Tn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize]=In(t),this}getY(e){let t=La(this.array[e*this.itemSize+1]);return this.normalized&&(t=Tn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+1]=In(t),this}getZ(e){let t=La(this.array[e*this.itemSize+2]);return this.normalized&&(t=Tn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+2]=In(t),this}getW(e){let t=La(this.array[e*this.itemSize+3]);return this.normalized&&(t=Tn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+3]=In(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.array[e+0]=In(t),this.array[e+1]=In(n),this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),s=ct(s,this.array)),this.array[e+0]=In(t),this.array[e+1]=In(n),this.array[e+2]=In(s),this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),s=ct(s,this.array),r=ct(r,this.array)),this.array[e+0]=In(t),this.array[e+1]=In(n),this.array[e+2]=In(s),this.array[e+3]=In(r),this}},Pe=class extends yt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Yy=new Kt,Ma=new R,Yf=new R,Yt=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Yy.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ma.subVectors(e,this.center);let t=Ma.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ma,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ma.copy(e.center).add(Yf)),this.expandByPoint(Ma.copy(e.center).sub(Yf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Zy=0,$n=new nt,Zf=new xt,Hr=new R,zn=new Kt,Ta=new Kt,sn=new R,it=class i extends Dn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zy++}),this.uuid=Vn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_y(e)?po:fo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new rt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return $n.makeRotationFromQuaternion(e),this.applyMatrix4($n),this}rotateX(e){return $n.makeRotationX(e),this.applyMatrix4($n),this}rotateY(e){return $n.makeRotationY(e),this.applyMatrix4($n),this}rotateZ(e){return $n.makeRotationZ(e),this.applyMatrix4($n),this}translate(e,t,n){return $n.makeTranslation(e,t,n),this.applyMatrix4($n),this}scale(e,t,n){return $n.makeScale(e,t,n),this.applyMatrix4($n),this}lookAt(e){return Zf.lookAt(e),Zf.updateMatrix(),this.applyMatrix4(Zf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hr).negate(),this.translate(Hr.x,Hr.y,Hr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Pe(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];zn.setFromBufferAttribute(r),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){let n=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Ta.setFromBufferAttribute(a),this.morphTargetsRelative?(sn.addVectors(zn.min,Ta.min),zn.expandByPoint(sn),sn.addVectors(zn.max,Ta.max),zn.expandByPoint(sn)):(zn.expandByPoint(Ta.min),zn.expandByPoint(Ta.max))}zn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)sn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(sn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)sn.fromBufferAttribute(a,c),l&&(Hr.fromBufferAttribute(e,c),sn.add(Hr)),s=Math.max(s,n.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new yt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let y=0;y<n.count;y++)a[y]=new R,l[y]=new R;let c=new R,h=new R,d=new R,u=new ne,f=new ne,p=new ne,_=new R,m=new R;function g(y,w,I){c.fromBufferAttribute(n,y),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,I),u.fromBufferAttribute(r,y),f.fromBufferAttribute(r,w),p.fromBufferAttribute(r,I),h.sub(c),d.sub(c),f.sub(u),p.sub(u);let D=1/(f.x*p.y-p.x*f.y);isFinite(D)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(D),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(D),a[y].add(_),a[w].add(_),a[I].add(_),l[y].add(m),l[w].add(m),l[I].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let y=0,w=b.length;y<w;++y){let I=b[y],D=I.start,L=I.count;for(let q=D,Y=D+L;q<Y;q+=3)g(e.getX(q+0),e.getX(q+1),e.getX(q+2))}let S=new R,x=new R,A=new R,M=new R;function C(y){A.fromBufferAttribute(s,y),M.copy(A);let w=a[y];S.copy(w),S.sub(A.multiplyScalar(A.dot(w))).normalize(),x.crossVectors(M,w);let D=x.dot(l[y])<0?-1:1;o.setXYZW(y,S.x,S.y,S.z,D)}for(let y=0,w=b.length;y<w;++y){let I=b[y],D=I.start,L=I.count;for(let q=D,Y=D+L;q<Y;q+=3)C(e.getX(q+0)),C(e.getX(q+1)),C(e.getX(q+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new yt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new R,r=new R,o=new R,a=new R,l=new R,c=new R,h=new R,d=new R;if(e)for(let u=0,f=e.count;u<f;u+=3){let p=e.getX(u+0),_=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)sn.fromBufferAttribute(e,t),sn.normalize(),e.setXYZ(t,sn.x,sn.y,sn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,p=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let g=0;g<h;g++)u[p++]=c[f++]}return new yt(u,h,d)}if(this.index===null)return ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},cr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=lo,this.updateRanges=[],this.version=0,this.uuid=Vn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Sn=new R,Es=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Sn.fromBufferAttribute(this,t),Sn.applyMatrix4(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Sn.fromBufferAttribute(this,t),Sn.applyNormalMatrix(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Sn.fromBufferAttribute(this,t),Sn.transformDirection(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Tn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ct(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Tn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Tn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Tn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Tn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),s=ct(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),s=ct(s,this.array),r=ct(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){ho("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new yt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ho("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},$y=0,Zt=class extends Dn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$y++}),this.uuid=Vn(),this.name="",this.type="Material",this.blending=Ms,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=za,this.blendDst=Va,this.blendEquation=ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=Ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=du,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ys,this.stencilZFail=ys,this.stencilZPass=ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){ve(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ve(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ms&&(n.blending=this.blending),this.side!==wi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==za&&(n.blendSrc=this.blendSrc),this.blendDst!==Va&&(n.blendDst=this.blendDst),this.blendEquation!==ji&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ts&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==du&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ys&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ys&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ys&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new be().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ne().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ne().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},mo=class extends Zt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Wr,Aa=new R,Xr=new R,qr=new R,Yr=new ne,wa=new ne,q_=new nt,Ch=new R,Ea=new R,Rh=new R,$g=new ne,$f=new ne,Jg=new ne,Qa=class extends xt{constructor(e=new mo){if(super(),this.isSprite=!0,this.type="Sprite",Wr===void 0){Wr=new it;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new cr(t,5);Wr.setIndex([0,1,2,0,2,3]),Wr.setAttribute("position",new Es(n,3,0,!1)),Wr.setAttribute("uv",new Es(n,2,3,!1))}this.geometry=Wr,this.material=e,this.center=new ne(.5,.5),this.count=1}raycast(e,t){e.camera===null&&ke('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Xr.setFromMatrixScale(this.matrixWorld),q_.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),qr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Xr.multiplyScalar(-qr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Ih(Ch.set(-.5,-.5,0),qr,o,Xr,s,r),Ih(Ea.set(.5,-.5,0),qr,o,Xr,s,r),Ih(Rh.set(.5,.5,0),qr,o,Xr,s,r),$g.set(0,0),$f.set(1,0),Jg.set(1,1);let a=e.ray.intersectTriangle(Ch,Ea,Rh,!1,Aa);if(a===null&&(Ih(Ea.set(-.5,.5,0),qr,o,Xr,s,r),$f.set(0,1),a=e.ray.intersectTriangle(Ch,Rh,Ea,!1,Aa),a===null))return;let l=e.ray.origin.distanceTo(Aa);l<e.near||l>e.far||t.push({distance:l,point:Aa.clone(),uv:fi.getInterpolation(Aa,Ch,Ea,Rh,$g,$f,Jg,new ne),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ih(i,e,t,n,s,r){Yr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(wa.x=r*Yr.x-s*Yr.y,wa.y=s*Yr.x+r*Yr.y):wa.copy(Yr),i.copy(e),i.x+=wa.x,i.y+=wa.y,i.applyMatrix4(q_)}var Ph=new R,Kg=new R,el=class extends xt{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);let t=e.levels;for(let n=0,s=t.length;n<s;n++){let r=t[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);let s=this.levels,r;for(r=0;r<s.length&&!(t<s[r].distance);r++);return s.splice(r,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){let t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){let s=t.splice(n,1);return this.remove(s[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){let t=this.levels;if(t.length>0){let n,s;for(n=1,s=t.length;n<s;n++){let r=t[n].distance;if(t[n].object.visible&&(r-=r*t[n].hysteresis),e<r)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){Ph.setFromMatrixPosition(this.matrixWorld);let s=e.ray.origin.distanceTo(Ph);this.getObjectForDistance(s).raycast(e,t)}}update(e){let t=this.levels;if(t.length>1){Ph.setFromMatrixPosition(e.matrixWorld),Kg.setFromMatrixPosition(this.matrixWorld);let n=Ph.distanceTo(Kg)/e.zoom;t[0].object.visible=!0;let s,r;for(s=1,r=t.length;s<r;s++){let o=t[s].distance;if(t[s].object.visible&&(o-=o*t[s].hysteresis),n>=o)t[s-1].object.visible=!1,t[s].object.visible=!0;else break}for(this._currentLevel=s-1;s<r;s++)t[s].object.visible=!1}}toJSON(e){let t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];let n=this.levels;for(let s=0,r=n.length;s<r;s++){let o=n[s];t.object.levels.push({object:o.object.uuid,distance:o.distance,hysteresis:o.hysteresis})}return t}},qi=new R,Jf=new R,Dh=new R,_s=new R,Kf=new R,Lh=new R,jf=new R,Qi=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=qi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qi.copy(this.origin).addScaledVector(this.direction,t),qi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Jf.copy(e).add(t).multiplyScalar(.5),Dh.copy(t).sub(e).normalize(),_s.copy(this.origin).sub(Jf);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Dh),a=_s.dot(this.direction),l=-_s.dot(Dh),c=_s.lengthSq(),h=Math.abs(1-o*o),d,u,f,p;if(h>0)if(d=o*l-a,u=o*a-l,p=r*h,d>=0)if(u>=-p)if(u<=p){let _=1/h;d*=_,u*=_,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Jf).addScaledVector(Dh,u),f}intersectSphere(e,t){qi.subVectors(e.center,this.origin);let n=qi.dot(this.direction),s=qi.dot(qi)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,qi)!==null}intersectTriangle(e,t,n,s,r){Kf.subVectors(t,e),Lh.subVectors(n,e),jf.crossVectors(Kf,Lh);let o=this.direction.dot(jf),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;_s.subVectors(this.origin,e);let l=a*this.direction.dot(Lh.crossVectors(_s,Lh));if(l<0)return null;let c=a*this.direction.dot(Kf.cross(_s));if(c<0||l+c>o)return null;let h=-a*_s.dot(jf);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},kn=class extends Zt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=Go,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},jg=new nt,qs=new Qi,Nh=new Yt,Qg=new R,Uh=new R,Oh=new R,Fh=new R,Qf=new R,Bh=new R,e0=new R,zh=new R,Pt=class extends xt{constructor(e=new it,t=new kn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Bh.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(Qf.fromBufferAttribute(d,e),o?Bh.addScaledVector(Qf,h):Bh.addScaledVector(Qf.sub(t),h))}t.add(Bh)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Nh.copy(n.boundingSphere),Nh.applyMatrix4(r),qs.copy(e.ray).recast(e.near),!(Nh.containsPoint(qs.origin)===!1&&(qs.intersectSphere(Nh,Qg)===null||qs.origin.distanceToSquared(Qg)>(e.far-e.near)**2))&&(jg.copy(r).invert(),qs.copy(e.ray).applyMatrix4(jg),!(n.boundingBox!==null&&qs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,qs)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=u.length;p<_;p++){let m=u[p],g=o[m.materialIndex],b=Math.max(m.start,f.start),S=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=b,A=S;x<A;x+=3){let M=a.getX(x),C=a.getX(x+1),y=a.getX(x+2);s=Vh(this,g,e,n,c,h,d,M,C,y),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){let b=a.getX(m),S=a.getX(m+1),x=a.getX(m+2);s=Vh(this,o,e,n,c,h,d,b,S,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,_=u.length;p<_;p++){let m=u[p],g=o[m.materialIndex],b=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=b,A=S;x<A;x+=3){let M=x,C=x+1,y=x+2;s=Vh(this,g,e,n,c,h,d,M,C,y),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){let b=m,S=m+1,x=m+2;s=Vh(this,o,e,n,c,h,d,b,S,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Jy(i,e,t,n,s,r,o,a){let l;if(e.side===xn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===wi,a),l===null)return null;zh.copy(a),zh.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(zh);return c<t.near||c>t.far?null:{distance:c,point:zh.clone(),object:i}}function Vh(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Uh),i.getVertexPosition(l,Oh),i.getVertexPosition(c,Fh);let h=Jy(i,e,t,n,Uh,Oh,Fh,e0);if(h){let d=new R;fi.getBarycoord(e0,Uh,Oh,Fh,d),s&&(h.uv=fi.getInterpolatedAttribute(s,a,l,c,d,new ne)),r&&(h.uv1=fi.getInterpolatedAttribute(r,a,l,c,d,new ne)),o&&(h.normal=fi.getInterpolatedAttribute(o,a,l,c,d,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new R,materialIndex:0};fi.getNormal(Uh,Oh,Fh,u.normal),h.face=u,h.barycoord=d}return h}var Ca=new Mt,t0=new Mt,n0=new Mt,Ky=new Mt,i0=new nt,kh=new R,ep=new Yt,s0=new nt,tp=new Qi,tl=class extends Pt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=hu,this.bindMatrix=new nt,this.bindMatrixInverse=new nt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Kt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,kh),this.boundingBox.expandByPoint(kh)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Yt),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,kh),this.boundingSphere.expandByPoint(kh)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ep.copy(this.boundingSphere),ep.applyMatrix4(s),e.ray.intersectsSphere(ep)!==!1&&(s0.copy(s).invert(),tp.copy(e.ray).applyMatrix4(s0),!(this.boundingBox!==null&&tp.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,tp)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Mt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===hu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===jp?this.bindMatrixInverse.copy(this.bindMatrix).invert():ve("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;t0.fromBufferAttribute(s.attributes.skinIndex,e),n0.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(Ca.copy(t),t.set(0,0,0,0)):(Ca.set(...t,1),t.set(0,0,0)),Ca.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=n0.getComponent(r);if(o!==0){let a=t0.getComponent(r);i0.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Ky.copy(Ca).applyMatrix4(i0),o)}}return t.isVector4&&(t.w=Ca.w),t.applyMatrix4(this.bindMatrixInverse)}},go=class extends xt{constructor(){super(),this.isBone=!0,this.type="Bone"}},wn=class extends Ft{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Ot,h=Ot,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},r0=new nt,jy=new nt,nl=class i{constructor(e=[],t=[]){this.uuid=Vn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){ve("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new nt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new nt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:jy;r0.multiplyMatrices(a,t[r]),r0.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new wn(t,e,e,_n,gn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(ve("Skeleton: No bone found with UUID:",r),o=new go),this.bones.push(o),this.boneInverses.push(new nt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},es=class extends yt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Zr=new nt,o0=new nt,Gh=[],a0=new Kt,Qy=new nt,Ra=new Pt,Ia=new Yt,il=class extends Pt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new es(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Qy)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Kt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Zr),a0.copy(e.boundingBox).applyMatrix4(Zr),this.boundingBox.union(a0)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Yt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Zr),Ia.copy(e.boundingSphere).applyMatrix4(Zr),this.boundingSphere.union(Ia)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Ra.geometry=this.geometry,Ra.material=this.material,Ra.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ia.copy(this.boundingSphere),Ia.applyMatrix4(n),e.ray.intersectsSphere(Ia)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Zr),o0.multiplyMatrices(n,Zr),Ra.matrixWorld=o0,Ra.raycast(e,Gh);for(let o=0,a=Gh.length;o<a;o++){let l=Gh[o];l.instanceId=r,l.object=this,t.push(l)}Gh.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new es(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new wn(new Float32Array(s*this.count),s,this.count,dc,gn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},np=new R,eb=new R,tb=new rt,di=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=np.subVectors(n,t).cross(eb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(np),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||tb.getNormalMatrix(e),s=this.coplanarPoint(np).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ys=new Yt,nb=new ne(.5,.5),Hh=new R,Ei=class{constructor(e=new di,t=new di,n=new di,s=new di,r=new di,o=new di){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Pn,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],p=r[8],_=r[9],m=r[10],g=r[11],b=r[12],S=r[13],x=r[14],A=r[15];if(s[0].setComponents(c-o,f-h,g-p,A-b).normalize(),s[1].setComponents(c+o,f+h,g+p,A+b).normalize(),s[2].setComponents(c+a,f+d,g+_,A+S).normalize(),s[3].setComponents(c-a,f-d,g-_,A-S).normalize(),n)s[4].setComponents(l,u,m,x).normalize(),s[5].setComponents(c-l,f-u,g-m,A-x).normalize();else if(s[4].setComponents(c-l,f-u,g-m,A-x).normalize(),t===Pn)s[5].setComponents(c+l,f+u,g+m,A+x).normalize();else if(t===As)s[5].setComponents(l,u,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ys.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ys.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ys)}intersectsSprite(e){Ys.center.set(0,0,0);let t=nb.distanceTo(e.center);return Ys.radius=.7071067811865476+t,Ys.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ys)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Hh.x=s.normal.x>0?e.max.x:e.min.x,Hh.y=s.normal.y>0?e.max.y:e.min.y,Hh.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Hh)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},l0=new nt,sl=class i{constructor(){this.coordinateSystem=Pn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];l0.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Ei),n[s].setFromProjectionMatrix(l0,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Ei),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};function ip(i,e){return i-e}function ib(i,e){return i.z-e.z}function sb(i,e){return e.z-i.z}var _p=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,s){let r=this.pool,o=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});let a=r[this.index];o.push(a),this.index++,a.start=e,a.count=t,a.z=n,a.index=s}reset(){this.list.length=0,this.index=0}},Rn=new nt,rb=new be(1,1,1),ob=new Ei,ab=new sl,Wh=new Kt,Zs=new Yt,Pa=new R,c0=new R,lb=new R,sp=new _p,mn=new Pt,Xh=[];function cb(i,e,t=0){let n=e.itemSize;if(i.isInterleavedBufferAttribute||i.array.constructor!==e.array.constructor){let s=i.count;for(let r=0;r<s;r++)for(let o=0;o<n;o++)e.setComponent(r+t,o,i.getComponent(r,o))}else e.array.set(i.array,t*n);e.needsUpdate=!0}function $s(i,e){if(i.constructor!==e.constructor){let t=Math.min(i.length,e.length);for(let n=0;n<t;n++)e[n]=i[n]}else{let t=Math.min(i.length,e.length);e.set(new i.constructor(i.buffer,0,t))}}var rl=class extends Pt{constructor(e,t,n=t*2,s){super(new it,s),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4),n=new wn(t,e,e,_n,gn);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);let t=new Uint32Array(e*e),n=new wn(t,e,e,qo,Wn);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);let t=new Float32Array(e*e*4).fill(1),n=new wn(t,e,e,_n,gn);n.colorSpace=mt.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){let t=this.geometry,n=this._maxVertexCount,s=this._maxIndexCount;if(this._geometryInitialized===!1){for(let r in e.attributes){let o=e.getAttribute(r),{array:a,itemSize:l,normalized:c}=o,h=new a.constructor(n*l),d=new yt(h,l,c);t.setAttribute(r,d)}if(e.getIndex()!==null){let r=n>65535?new Uint32Array(s):new Uint16Array(s);t.setIndex(new yt(r,1))}this._geometryInitialized=!0}}_validateGeometry(e){let t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(let n in t.attributes){if(!e.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);let s=e.getAttribute(n),r=t.getAttribute(n);if(s.itemSize!==r.itemSize||s.normalized!==r.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(e){let t=this._instanceInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`)}validateGeometryId(e){let t=this._geometryInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`)}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kt);let e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let n=0,s=t.length;n<s;n++){if(t[n].active===!1)continue;let r=t[n].geometryIndex;this.getMatrixAt(n,Rn),this.getBoundingBoxAt(r,Wh).applyMatrix4(Rn),e.union(Wh)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yt);let e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let n=0,s=t.length;n<s;n++){if(t[n].active===!1)continue;let r=t[n].geometryIndex;this.getMatrixAt(n,Rn),this.getBoundingSphereAt(r,Zs).applyMatrix4(Rn),e.union(Zs)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");let n={visible:!0,active:!0,geometryIndex:e},s=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(ip),s=this._availableInstanceIds.shift(),this._instanceInfo[s]=n):(s=this._instanceInfo.length,this._instanceInfo.push(n));let r=this._matricesTexture;Rn.identity().toArray(r.image.data,s*16),r.needsUpdate=!0;let o=this._colorsTexture;return o&&(rb.toArray(o.image.data,s*4),o.needsUpdate=!0),this._visibilityChanged=!0,s}addGeometry(e,t=-1,n=-1){this._initializeGeometry(e),this._validateGeometry(e);let s={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;s.vertexStart=this._nextVertexStart,s.reservedVertexCount=t===-1?e.getAttribute("position").count:t;let o=e.getIndex();if(o!==null&&(s.indexStart=this._nextIndexStart,s.reservedIndexCount=n===-1?o.count:n),s.indexStart!==-1&&s.indexStart+s.reservedIndexCount>this._maxIndexCount||s.vertexStart+s.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let l;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(ip),l=this._availableGeometryIds.shift(),r[l]=s):(l=this._geometryCount,this._geometryCount++,r.push(s)),this.setGeometryAt(l,e),this._nextIndexStart=s.indexStart+s.reservedIndexCount,this._nextVertexStart=s.vertexStart+s.reservedVertexCount,l}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);let n=this.geometry,s=n.getIndex()!==null,r=n.getIndex(),o=t.getIndex(),a=this._geometryInfo[e];if(s&&o.count>a.reservedIndexCount||t.attributes.position.count>a.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");let l=a.vertexStart,c=a.reservedVertexCount;a.vertexCount=t.getAttribute("position").count;for(let h in n.attributes){let d=t.getAttribute(h),u=n.getAttribute(h);cb(d,u,l);let f=d.itemSize;for(let p=d.count,_=c;p<_;p++){let m=l+p;for(let g=0;g<f;g++)u.setComponent(m,g,0)}u.needsUpdate=!0,u.addUpdateRange(l*f,c*f)}if(s){let h=a.indexStart,d=a.reservedIndexCount;a.indexCount=t.getIndex().count;for(let u=0;u<o.count;u++)r.setX(h+u,l+o.getX(u));for(let u=o.count,f=d;u<f;u++)r.setX(h+u,l);r.needsUpdate=!0,r.addUpdateRange(h,a.reservedIndexCount)}return a.start=s?a.indexStart:a.vertexStart,a.count=s?a.indexCount:a.vertexCount,a.boundingBox=null,t.boundingBox!==null&&(a.boundingBox=t.boundingBox.clone()),a.boundingSphere=null,t.boundingSphere!==null&&(a.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){let t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;let n=this._instanceInfo;for(let s=0,r=n.length;s<r;s++)n[s].active&&n[s].geometryIndex===e&&this.deleteInstance(s);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){return this.validateInstanceId(e),this._instanceInfo[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this}optimize(){let e=0,t=0,n=this._geometryInfo,s=n.map((o,a)=>a).sort((o,a)=>n[o].vertexStart-n[a].vertexStart),r=this.geometry;for(let o=0,a=n.length;o<a;o++){let l=s[o],c=n[l];if(c.active!==!1){if(r.index!==null){if(c.indexStart!==t){let{indexStart:h,vertexStart:d,reservedIndexCount:u}=c,f=r.index,p=f.array,_=e-d;for(let m=h;m<h+u;m++)p[m]=p[m]+_;f.array.copyWithin(t,h,h+u),f.addUpdateRange(t,u),f.needsUpdate=!0,c.indexStart=t}t+=c.reservedIndexCount}if(c.vertexStart!==e){let{vertexStart:h,reservedVertexCount:d}=c,u=r.attributes;for(let f in u){let p=u[f],{array:_,itemSize:m}=p;_.copyWithin(e*m,h*m,(h+d)*m),p.addUpdateRange(e*m,d*m),p.needsUpdate=!0}c.vertexStart=e}e+=c.reservedVertexCount,c.start=r.index?c.indexStart:c.vertexStart}}return this._nextIndexStart=t,this._nextVertexStart=e,this._visibilityChanged=!0,this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;let n=this.geometry,s=this._geometryInfo[e];if(s.boundingBox===null){let r=new Kt,o=n.index,a=n.attributes.position;for(let l=s.start,c=s.start+s.count;l<c;l++){let h=l;o&&(h=o.getX(h)),r.expandByPoint(Pa.fromBufferAttribute(a,h))}s.boundingBox=r}return t.copy(s.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;let n=this.geometry,s=this._geometryInfo[e];if(s.boundingSphere===null){let r=new Yt;this.getBoundingBoxAt(e,Wh),Wh.getCenter(r.center);let o=n.index,a=n.attributes.position,l=0;for(let c=s.start,h=s.start+s.count;c<h;c++){let d=c;o&&(d=o.getX(d)),Pa.fromBufferAttribute(a,d),l=Math.max(l,r.center.distanceToSquared(Pa))}r.radius=Math.sqrt(l),s.boundingSphere=r}return t.copy(s.boundingSphere),t}setMatrixAt(e,t){this.validateInstanceId(e);let n=this._matricesTexture,s=this._matricesTexture.image.data;return t.toArray(s,e*16),n.needsUpdate=!0,this}getMatrixAt(e,t){return this.validateInstanceId(e),t.fromArray(this._matricesTexture.image.data,e*16)}setColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null&&this._initColorsTexture(),t.toArray(this._colorsTexture.image.data,e*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null?t.isVector4?t.set(1,1,1,1):t.setRGB(1,1,1):t.fromArray(this._colorsTexture.image.data,e*4)}setVisibleAt(e,t){return this.validateInstanceId(e),this._instanceInfo[e].visible===t?this:(this._instanceInfo[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){return this.validateInstanceId(e),this._instanceInfo[e].visible}setGeometryIdAt(e,t){return this.validateInstanceId(e),this.validateGeometryId(t),this._instanceInfo[e].geometryIndex=t,this}getGeometryIdAt(e){return this.validateInstanceId(e),this._instanceInfo[e].geometryIndex}getGeometryRangeAt(e,t={}){this.validateGeometryId(e);let n=this._geometryInfo[e];return t.vertexStart=n.vertexStart,t.vertexCount=n.vertexCount,t.reservedVertexCount=n.reservedVertexCount,t.indexStart=n.indexStart,t.indexCount=n.indexCount,t.reservedIndexCount=n.reservedIndexCount,t.start=n.start,t.count=n.count,t}setInstanceCount(e){let t=this._availableInstanceIds,n=this._instanceInfo;for(t.sort(ip);t[t.length-1]===n.length-1;)n.pop(),t.pop();if(e<n.length)throw new Error(`THREE.BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);let s=new Int32Array(e),r=new Int32Array(e);$s(this._multiDrawCounts,s),$s(this._multiDrawStarts,r),this._multiDrawCounts=s,this._multiDrawStarts=r,this._maxInstanceCount=e;let o=this._indirectTexture,a=this._matricesTexture,l=this._colorsTexture;o.dispose(),this._initIndirectTexture(),$s(o.image.data,this._indirectTexture.image.data),a.dispose(),this._initMatricesTexture(),$s(a.image.data,this._matricesTexture.image.data),l&&(l.dispose(),this._initColorsTexture(),$s(l.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){let n=[...this._geometryInfo].filter(a=>a.active);if(Math.max(...n.map(a=>a.vertexStart+a.reservedVertexCount))>e)throw new Error(`THREE.BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(l=>l.indexStart+l.reservedIndexCount))>t)throw new Error(`THREE.BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);let r=this.geometry;r.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new it,this._initializeGeometry(r));let o=this.geometry;r.index&&$s(r.index.array,o.index.array);for(let a in r.attributes)$s(r.attributes[a].array,o.attributes[a].array)}raycast(e,t){let n=this._instanceInfo,s=this._geometryInfo,r=this.matrixWorld,o=this.geometry;mn.material=this.material,mn.geometry.index=o.index,mn.geometry.attributes=o.attributes,mn.geometry.boundingBox===null&&(mn.geometry.boundingBox=new Kt),mn.geometry.boundingSphere===null&&(mn.geometry.boundingSphere=new Yt);for(let a=0,l=n.length;a<l;a++){if(!n[a].visible||!n[a].active)continue;let c=n[a].geometryIndex,h=s[c];mn.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(a,mn.matrixWorld).premultiply(r),this.getBoundingBoxAt(c,mn.geometry.boundingBox),this.getBoundingSphereAt(c,mn.geometry.boundingSphere),mn.raycast(e,Xh);for(let d=0,u=Xh.length;d<u;d++){let f=Xh[d];f.object=this,f.batchId=a,t.push(f)}Xh.length=0}mn.material=null,mn.geometry.index=null,mn.geometry.attributes={},mn.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._availableInstanceIds=e._availableInstanceIds.slice(),this._availableGeometryIds=e._availableGeometryIds.slice(),this._nextIndexStart=e._nextIndexStart,this._nextVertexStart=e._nextVertexStart,this._geometryCount=e._geometryCount,this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._indirectTexture=e._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(e,t,n,s,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;let o=s.getIndex(),a=o===null?1:o.array.BYTES_PER_ELEMENT,l=1;r.wireframe&&(l=2,a=s.attributes.position.count>65535?4:2);let c=this._instanceInfo,h=this._multiDrawStarts,d=this._multiDrawCounts,u=this._geometryInfo,f=this.perObjectFrustumCulled,p=this._indirectTexture,_=p.image.data,m=n.isArrayCamera?ab:ob;f&&(n.isArrayCamera?m.setFromArrayCamera(n):(Rn.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),m.setFromProjectionMatrix(Rn,n.coordinateSystem,n.reversedDepth)));let g=0;if(this.sortObjects){Rn.copy(this.matrixWorld).invert(),Pa.setFromMatrixPosition(n.matrixWorld).applyMatrix4(Rn),c0.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(Rn);for(let x=0,A=c.length;x<A;x++)if(c[x].visible&&c[x].active){let M=c[x].geometryIndex;this.getMatrixAt(x,Rn),this.getBoundingSphereAt(M,Zs).applyMatrix4(Rn);let C=!1;if(f&&(C=!m.intersectsSphere(Zs)),!C){let y=u[M],w=lb.subVectors(Zs.center,Pa).dot(c0);sp.push(y.start,y.count,w,x)}}let b=sp.list,S=this.customSort;S===null?b.sort(r.transparent?sb:ib):S.call(this,b,n);for(let x=0,A=b.length;x<A;x++){let M=b[x];h[g]=M.start*a*l,d[g]=M.count*l,_[g]=M.index,g++}sp.reset()}else for(let b=0,S=c.length;b<S;b++)if(c[b].visible&&c[b].active){let x=c[b].geometryIndex,A=!1;if(f&&(this.getMatrixAt(b,Rn),this.getBoundingSphereAt(x,Zs).applyMatrix4(Rn),A=!m.intersectsSphere(Zs)),!A){let M=u[x];h[g]=M.start*a*l,d[g]=M.count*l,_[g]=b,g++}}p.needsUpdate=!0,this._multiDrawCount=g,this._visibilityChanged=!1}onBeforeShadow(e,t,n,s,r,o){this.onBeforeRender(e,null,s,r,o)}},on=class extends Zt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Su=new R,Mu=new R,h0=new nt,Da=new Qi,qh=new Yt,rp=new R,u0=new R,_i=class extends xt{constructor(e=new it,t=new on){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Su.fromBufferAttribute(t,s-1),Mu.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Su.distanceTo(Mu);e.setAttribute("lineDistance",new Pe(n,1))}else ve("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qh.copy(n.boundingSphere),qh.applyMatrix4(s),qh.radius+=r,e.ray.intersectsSphere(qh)===!1)return;h0.copy(s).invert(),Da.copy(e.ray).applyMatrix4(h0);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let _=f,m=p-1;_<m;_+=c){let g=h.getX(_),b=h.getX(_+1),S=Yh(this,e,Da,l,g,b,_);S&&t.push(S)}if(this.isLineLoop){let _=h.getX(p-1),m=h.getX(f),g=Yh(this,e,Da,l,_,m,p-1);g&&t.push(g)}}else{let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let _=f,m=p-1;_<m;_+=c){let g=Yh(this,e,Da,l,_,_+1,_);g&&t.push(g)}if(this.isLineLoop){let _=Yh(this,e,Da,l,p-1,f,p-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Yh(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(Su.fromBufferAttribute(a,s),Mu.fromBufferAttribute(a,r),t.distanceSqToSegment(Su,Mu,rp,u0)>n)return;rp.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(rp);if(!(c<e.near||c>e.far))return{distance:c,point:u0.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var d0=new R,f0=new R,Gn=class extends _i{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)d0.fromBufferAttribute(t,s),f0.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+d0.distanceTo(f0);e.setAttribute("lineDistance",new Pe(n,1))}else ve("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ol=class extends _i{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},_o=class extends Zt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},p0=new nt,xp=new Qi,Zh=new Yt,$h=new R,al=class extends xt{constructor(e=new it,t=new _o){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zh.copy(n.boundingSphere),Zh.applyMatrix4(s),Zh.radius+=r,e.ray.intersectsSphere(Zh)===!1)return;p0.copy(s).invert(),xp.copy(e.ray).applyMatrix4(p0);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=u,_=f;p<_;p++){let m=c.getX(p);$h.fromBufferAttribute(d,m),m0($h,m,l,s,e,t,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let p=u,_=f;p<_;p++)$h.fromBufferAttribute(d,p),m0($h,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function m0(i,e,t,n,s,r,o){let a=xp.distanceSqToPoint(i);if(a<t){let l=new R;xp.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var ll=class extends Ft{constructor(e,t,n,s,r=It,o=It,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;let h=this;function d(){h.needsUpdate=!0,h._requestVideoFrameCallbackId=e.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(d))}clone(){return new this.constructor(this.image).copy(this)}update(){let e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}},Tu=class extends ll{constructor(e,t,n,s,r,o,a,l){super({},e,t,n,s,r,o,a,l),this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(e){this.image=e,this.needsUpdate=!0}},Au=class extends Ft{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=Ot,this.minFilter=Ot,this.generateMipmaps=!1,this.needsUpdate=!0}},hr=class extends Ft{constructor(e,t,n,s,r,o,a,l,c,h,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}},wu=class extends hr{constructor(e,t,n,s,r,o){super(e,t,n,r,o),this.isCompressedArrayTexture=!0,this.image.depth=s,this.wrapR=An,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Eu=class extends hr{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,yi),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}},Cs=class extends Ft{constructor(e=[],t=yi,n,s,r,o,a,l,c,h){super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Cu=class extends Ft{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ru=class extends Ft{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isHTMLTexture=!0,this.generateMipmaps=!1,this.needsUpdate=!0;let h=e?e.parentNode:null;h!==null&&"requestPaint"in h&&(h.onpaint=()=>{this.needsUpdate=!0},h.requestPaint())}dispose(){let e=this.image?this.image.parentNode:null;e!==null&&"onpaint"in e&&(e.onpaint=null),super.dispose()}},Ci=class extends Ft{constructor(e,t,n=Wn,s,r,o,a=Ot,l=Ot,c,h=gi,d=1){if(h!==gi&&h!==ss)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new pi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},cl=class extends Ci{constructor(e,t=Wn,n=yi,s,r,o=Ot,a=Ot,l,c=gi){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},xo=class extends Ft{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Rs=class i extends it{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,s,o,2),p("x","z","y",1,-1,e,n,-t,s,o,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Pe(c,3)),this.setAttribute("normal",new Pe(h,3)),this.setAttribute("uv",new Pe(d,2));function p(_,m,g,b,S,x,A,M,C,y,w){let I=x/C,D=A/y,L=x/2,q=A/2,Y=M/2,U=C+1,k=y+1,G=0,K=0,V=new R;for(let re=0;re<k;re++){let le=re*D-q;for(let me=0;me<U;me++){let tt=me*I-L;V[_]=tt*b,V[m]=le*S,V[g]=Y,c.push(V.x,V.y,V.z),V[_]=0,V[m]=0,V[g]=M>0?1:-1,h.push(V.x,V.y,V.z),d.push(me/C),d.push(1-re/y),G+=1}}for(let re=0;re<y;re++)for(let le=0;le<C;le++){let me=u+le+U*re,tt=u+le+U*(re+1),pt=u+(le+1)+U*(re+1),je=u+(le+1)+U*re;l.push(me,tt,je),l.push(tt,pt,je),K+=6}a.addGroup(f,K,w),f+=K,u+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},hl=class i extends it{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=t/2,d=Math.PI/2*e,u=t,f=2*d+u,p=n*2+r,_=s+1,m=new R,g=new R;for(let b=0;b<=p;b++){let S=0,x=0,A=0,M=0;if(b<=n){let w=b/n,I=w*Math.PI/2;x=-h-e*Math.cos(I),A=e*Math.sin(I),M=-e*Math.cos(I),S=w*d}else if(b<=n+r){let w=(b-n)/r;x=-h+w*t,A=e,M=0,S=d+w*u}else{let w=(b-n-r)/n,I=w*Math.PI/2;x=h+e*Math.sin(I),A=e*Math.cos(I),M=e*Math.sin(I),S=d+u+w*d}let C=Math.max(0,Math.min(1,S/f)),y=0;b===0?y=.5/s:b===p&&(y=-.5/s);for(let w=0;w<=s;w++){let I=w/s,D=I*Math.PI*2,L=Math.sin(D),q=Math.cos(D);g.x=-A*q,g.y=x,g.z=A*L,a.push(g.x,g.y,g.z),m.set(-A*q,M,A*L),m.normalize(),l.push(m.x,m.y,m.z),c.push(I+y,C)}if(b>0){let w=(b-1)*_;for(let I=0;I<s;I++){let D=w+I,L=w+I+1,q=b*_+I,Y=b*_+I+1;o.push(D,L,q),o.push(L,Y,q)}}}this.setIndex(o),this.setAttribute("position",new Pe(a,3)),this.setAttribute("normal",new Pe(l,3)),this.setAttribute("uv",new Pe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},ul=class i extends it{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new R,h=new ne;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let f=n+d/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Pe(o,3)),this.setAttribute("normal",new Pe(a,3)),this.setAttribute("uv",new Pe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},vo=class i extends it{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],p=0,_=[],m=n/2,g=0;b(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new Pe(d,3)),this.setAttribute("normal",new Pe(u,3)),this.setAttribute("uv",new Pe(f,2));function b(){let x=new R,A=new R,M=0,C=(t-e)/n;for(let y=0;y<=r;y++){let w=[],I=y/r,D=I*(t-e)+e;for(let L=0;L<=s;L++){let q=L/s,Y=q*l+a,U=Math.sin(Y),k=Math.cos(Y);A.x=D*U,A.y=-I*n+m,A.z=D*k,d.push(A.x,A.y,A.z),x.set(U,C,k).normalize(),u.push(x.x,x.y,x.z),f.push(q,1-I),w.push(p++)}_.push(w)}for(let y=0;y<s;y++)for(let w=0;w<r;w++){let I=_[w][y],D=_[w+1][y],L=_[w+1][y+1],q=_[w][y+1];(e>0||w!==0)&&(h.push(I,D,q),M+=3),(t>0||w!==r-1)&&(h.push(D,L,q),M+=3)}c.addGroup(g,M,0),g+=M}function S(x){let A=p,M=new ne,C=new R,y=0,w=x===!0?e:t,I=x===!0?1:-1;for(let L=1;L<=s;L++)d.push(0,m*I,0),u.push(0,I,0),f.push(.5,.5),p++;let D=p;for(let L=0;L<=s;L++){let Y=L/s*l+a,U=Math.cos(Y),k=Math.sin(Y);C.x=w*k,C.y=m*I,C.z=w*U,d.push(C.x,C.y,C.z),u.push(0,I,0),M.x=U*.5+.5,M.y=k*.5*I+.5,f.push(M.x,M.y),p++}for(let L=0;L<s;L++){let q=A+L,Y=D+L;x===!0?h.push(Y,Y+1,q):h.push(Y+1,Y,q),y+=3}c.addGroup(g,y,x===!0?1:2),g+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},yo=class i extends vo{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ts=class i extends it{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new Pe(r,3)),this.setAttribute("normal",new Pe(r.slice(),3)),this.setAttribute("uv",new Pe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(b){let S=new R,x=new R,A=new R;for(let M=0;M<t.length;M+=3)f(t[M+0],S),f(t[M+1],x),f(t[M+2],A),l(S,x,A,b)}function l(b,S,x,A){let M=A+1,C=[];for(let y=0;y<=M;y++){C[y]=[];let w=b.clone().lerp(x,y/M),I=S.clone().lerp(x,y/M),D=M-y;for(let L=0;L<=D;L++)L===0&&y===M?C[y][L]=w:C[y][L]=w.clone().lerp(I,L/D)}for(let y=0;y<M;y++)for(let w=0;w<2*(M-y)-1;w++){let I=Math.floor(w/2);w%2===0?(u(C[y][I+1]),u(C[y+1][I]),u(C[y][I])):(u(C[y][I+1]),u(C[y+1][I+1]),u(C[y+1][I]))}}function c(b){let S=new R;for(let x=0;x<r.length;x+=3)S.x=r[x+0],S.y=r[x+1],S.z=r[x+2],S.normalize().multiplyScalar(b),r[x+0]=S.x,r[x+1]=S.y,r[x+2]=S.z}function h(){let b=new R;for(let S=0;S<r.length;S+=3){b.x=r[S+0],b.y=r[S+1],b.z=r[S+2];let x=m(b)/2/Math.PI+.5,A=g(b)/Math.PI+.5;o.push(x,1-A)}p(),d()}function d(){for(let b=0;b<o.length;b+=6){let S=o[b+0],x=o[b+2],A=o[b+4],M=Math.max(S,x,A),C=Math.min(S,x,A);M>.9&&C<.1&&(S<.2&&(o[b+0]+=1),x<.2&&(o[b+2]+=1),A<.2&&(o[b+4]+=1))}}function u(b){r.push(b.x,b.y,b.z)}function f(b,S){let x=b*3;S.x=e[x+0],S.y=e[x+1],S.z=e[x+2]}function p(){let b=new R,S=new R,x=new R,A=new R,M=new ne,C=new ne,y=new ne;for(let w=0,I=0;w<r.length;w+=9,I+=6){b.set(r[w+0],r[w+1],r[w+2]),S.set(r[w+3],r[w+4],r[w+5]),x.set(r[w+6],r[w+7],r[w+8]),M.set(o[I+0],o[I+1]),C.set(o[I+2],o[I+3]),y.set(o[I+4],o[I+5]),A.copy(b).add(S).add(x).divideScalar(3);let D=m(A);_(M,I+0,b,D),_(C,I+2,S,D),_(y,I+4,x,D)}}function _(b,S,x,A){A<0&&b.x===1&&(o[S]=b.x-1),x.x===0&&x.z===0&&(o[S]=A/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function g(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}},dl=class i extends ts{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Jh=new R,Kh=new R,op=new R,jh=new fi,fl=class extends it{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(ir*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),u={},f=[];for(let p=0;p<l;p+=3){o?(c[0]=o.getX(p),c[1]=o.getX(p+1),c[2]=o.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);let{a:_,b:m,c:g}=jh;if(_.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),g.fromBufferAttribute(a,c[2]),jh.getNormal(op),d[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,d[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,d[2]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let b=0;b<3;b++){let S=(b+1)%3,x=d[b],A=d[S],M=jh[h[b]],C=jh[h[S]],y=`${x}_${A}`,w=`${A}_${x}`;w in u&&u[w]?(op.dot(u[w].normal)<=r&&(f.push(M.x,M.y,M.z),f.push(C.x,C.y,C.z)),u[w]=null):y in u||(u[y]={index0:c[b],index1:c[S],normal:op.clone()})}}for(let p in u)if(u[p]){let{index0:_,index1:m}=u[p];Jh.fromBufferAttribute(a,_),Kh.fromBufferAttribute(a,m),f.push(Jh.x,Jh.y,Jh.z),f.push(Kh.x,Kh.y,Kh.z)}this.setAttribute("position",new Pe(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Ln=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ve("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ne:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new R,s=[],r=[],o=[],a=new R,l=new nt;for(let f=0;f<=e;f++){let p=f/e;s[f]=this.getTangentAt(p,new R)}r[0]=new R,o[0]=new R;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(Qe(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Qe(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ur=class extends Ln{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ne){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},pl=class extends ur{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function dm(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var g0=new R,_0=new R,ap=new dm,lp=new dm,cp=new dm,ml=class extends Ln{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new R){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(_0.subVectors(s[0],s[1]).add(s[0]),c=_0);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(g0.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=g0),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);_<1e-4&&(_=1),p<1e-4&&(p=_),m<1e-4&&(m=_),ap.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,p,_,m),lp.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,p,_,m),cp.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,p,_,m)}else this.curveType==="catmullrom"&&(ap.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),lp.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),cp.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(ap.calc(l),lp.calc(l),cp.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new R().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function x0(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function hb(i,e){let t=1-i;return t*t*e}function ub(i,e){return 2*(1-i)*i*e}function db(i,e){return i*i*e}function Fa(i,e,t,n){return hb(i,e)+ub(i,t)+db(i,n)}function fb(i,e){let t=1-i;return t*t*t*e}function pb(i,e){let t=1-i;return 3*t*t*i*e}function mb(i,e){return 3*(1-i)*i*i*e}function gb(i,e){return i*i*i*e}function Ba(i,e,t,n,s){return fb(i,e)+pb(i,t)+mb(i,n)+gb(i,s)}var bo=class extends Ln{constructor(e=new ne,t=new ne,n=new ne,s=new ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ne){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ba(e,s.x,r.x,o.x,a.x),Ba(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},gl=class extends Ln{constructor(e=new R,t=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new R){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ba(e,s.x,r.x,o.x,a.x),Ba(e,s.y,r.y,o.y,a.y),Ba(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},So=class extends Ln{constructor(e=new ne,t=new ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ne){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ne){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_l=class extends Ln{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Mo=class extends Ln{constructor(e=new ne,t=new ne,n=new ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ne){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Fa(e,s.x,r.x,o.x),Fa(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},To=class extends Ln{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Fa(e,s.x,r.x,o.x),Fa(e,s.y,r.y,o.y),Fa(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ao=class extends Ln{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ne){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(x0(a,l.x,c.x,h.x,d.x),x0(a,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ne().fromArray(s))}return this}},Iu=Object.freeze({__proto__:null,ArcCurve:pl,CatmullRomCurve3:ml,CubicBezierCurve:bo,CubicBezierCurve3:gl,EllipseCurve:ur,LineCurve:So,LineCurve3:_l,QuadraticBezierCurve:Mo,QuadraticBezierCurve3:To,SplineCurve:Ao}),xl=class extends Ln{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Iu[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Iu[s.type]().fromJSON(s))}return this}},Is=class extends xl{constructor(e){super(),this.type="Path",this.currentPoint=new ne,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new So(this.currentPoint.clone(),new ne(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Mo(this.currentPoint.clone(),new ne(e,t),new ne(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new bo(this.currentPoint.clone(),new ne(e,t),new ne(n,s),new ne(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ao(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new ur(e,t,n,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ps=class extends Is{constructor(e){super(e),this.uuid=Vn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Is().fromJSON(s))}return this}};function _b(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Y_(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Sb(i,e,r,t)),i.length>80*t){a=i[0],l=i[1];let h=a,d=l;for(let u=t;u<s;u+=t){let f=i[u],p=i[u+1];f<a&&(a=f),p<l&&(l=p),f>h&&(h=f),p>d&&(d=p)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return vl(r,o,t,a,l,c,0),o}function Y_(i,e,t,n,s){let r;if(s===Lb(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=v0(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=v0(o/n|0,i[o],i[o+1],r);return r&&wo(r,r.next)&&(bl(r),r=r.next),r}function dr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(wo(t,t.next)||Dt(t.prev,t,t.next)===0)){if(bl(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function vl(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Eb(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?vb(i,n,s,r):xb(i)){e.push(l.i,i.i,c.i),bl(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=yb(dr(i),e),vl(i,e,t,n,s,r,2)):o===2&&bb(i,e,t,n,s,r):vl(dr(i),e,t,n,s,r,1);break}}}function xb(i){let e=i.prev,t=i,n=i.next;if(Dt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(s,r,o),d=Math.min(a,l,c),u=Math.max(s,r,o),f=Math.max(a,l,c),p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=u&&p.y>=d&&p.y<=f&&Na(s,a,r,l,o,c,p.x,p.y)&&Dt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function vb(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Dt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,u=o.y,f=Math.min(a,l,c),p=Math.min(h,d,u),_=Math.max(a,l,c),m=Math.max(h,d,u),g=vp(f,p,e,t,n),b=vp(_,m,e,t,n),S=i.prevZ,x=i.nextZ;for(;S&&S.z>=g&&x&&x.z<=b;){if(S.x>=f&&S.x<=_&&S.y>=p&&S.y<=m&&S!==s&&S!==o&&Na(a,h,l,d,c,u,S.x,S.y)&&Dt(S.prev,S,S.next)>=0||(S=S.prevZ,x.x>=f&&x.x<=_&&x.y>=p&&x.y<=m&&x!==s&&x!==o&&Na(a,h,l,d,c,u,x.x,x.y)&&Dt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;S&&S.z>=g;){if(S.x>=f&&S.x<=_&&S.y>=p&&S.y<=m&&S!==s&&S!==o&&Na(a,h,l,d,c,u,S.x,S.y)&&Dt(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;x&&x.z<=b;){if(x.x>=f&&x.x<=_&&x.y>=p&&x.y<=m&&x!==s&&x!==o&&Na(a,h,l,d,c,u,x.x,x.y)&&Dt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function yb(i,e){let t=i;do{let n=t.prev,s=t.next.next;!wo(n,s)&&$_(n,t,t.next,s)&&yl(n,s)&&yl(s,n)&&(e.push(n.i,t.i,s.i),bl(t),bl(t.next),t=i=s),t=t.next}while(t!==i);return dr(t)}function bb(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Ib(o,a)){let l=J_(o,a);o=dr(o,o.next),l=dr(l,l.next),vl(o,e,t,n,s,r,0),vl(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Sb(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=Y_(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Rb(c))}s.sort(Mb);for(let r=0;r<s.length;r++)t=Tb(s[r],t);return t}function Mb(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Tb(i,e){let t=Ab(i,e);if(!t)return e;let n=J_(t,i);return dr(n,n.next),dr(t,t.next)}function Ab(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(wo(i,t))return t;do{if(wo(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Z_(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let d=Math.abs(s-t.y)/(n-t.x);yl(t,i)&&(d<h||d===h&&(t.x>o.x||t.x===o.x&&wb(o,t)))&&(o=t,h=d)}t=t.next}while(t!==a);return o}function wb(i,e){return Dt(i.prev,i,e.prev)<0&&Dt(e.next,i,i.next)<0}function Eb(i,e,t,n){let s=i;do s.z===0&&(s.z=vp(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Cb(s)}function Cb(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function vp(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Rb(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Z_(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Na(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&Z_(i,e,t,n,s,r,o,a)}function Ib(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Pb(i,e)&&(yl(i,e)&&yl(e,i)&&Db(i,e)&&(Dt(i.prev,i,e.prev)||Dt(i,e.prev,e))||wo(i,e)&&Dt(i.prev,i,i.next)>0&&Dt(e.prev,e,e.next)>0)}function Dt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function wo(i,e){return i.x===e.x&&i.y===e.y}function $_(i,e,t,n){let s=eu(Dt(i,e,t)),r=eu(Dt(i,e,n)),o=eu(Dt(t,n,i)),a=eu(Dt(t,n,e));return!!(s!==r&&o!==a||s===0&&Qh(i,t,e)||r===0&&Qh(i,n,e)||o===0&&Qh(t,i,n)||a===0&&Qh(t,e,n))}function Qh(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function eu(i){return i>0?1:i<0?-1:0}function Pb(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&$_(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function yl(i,e){return Dt(i.prev,i,i.next)<0?Dt(i,e,i.next)>=0&&Dt(i,i.prev,e)>=0:Dt(i,e,i.prev)<0||Dt(i,i.next,e)<0}function Db(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function J_(i,e){let t=yp(i.i,i.x,i.y),n=yp(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function v0(i,e,t,n){let s=yp(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function bl(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function yp(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Lb(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var bp=class{static triangulate(e,t,n=2){return _b(e,t,n)}},Jn=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];y0(e),b0(n,e);let o=e.length;t.forEach(y0);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,b0(n,t[l]);let a=bp.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function y0(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function b0(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Sl=class i extends it{constructor(e=new Ps([new ne(.5,.5),new ne(-.5,.5),new ne(-.5,-.5),new ne(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Pe(s,3)),this.setAttribute("uv",new Pe(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:Nb,S,x=!1,A,M,C,y;if(g){S=g.getSpacedPoints(h),x=!0,u=!1;let Q=g.isCatmullRomCurve3?g.closed:!1;A=g.computeFrenetFrames(h,Q),M=new R,C=new R,y=new R}u||(m=0,f=0,p=0,_=0);let w=a.extractPoints(c),I=w.shape,D=w.holes;if(!Jn.isClockWise(I)){I=I.reverse();for(let Q=0,ie=D.length;Q<ie;Q++){let j=D[Q];Jn.isClockWise(j)&&(D[Q]=j.reverse())}}function q(Q){let j=10000000000000001e-36,he=Q[0];for(let ue=1;ue<=Q.length;ue++){let Ce=ue%Q.length,Re=Q[Ce],Ne=Re.x-he.x,Ve=Re.y-he.y,P=Ne*Ne+Ve*Ve,$e=Math.max(Math.abs(Re.x),Math.abs(Re.y),Math.abs(he.x),Math.abs(he.y)),Ue=j*$e*$e;if(P<=Ue){Q.splice(Ce,1),ue--;continue}he=Re}}q(I),D.forEach(q);let Y=D.length,U=I;for(let Q=0;Q<Y;Q++){let ie=D[Q];I=I.concat(ie)}function k(Q,ie,j){return ie||ke("ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(ie,j)}let G=I.length;function K(Q,ie,j){let he,ue,Ce,Re=Q.x-ie.x,Ne=Q.y-ie.y,Ve=j.x-Q.x,P=j.y-Q.y,$e=Re*Re+Ne*Ne,Ue=Re*P-Ne*Ve;if(Math.abs(Ue)>Number.EPSILON){let E=Math.sqrt($e),v=Math.sqrt(Ve*Ve+P*P),O=ie.x-Ne/E,z=ie.y+Re/E,$=j.x-P/v,ce=j.y+Ve/v,pe=(($-O)*P-(ce-z)*Ve)/(Re*P-Ne*Ve);he=O+Re*pe-Q.x,ue=z+Ne*pe-Q.y;let J=he*he+ue*ue;if(J<=2)return new ne(he,ue);Ce=Math.sqrt(J/2)}else{let E=!1;Re>Number.EPSILON?Ve>Number.EPSILON&&(E=!0):Re<-Number.EPSILON?Ve<-Number.EPSILON&&(E=!0):Math.sign(Ne)===Math.sign(P)&&(E=!0),E?(he=-Ne,ue=Re,Ce=Math.sqrt($e)):(he=Re,ue=Ne,Ce=Math.sqrt($e/2))}return new ne(he/Ce,ue/Ce)}let V=[];for(let Q=0,ie=U.length,j=ie-1,he=Q+1;Q<ie;Q++,j++,he++)j===ie&&(j=0),he===ie&&(he=0),V[Q]=K(U[Q],U[j],U[he]);let re=[],le,me=V.concat();for(let Q=0,ie=Y;Q<ie;Q++){let j=D[Q];le=[];for(let he=0,ue=j.length,Ce=ue-1,Re=he+1;he<ue;he++,Ce++,Re++)Ce===ue&&(Ce=0),Re===ue&&(Re=0),le[he]=K(j[he],j[Ce],j[Re]);re.push(le),me=me.concat(le)}let tt;if(m===0)tt=Jn.triangulateShape(U,D);else{let Q=[],ie=[];for(let j=0;j<m;j++){let he=j/m,ue=f*Math.cos(he*Math.PI/2),Ce=p*Math.sin(he*Math.PI/2)+_;for(let Re=0,Ne=U.length;Re<Ne;Re++){let Ve=k(U[Re],V[Re],Ce);fe(Ve.x,Ve.y,-ue),he===0&&Q.push(Ve)}for(let Re=0,Ne=Y;Re<Ne;Re++){let Ve=D[Re];le=re[Re];let P=[];for(let $e=0,Ue=Ve.length;$e<Ue;$e++){let E=k(Ve[$e],le[$e],Ce);fe(E.x,E.y,-ue),he===0&&P.push(E)}he===0&&ie.push(P)}}tt=Jn.triangulateShape(Q,ie)}let pt=tt.length,je=p+_;for(let Q=0;Q<G;Q++){let ie=u?k(I[Q],me[Q],je):I[Q];x?(C.copy(A.normals[0]).multiplyScalar(ie.x),M.copy(A.binormals[0]).multiplyScalar(ie.y),y.copy(S[0]).add(C).add(M),fe(y.x,y.y,y.z)):fe(ie.x,ie.y,0)}for(let Q=1;Q<=h;Q++)for(let ie=0;ie<G;ie++){let j=u?k(I[ie],me[ie],je):I[ie];x?(C.copy(A.normals[Q]).multiplyScalar(j.x),M.copy(A.binormals[Q]).multiplyScalar(j.y),y.copy(S[Q]).add(C).add(M),fe(y.x,y.y,y.z)):fe(j.x,j.y,d/h*Q)}for(let Q=m-1;Q>=0;Q--){let ie=Q/m,j=f*Math.cos(ie*Math.PI/2),he=p*Math.sin(ie*Math.PI/2)+_;for(let ue=0,Ce=U.length;ue<Ce;ue++){let Re=k(U[ue],V[ue],he);fe(Re.x,Re.y,d+j)}for(let ue=0,Ce=D.length;ue<Ce;ue++){let Re=D[ue];le=re[ue];for(let Ne=0,Ve=Re.length;Ne<Ve;Ne++){let P=k(Re[Ne],le[Ne],he);x?fe(P.x,P.y+S[h-1].y,S[h-1].x+j):fe(P.x,P.y,d+j)}}}X(),de();function X(){let Q=s.length/3;if(u){let ie=0,j=G*ie;for(let he=0;he<pt;he++){let ue=tt[he];ze(ue[2]+j,ue[1]+j,ue[0]+j)}ie=h+m*2,j=G*ie;for(let he=0;he<pt;he++){let ue=tt[he];ze(ue[0]+j,ue[1]+j,ue[2]+j)}}else{for(let ie=0;ie<pt;ie++){let j=tt[ie];ze(j[2],j[1],j[0])}for(let ie=0;ie<pt;ie++){let j=tt[ie];ze(j[0]+G*h,j[1]+G*h,j[2]+G*h)}}n.addGroup(Q,s.length/3-Q,0)}function de(){let Q=s.length/3,ie=0;se(U,ie),ie+=U.length;for(let j=0,he=D.length;j<he;j++){let ue=D[j];se(ue,ie),ie+=ue.length}n.addGroup(Q,s.length/3-Q,1)}function se(Q,ie){let j=Q.length;for(;--j>=0;){let he=j,ue=j-1;ue<0&&(ue=Q.length-1);for(let Ce=0,Re=h+m*2;Ce<Re;Ce++){let Ne=G*Ce,Ve=G*(Ce+1),P=ie+he+Ne,$e=ie+ue+Ne,Ue=ie+ue+Ve,E=ie+he+Ve;Le(P,$e,Ue,E)}}}function fe(Q,ie,j){l.push(Q),l.push(ie),l.push(j)}function ze(Q,ie,j){De(Q),De(ie),De(j);let he=s.length/3,ue=b.generateTopUV(n,s,he-3,he-2,he-1);Me(ue[0]),Me(ue[1]),Me(ue[2])}function Le(Q,ie,j,he){De(Q),De(ie),De(he),De(ie),De(j),De(he);let ue=s.length/3,Ce=b.generateSideWallUV(n,s,ue-6,ue-3,ue-2,ue-1);Me(Ce[0]),Me(Ce[1]),Me(Ce[3]),Me(Ce[1]),Me(Ce[2]),Me(Ce[3])}function De(Q){s.push(l[Q*3+0]),s.push(l[Q*3+1]),s.push(l[Q*3+2])}function Me(Q){r.push(Q.x),r.push(Q.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Ub(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Iu[s.type]().fromJSON(s)),new i(n,e.options)}},Nb={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new ne(r,o),new ne(a,l),new ne(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],d=e[n*3+2],u=e[s*3],f=e[s*3+1],p=e[s*3+2],_=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ne(o,1-l),new ne(c,1-d),new ne(u,1-p),new ne(_,1-g)]:[new ne(a,1-l),new ne(h,1-d),new ne(f,1-p),new ne(m,1-g)]}};function Ub(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Ml=class i extends ts{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Tl=class i extends it{constructor(e=[new ne(0,-.5),new ne(.5,0),new ne(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Qe(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,d=new R,u=new ne,f=new R,p=new R,_=new R,m=0,g=0;for(let b=0;b<=e.length-1;b++)switch(b){case 0:m=e[b+1].x-e[b].x,g=e[b+1].y-e[b].y,f.x=g*1,f.y=-m,f.z=g*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:m=e[b+1].x-e[b].x,g=e[b+1].y-e[b].y,f.x=g*1,f.y=-m,f.z=g*0,p.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(p)}for(let b=0;b<=t;b++){let S=n+b*h*s,x=Math.sin(S),A=Math.cos(S);for(let M=0;M<=e.length-1;M++){d.x=e[M].x*x,d.y=e[M].y,d.z=e[M].x*A,o.push(d.x,d.y,d.z),u.x=b/t,u.y=M/(e.length-1),a.push(u.x,u.y);let C=l[3*M+0]*x,y=l[3*M+1],w=l[3*M+0]*A;c.push(C,y,w)}}for(let b=0;b<t;b++)for(let S=0;S<e.length-1;S++){let x=S+b*e.length,A=x,M=x+e.length,C=x+e.length+1,y=x+1;r.push(A,M,y),r.push(C,y,M)}this.setIndex(r),this.setAttribute("position",new Pe(o,3)),this.setAttribute("uv",new Pe(a,2)),this.setAttribute("normal",new Pe(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},Eo=class i extends ts{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},fr=class i extends it{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=e/a,u=t/l,f=[],p=[],_=[],m=[];for(let g=0;g<h;g++){let b=g*u-o;for(let S=0;S<c;S++){let x=S*d-r;p.push(x,-b,0),_.push(0,0,1),m.push(S/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let b=0;b<a;b++){let S=b+c*g,x=b+c*(g+1),A=b+1+c*(g+1),M=b+1+c*g;f.push(S,x,M),f.push(x,A,M)}this.setIndex(f),this.setAttribute("position",new Pe(p,3)),this.setAttribute("normal",new Pe(_,3)),this.setAttribute("uv",new Pe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Al=class i extends it{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],d=e,u=(t-e)/s,f=new R,p=new ne;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){let g=r+m/n*o;f.x=d*Math.cos(g),f.y=d*Math.sin(g),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,h.push(p.x,p.y)}d+=u}for(let _=0;_<s;_++){let m=_*(n+1);for(let g=0;g<n;g++){let b=g+m,S=b,x=b+n+1,A=b+n+2,M=b+1;a.push(S,x,M),a.push(x,A,M)}}this.setIndex(a),this.setAttribute("position",new Pe(l,3)),this.setAttribute("normal",new Pe(c,3)),this.setAttribute("uv",new Pe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},wl=class i extends it{constructor(e=new Ps([new ne(0,.5),new ne(-.5,-.5),new ne(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Pe(s,3)),this.setAttribute("normal",new Pe(r,3)),this.setAttribute("uv",new Pe(o,2));function c(h){let d=s.length/3,u=h.extractPoints(t),f=u.shape,p=u.holes;Jn.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,g=p.length;m<g;m++){let b=p[m];Jn.isClockWise(b)===!0&&(p[m]=b.reverse())}let _=Jn.triangulateShape(f,p);for(let m=0,g=p.length;m<g;m++){let b=p[m];f=f.concat(b)}for(let m=0,g=f.length;m<g;m++){let b=f[m];s.push(b.x,b.y,0),r.push(0,0,1),o.push(b.x,b.y)}for(let m=0,g=_.length;m<g;m++){let b=_[m],S=b[0]+d,x=b[1]+d,A=b[2]+d;n.push(S,x,A),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Ob(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function Ob(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var Co=class i extends it{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new R,u=new R,f=[],p=[],_=[],m=[];for(let g=0;g<=n;g++){let b=[],S=g/n,x=o+S*a,A=e*Math.cos(x),M=Math.sqrt(e*e-A*A),C=0;g===0&&o===0?C=.5/t:g===n&&l===Math.PI&&(C=-.5/t);for(let y=0;y<=t;y++){let w=y/t,I=s+w*r;d.x=-M*Math.cos(I),d.y=A,d.z=M*Math.sin(I),p.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(w+C,1-S),b.push(c++)}h.push(b)}for(let g=0;g<n;g++)for(let b=0;b<t;b++){let S=h[g][b+1],x=h[g][b],A=h[g+1][b],M=h[g+1][b+1];(g!==0||o>0)&&f.push(S,x,M),(g!==n-1||l<Math.PI)&&f.push(x,A,M)}this.setIndex(f),this.setAttribute("position",new Pe(p,3)),this.setAttribute("normal",new Pe(_,3)),this.setAttribute("uv",new Pe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},El=class i extends ts{constructor(e=1,t=0){let n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Cl=class i extends it{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new R,f=new R,p=new R;for(let _=0;_<=n;_++){let m=o+_/n*a;for(let g=0;g<=s;g++){let b=g/s*r;f.x=(e+t*Math.cos(m))*Math.cos(b),f.y=(e+t*Math.cos(m))*Math.sin(b),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),u.x=e*Math.cos(b),u.y=e*Math.sin(b),p.subVectors(f,u).normalize(),h.push(p.x,p.y,p.z),d.push(g/s),d.push(_/n)}}for(let _=1;_<=n;_++)for(let m=1;m<=s;m++){let g=(s+1)*_+m-1,b=(s+1)*(_-1)+m-1,S=(s+1)*(_-1)+m,x=(s+1)*_+m;l.push(g,b,x),l.push(b,S,x)}this.setIndex(l),this.setAttribute("position",new Pe(c,3)),this.setAttribute("normal",new Pe(h,3)),this.setAttribute("uv",new Pe(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},Rl=class i extends it{constructor(e=1,t=.4,n=64,s=8,r=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:s,p:r,q:o},n=Math.floor(n),s=Math.floor(s);let a=[],l=[],c=[],h=[],d=new R,u=new R,f=new R,p=new R,_=new R,m=new R,g=new R;for(let S=0;S<=n;++S){let x=S/n*r*Math.PI*2;b(x,r,o,e,f),b(x+.01,r,o,e,p),m.subVectors(p,f),g.addVectors(p,f),_.crossVectors(m,g),g.crossVectors(_,m),_.normalize(),g.normalize();for(let A=0;A<=s;++A){let M=A/s*Math.PI*2,C=-t*Math.cos(M),y=t*Math.sin(M);d.x=f.x+(C*g.x+y*_.x),d.y=f.y+(C*g.y+y*_.y),d.z=f.z+(C*g.z+y*_.z),l.push(d.x,d.y,d.z),u.subVectors(d,f).normalize(),c.push(u.x,u.y,u.z),h.push(S/n),h.push(A/s)}}for(let S=1;S<=n;S++)for(let x=1;x<=s;x++){let A=(s+1)*(S-1)+(x-1),M=(s+1)*S+(x-1),C=(s+1)*S+x,y=(s+1)*(S-1)+x;a.push(A,M,y),a.push(M,C,y)}this.setIndex(a),this.setAttribute("position",new Pe(l,3)),this.setAttribute("normal",new Pe(c,3)),this.setAttribute("uv",new Pe(h,2));function b(S,x,A,M,C){let y=Math.cos(S),w=Math.sin(S),I=A/x*S,D=Math.cos(I);C.x=M*(2+D)*.5*y,C.y=M*(2+D)*w*.5,C.z=M*Math.sin(I)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},Il=class i extends it{constructor(e=new To(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new R,l=new R,c=new ne,h=new R,d=[],u=[],f=[],p=[];_(),this.setIndex(p),this.setAttribute("position",new Pe(d,3)),this.setAttribute("normal",new Pe(u,3)),this.setAttribute("uv",new Pe(f,2));function _(){for(let S=0;S<t;S++)m(S);m(r===!1?t:0),b(),g()}function m(S){h=e.getPointAt(S/t,h);let x=o.normals[S],A=o.binormals[S];for(let M=0;M<=s;M++){let C=M/s*Math.PI*2,y=Math.sin(C),w=-Math.cos(C);l.x=w*x.x+y*A.x,l.y=w*x.y+y*A.y,l.z=w*x.z+y*A.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,d.push(a.x,a.y,a.z)}}function g(){for(let S=1;S<=t;S++)for(let x=1;x<=s;x++){let A=(s+1)*(S-1)+(x-1),M=(s+1)*S+(x-1),C=(s+1)*S+x,y=(s+1)*(S-1)+x;p.push(A,M,y),p.push(M,C,y)}}function b(){for(let S=0;S<=t;S++)for(let x=0;x<=s;x++)c.x=S/t,c.y=x/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Iu[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},Pl=class extends it{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,s=new R,r=new R;if(e.index!==null){let o=e.attributes.position,a=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let d=l[c],u=d.start,f=d.count;for(let p=u,_=u+f;p<_;p+=3)for(let m=0;m<3;m++){let g=a.getX(p+m),b=a.getX(p+(m+1)%3);s.fromBufferAttribute(o,g),r.fromBufferAttribute(o,b),S0(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{let o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){let h=3*a+c,d=3*a+(c+1)%3;s.fromBufferAttribute(o,h),r.fromBufferAttribute(o,d),S0(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Pe(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function S0(i,e,t){let n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)===!0||t.has(s)===!0?!1:(t.add(n),t.add(s),!0)}var M0=Object.freeze({__proto__:null,BoxGeometry:Rs,CapsuleGeometry:hl,CircleGeometry:ul,ConeGeometry:yo,CylinderGeometry:vo,DodecahedronGeometry:dl,EdgesGeometry:fl,ExtrudeGeometry:Sl,IcosahedronGeometry:Ml,LatheGeometry:Tl,OctahedronGeometry:Eo,PlaneGeometry:fr,PolyhedronGeometry:ts,RingGeometry:Al,ShapeGeometry:wl,SphereGeometry:Co,TetrahedronGeometry:El,TorusGeometry:Cl,TorusKnotGeometry:Rl,TubeGeometry:Il,WireframeGeometry:Pl}),Dl=class extends Zt{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new be(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};function Mr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(T0(s))s.isRenderTargetTexture?(ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(T0(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function vn(i){let e={};for(let t=0;t<i.length;t++){let n=Mr(i[t]);for(let s in n)e[s]=n[s]}return e}function T0(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Fb(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function fm(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:mt.workingColorSpace}var Ns={clone:Mr,merge:vn},Bb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Lt=class extends Zt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bb,this.fragmentShader=zb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Mr(e.uniforms),this.uniformsGroups=Fb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new be().setHex(s.value);break;case"v2":this.uniforms[n].value=new ne().fromArray(s.value);break;case"v3":this.uniforms[n].value=new R().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Mt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new rt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new nt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ro=class extends Lt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Io=class extends Zt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Di,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ll=class extends Io{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Nl=class extends Zt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new be(16777215),this.specular=new be(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Di,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=Go,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ul=class extends Zt{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new be(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Di,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ol=class extends Zt{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Di,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},Fl=class extends Zt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Di,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=Go,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Po=class extends Zt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Do=class extends Zt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Bl=class extends Zt{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new be(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Di,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this.fog=e.fog,this}},zl=class extends on{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function nr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function K_(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Sp(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function j_(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}function Vb(i,e,t,n,s=30){let r=i.clone();r.name=e;let o=[];for(let l=0;l<r.tracks.length;++l){let c=r.tracks[l],h=c.getValueSize(),d=[],u=[];for(let f=0;f<c.times.length;++f){let p=c.times[f]*s;if(!(p<t||p>=n)){d.push(c.times[f]);for(let _=0;_<h;++_)u.push(c.values[f*h+_])}}d.length!==0&&(c.times=nr(d,c.times.constructor),c.values=nr(u,c.values.constructor),o.push(c))}r.tracks=o;let a=1/0;for(let l=0;l<r.tracks.length;++l)a>r.tracks[l].times[0]&&(a=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*a);return r.resetDuration(),r}function kb(i,e=0,t=i,n=30){n<=0&&(n=30);let s=t.tracks.length,r=e/n;for(let o=0;o<s;++o){let a=t.tracks[o],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;let c=i.tracks.find(function(g){return g.name===a.name&&g.ValueTypeName===l});if(c===void 0)continue;let h=0,d=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=d/3);let u=0,f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=f/3);let p=a.times.length-1,_;if(r<=a.times[0]){let g=h,b=d-h;_=a.values.slice(g,b)}else if(r>=a.times[p]){let g=p*d+h,b=g+d-h;_=a.values.slice(g,b)}else{let g=a.createInterpolant(),b=h,S=d-h;g.evaluate(r),_=g.resultBuffer.slice(b,S)}l==="quaternion"&&new rn().fromArray(_).normalize().conjugate().toArray(_);let m=c.times.length;for(let g=0;g<m;++g){let b=g*f+u;if(l==="quaternion")rn.multiplyQuaternionsFlat(c.values,b,_,0,c.values,b);else{let S=f-u*2;for(let x=0;x<S;++x)c.values[b+x]-=_[x]}}}return i.blendMode=Fd,i}var Pu=class{static convertArray(e,t){return nr(e,t)}static isTypedArray(e){return B_(e)}static getKeyframeOrder(e){return K_(e)}static sortedArray(e,t,n){return Sp(e,t,n)}static flattenJSON(e,t,n,s){j_(e,t,n,s)}static subclip(e,t,n,s,r=30){return Vb(e,t,n,s,r)}static makeClipAdditive(e,t=0,n=e,s=30){return kb(e,t,n,s)}},ns=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Vl=class extends ns{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:bs,endingEnd:bs}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ss:r=e,a=2*t-n;break;case ro:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ss:o=e,l=2*n-t;break;case ro:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(n-t)/(s-t),_=p*p,m=_*p,g=-u*m+2*u*_-u*p,b=(1+u)*m+(-1.5-2*u)*_+(-.5+u)*p+1,S=(-1-f)*m+(1.5+f)*_+.5*p,x=f*m-f*_;for(let A=0;A!==a;++A)r[A]=g*o[h+A]+b*o[c+A]+S*o[l+A]+x*o[d+A];return r}},Lo=class extends ns{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},kl=class extends ns{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Gl=class extends ns{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(n-t)/(s-t),_=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*_+o[l+m]*p;return r}let u=a*2,f=e-1;for(let p=0;p!==a;++p){let _=o[c+p],m=o[l+p],g=f*u+p*2,b=d[g],S=d[g+1],x=e*u+p*2,A=h[x],M=h[x+1],C=(n-t)/(s-t),y,w,I,D,L;for(let q=0;q<8;q++){y=C*C,w=y*C,I=1-C,D=I*I,L=D*I;let U=L*t+3*D*C*b+3*I*y*A+w*s-n;if(Math.abs(U)<1e-10)break;let k=3*D*(b-t)+6*I*C*(A-b)+3*y*(s-A);if(Math.abs(k)<1e-10)break;C=C-U/k,C=Math.max(0,Math.min(1,C))}r[p]=L*_+3*D*C*S+3*I*y*M+w*m}return r}},En=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=nr(t,this.TimeBufferType),this.values=nr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:nr(e.times,Array),values:nr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new kl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Lo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Vl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Gl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case so:t=this.InterpolantFactoryMethodDiscrete;break;case Za:t=this.InterpolantFactoryMethodLinear;break;case Ua:t=this.InterpolantFactoryMethodSmooth;break;case uu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ve("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return so;case this.InterpolantFactoryMethodLinear:return Za;case this.InterpolantFactoryMethodSmooth:return Ua;case this.InterpolantFactoryMethodBezier:return uu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ke("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ke("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){ke("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){ke("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&B_(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){ke("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ua,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*n,u=d-n,f=d+n;for(let p=0;p!==n;++p){let _=t[d+p];if(_!==t[u+p]||_!==t[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};En.prototype.ValueTypeName="";En.prototype.TimeBufferType=Float32Array;En.prototype.ValueBufferType=Float32Array;En.prototype.DefaultInterpolation=Za;var Ri=class extends En{constructor(e,t,n){super(e,t,n)}};Ri.prototype.ValueTypeName="bool";Ri.prototype.ValueBufferType=Array;Ri.prototype.DefaultInterpolation=so;Ri.prototype.InterpolantFactoryMethodLinear=void 0;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var No=class extends En{constructor(e,t,n,s){super(e,t,n,s)}};No.prototype.ValueTypeName="color";var pr=class extends En{constructor(e,t,n,s){super(e,t,n,s)}};pr.prototype.ValueTypeName="number";var Hl=class extends ns{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)rn.slerpFlat(r,0,o,c-a,o,c,l);return r}},mr=class extends En{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Hl(this.times,this.values,this.getValueSize(),e)}};mr.prototype.ValueTypeName="quaternion";mr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ii=class extends En{constructor(e,t,n){super(e,t,n)}};Ii.prototype.ValueTypeName="string";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=so;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;var Uo=class extends En{constructor(e,t,n,s){super(e,t,n,s)}};Uo.prototype.ValueTypeName="vector";var Ds=class{constructor(e="",t=-1,n=[],s=Xc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Vn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Hb(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(En.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=K_(l);l=Sp(l,1,h),c=Sp(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new pr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(r);if(h&&h.length>1){let d=h[1],u=s[d];u||(s[d]=u=[]),u.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Gb(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return pr;case"vector":case"vector2":case"vector3":case"vector4":return Uo;case"color":return No;case"quaternion":return mr;case"bool":case"boolean":return Ri;case"string":return Ii}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Hb(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Gb(i.type);if(i.times===void 0){let t=[],n=[];j_(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var mi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(A0(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!A0(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function A0(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Oo=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},pm=new Oo,ln=class{constructor(e){this.manager=e!==void 0?e:pm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ln.DEFAULT_MATERIAL_NAME="__DEFAULT";var Yi={},Mp=class extends Error{constructor(e,t){super(e),this.response=t}},jn=class extends ln{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=mi.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Yi[e]!==void 0){Yi[e].push({onLoad:t,onProgress:n,onError:s});return}Yi[e]=[],Yi[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&ve("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Yi[e],d=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=u?parseInt(u):0,p=f!==0,_=0,m=new ReadableStream({start(g){b();function b(){d.read().then(({done:S,value:x})=>{if(S)g.close();else{_+=x.byteLength;let A=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:f});for(let M=0,C=h.length;M<C;M++){let y=h[M];y.onProgress&&y.onProgress(A)}g.enqueue(x),b()}},S=>{g.error(S)})}}});return new Response(m)}else throw new Mp(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{let d=/charset="?([^;"\s]*)"?/i.exec(a),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{mi.add(`file:${e}`,c);let h=Yi[e];delete Yi[e];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=Yi[e];if(h===void 0)throw this.manager.itemError(e),c;delete Yi[e];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Du=class extends ln{constructor(e){super(e)}load(e,t,n,s){let r=this,o=new jn(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(r.parse(JSON.parse(a)))}catch(l){s?s(l):ke(l),r.manager.itemError(e)}},n,s)}parse(e){let t=[];for(let n=0;n<e.length;n++){let s=Ds.parse(e[n]);t.push(s)}return t}},Lu=class extends ln{constructor(e){super(e)}load(e,t,n,s){let r=this,o=[],a=new hr,l=new jn(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(r.withCredentials);let c=0;function h(d){l.load(e[d],function(u){let f=r.parse(u,!0);o[d]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},c+=1,c===6&&(f.mipmapCount===1&&(a.minFilter=It),a.image=o,a.format=f.format,a.needsUpdate=!0,t&&t(a))},n,s)}if(Array.isArray(e))for(let d=0,u=e.length;d<u;++d)h(d);else l.load(e,function(d){let u=r.parse(d,!0);if(u.isCubemap){let f=u.mipmaps.length/u.mipmapCount;for(let p=0;p<f;p++){o[p]={mipmaps:[]};for(let _=0;_<u.mipmapCount;_++)o[p].mipmaps.push(u.mipmaps[p*u.mipmapCount+_]),o[p].format=u.format,o[p].width=u.width,o[p].height=u.height}a.image=o}else a.image.width=u.width,a.image.height=u.height,a.mipmaps=u.mipmaps;u.mipmapCount===1&&(a.minFilter=It),a.format=u.format,a.needsUpdate=!0,t&&t(a)},n,s);return a}},$r=new WeakMap,Ls=class extends ln{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=mi.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let d=$r.get(o);d===void 0&&(d=[],$r.set(o,d)),d.push({onLoad:t,onError:s})}return o}let a=co("img");function l(){h(),t&&t(this);let d=$r.get(this)||[];for(let u=0;u<d.length;u++){let f=d[u];f.onLoad&&f.onLoad(this)}$r.delete(this),r.manager.itemEnd(e)}function c(d){h(),s&&s(d),mi.remove(`image:${e}`);let u=$r.get(this)||[];for(let f=0;f<u.length;f++){let p=u[f];p.onError&&p.onError(d)}$r.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),mi.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}},Nu=class extends ln{constructor(e){super(e)}load(e,t,n,s){let r=new Cs;r.colorSpace=Mn;let o=new Ls(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(e[c],function(h){r.images[c]=h,a++,a===6&&(r.needsUpdate=!0,t&&t(r))},void 0,s)}for(let c=0;c<e.length;++c)l(c);return r}},Uu=class extends ln{constructor(e){super(e)}load(e,t,n,s){let r=this,o=new wn,a=new jn(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(l){let c;try{c=r.parse(l)}catch(h){s!==void 0?s(h):ke(h);return}r._applyTexData(o,c),t&&t(o,c)},n,s),o}createDataTexture(e){let t=new wn;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:An,e.wrapT=t.wrapT!==void 0?t.wrapT:An,e.magFilter=t.magFilter!==void 0?t.magFilter:It,e.minFilter=t.minFilter!==void 0?t.minFilter:It,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=bi),t.mipmapCount===1&&(e.minFilter=It),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}},Ou=class extends ln{constructor(e){super(e)}load(e,t,n,s){let r=new Ft,o=new Ls(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},xi=class extends xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new be(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Wl=class extends xi{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},hp=new nt,w0=new R,E0=new R,Xl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ne(512,512),this.mapType=Cn,this.map=null,this.mapPass=null,this.matrix=new nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ei,this._frameExtents=new ne(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;w0.setFromMatrixPosition(e.matrixWorld),t.position.copy(w0),E0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(E0),t.updateMatrixWorld(),hp.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hp,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===As||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(hp)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},tu=new R,nu=new rn,Ai=new R,gr=class extends xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt,this.coordinateSystem=Pn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(tu,nu,Ai),Ai.x===1&&Ai.y===1&&Ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(tu,nu,Ai.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(tu,nu,Ai),Ai.x===1&&Ai.y===1&&Ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(tu,nu,Ai.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},xs=new R,C0=new ne,R0=new ne,qt=class extends gr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=sr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ir*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sr*2*Math.atan(Math.tan(ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){xs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xs.x,xs.y).multiplyScalar(-e/xs.z),xs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xs.x,xs.y).multiplyScalar(-e/xs.z)}getViewSize(e,t){return this.getViewBounds(e,C0,R0),t.subVectors(R0,C0)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ir*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Tp=class extends Xl{constructor(){super(new qt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=sr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},ql=class extends xi{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Tp}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Ap=class extends Xl{constructor(){super(new qt(90,1,.5,500)),this.isPointLightShadow=!0}},Yl=class extends xi{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ap}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Pi=class extends gr{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},wp=class extends Xl{constructor(){super(new Pi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Zl=class extends xi{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.shadow=new wp}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},$l=class extends xi{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}},Jl=class extends xi{constructor(e,t,n=10,s=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=s}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){let t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}},Fo=class{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new R)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){let n=e.x,s=e.y,r=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.282095),t.addScaledVector(o[1],.488603*s),t.addScaledVector(o[2],.488603*r),t.addScaledVector(o[3],.488603*n),t.addScaledVector(o[4],1.092548*(n*s)),t.addScaledVector(o[5],1.092548*(s*r)),t.addScaledVector(o[6],.315392*(3*r*r-1)),t.addScaledVector(o[7],1.092548*(n*r)),t.addScaledVector(o[8],.546274*(n*n-s*s)),t}getIrradianceAt(e,t){let n=e.x,s=e.y,r=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.886227),t.addScaledVector(o[1],2*.511664*s),t.addScaledVector(o[2],2*.511664*r),t.addScaledVector(o[3],2*.511664*n),t.addScaledVector(o[4],2*.429043*n*s),t.addScaledVector(o[5],2*.429043*s*r),t.addScaledVector(o[6],.743125*r*r-.247708),t.addScaledVector(o[7],2*.429043*n*r),t.addScaledVector(o[8],.429043*(n*n-s*s)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){let n=this.coefficients;for(let s=0;s<9;s++)n[s].fromArray(e,t+s*3);return this}toArray(e=[],t=0){let n=this.coefficients;for(let s=0;s<9;s++)n[s].toArray(e,t+s*3);return e}static getBasisAt(e,t){let n=e.x,s=e.y,r=e.z;t[0]=.282095,t[1]=.488603*s,t[2]=.488603*r,t[3]=.488603*n,t[4]=1.092548*n*s,t[5]=1.092548*s*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*n*r,t[8]=.546274*(n*n-s*s)}},Kl=class extends xi{constructor(e=new Fo,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}toJSON(e){let t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}},I0={},jl=class i extends ln{constructor(e){super(e),this.textures={}}load(e,t,n,s){let r=this,o=new jn(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(a){try{t(r.parse(JSON.parse(a)))}catch(l){s?s(l):ke(l),r.manager.itemError(e)}},n,s)}parse(e){let t=this.createMaterialFromType(e.type);return t.fromJSON(e,this.textures),t}setTextures(e){return this.textures=e,this}createMaterialFromType(e){return i.createMaterialFromType(e)}static createMaterialFromType(e){let n={ShadowMaterial:Dl,SpriteMaterial:mo,RawShaderMaterial:Ro,ShaderMaterial:Lt,PointsMaterial:_o,MeshPhysicalMaterial:Ll,MeshStandardMaterial:Io,MeshPhongMaterial:Nl,MeshToonMaterial:Ul,MeshNormalMaterial:Ol,MeshLambertMaterial:Fl,MeshDepthMaterial:Po,MeshDistanceMaterial:Do,MeshBasicMaterial:kn,MeshMatcapMaterial:Bl,LineDashedMaterial:zl,LineBasicMaterial:on,Material:Zt,...I0}[e],s;return n===void 0?(Ji(`MaterialLoader: Unknown material type "${e}". Use .registerMaterial() before starting the deserialization process.`),s=new Zt):s=new n,s}static registerMaterial(e,t){I0[e]=t}},Bo=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Ql=class extends it{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},ec=class extends ln{constructor(e){super(e)}load(e,t,n,s){let r=this,o=new jn(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(a){try{t(r.parse(JSON.parse(a)))}catch(l){s?s(l):ke(l),r.manager.itemError(e)}},n,s)}parse(e){let t={},n={};function s(f,p){if(t[p]!==void 0)return t[p];let m=f.interleavedBuffers[p],g=r(f,m.buffer),b=eo(m.type,g),S=new cr(b,m.stride);return S.uuid=m.uuid,t[p]=S,S}function r(f,p){if(n[p]!==void 0)return n[p];let m=f.arrayBuffers[p],g=new Uint32Array(m).buffer;return n[p]=g,g}let o=e.isInstancedBufferGeometry?new Ql:new it,a=e.data.index;if(a!==void 0){let f=eo(a.type,a.array);o.setIndex(new yt(f,1))}let l=e.data.attributes;for(let f in l){let p=l[f],_;if(p.isInterleavedBufferAttribute){let m=s(e.data,p.data);_=new Es(m,p.itemSize,p.offset,p.normalized)}else{let m=eo(p.type,p.array),g=p.isInstancedBufferAttribute?es:yt;_=new g(m,p.itemSize,p.normalized)}p.name!==void 0&&(_.name=p.name),p.usage!==void 0&&_.setUsage(p.usage),o.setAttribute(f,_)}let c=e.data.morphAttributes;if(c)for(let f in c){let p=c[f],_=[];for(let m=0,g=p.length;m<g;m++){let b=p[m],S;if(b.isInterleavedBufferAttribute){let x=s(e.data,b.data);S=new Es(x,b.itemSize,b.offset,b.normalized)}else{let x=eo(b.type,b.array);S=new yt(x,b.itemSize,b.normalized)}b.name!==void 0&&(S.name=b.name),_.push(S)}o.morphAttributes[f]=_}e.data.morphTargetsRelative&&(o.morphTargetsRelative=!0);let d=e.data.groups||e.data.drawcalls||e.data.offsets;if(d!==void 0)for(let f=0,p=d.length;f!==p;++f){let _=d[f];o.addGroup(_.start,_.count,_.materialIndex)}let u=e.data.boundingSphere;return u!==void 0&&(o.boundingSphere=new Yt().fromJSON(u)),e.name&&(o.name=e.name),e.userData&&(o.userData=e.userData),o}},up={},Fu=class extends ln{constructor(e){super(e)}load(e,t,n,s){let r=this,o=this.path===""?Bo.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||o;let a=new jn(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){let c=null;try{c=JSON.parse(l)}catch(d){s!==void 0&&s(d),ke("ObjectLoader: Can't parse "+e+".",d.message);return}let h=c.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){s!==void 0&&s(new Error("THREE.ObjectLoader: Can't load "+e)),ke("ObjectLoader: Can't load "+e);return}r.parse(c,t)},n,s)}async loadAsync(e,t){let n=this,s=this.path===""?Bo.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||s;let r=new jn(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);let o=await r.loadAsync(e,t),a;try{a=JSON.parse(o)}catch(c){throw new Error("THREE.ObjectLoader: Can't parse "+e+". "+c.message)}let l=a.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(a)}parse(e,t){let n=this.parseAnimations(e.animations),s=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,s),o=this.parseImages(e.images,function(){t!==void 0&&t(c)}),a=this.parseTextures(e.textures,o),l=this.parseMaterials(e.materials,a),c=this.parseObject(e.object,r,l,a,n),h=this.parseSkeletons(e.skeletons,c);if(this.bindSkeletons(c,h),this.bindLightTargets(c),t!==void 0){let d=!1;for(let u in o)if(o[u].data instanceof HTMLImageElement){d=!0;break}d===!1&&t(c)}return c}async parseAsync(e){let t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),s=this.parseGeometries(e.geometries,n),r=await this.parseImagesAsync(e.images),o=this.parseTextures(e.textures,r),a=this.parseMaterials(e.materials,o),l=this.parseObject(e.object,s,a,o,t),c=this.parseSkeletons(e.skeletons,l);return this.bindSkeletons(l,c),this.bindLightTargets(l),l}static registerGeometry(e,t){up[e]=t}parseShapes(e){let t={};if(e!==void 0)for(let n=0,s=e.length;n<s;n++){let r=new Ps().fromJSON(e[n]);t[r.uuid]=r}return t}parseSkeletons(e,t){let n={},s={};if(t.traverse(function(r){r.isBone&&(s[r.uuid]=r)}),e!==void 0)for(let r=0,o=e.length;r<o;r++){let a=new nl().fromJSON(e[r],s);n[a.uuid]=a}return n}parseGeometries(e,t){let n={};if(e!==void 0){let s=new ec;for(let r=0,o=e.length;r<o;r++){let a,l=e[r];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":a=s.parse(l);break;default:l.type in M0?a=M0[l.type].fromJSON(l,t):l.type in up?a=up[l.type].fromJSON(l,t):ve(`ObjectLoader: Unknown geometry type "${l.type}". Use .registerGeometry() before starting the deserialization process.`)}a.uuid=l.uuid,l.name!==void 0&&(a.name=l.name),l.userData!==void 0&&(a.userData=l.userData),n[l.uuid]=a}}return n}parseMaterials(e,t){let n={},s={};if(e!==void 0){let r=new jl;r.setTextures(t);for(let o=0,a=e.length;o<a;o++){let l=e[o];n[l.uuid]===void 0&&(n[l.uuid]=r.parse(l)),s[l.uuid]=n[l.uuid]}}return s}parseAnimations(e){let t={};if(e!==void 0)for(let n=0;n<e.length;n++){let s=e[n],r=Ds.parse(s);t[r.uuid]=r}return t}parseImages(e,t){let n=this,s={},r;function o(l){return l=n.manager.resolveURL(l),n.manager.itemStart(l),r.load(l,function(){n.manager.itemEnd(l)},void 0,function(){n.manager.itemError(l),n.manager.itemEnd(l)})}function a(l){if(typeof l=="string"){let c=l,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:n.resourcePath+c;return o(h)}else return l.data?{data:eo(l.type,l.data),width:l.width,height:l.height}:null}if(e!==void 0&&e.length>0){let l=new Oo(t);r=new Ls(l),r.setCrossOrigin(this.crossOrigin);for(let c=0,h=e.length;c<h;c++){let d=e[c],u=d.url;if(Array.isArray(u)){let f=[];for(let p=0,_=u.length;p<_;p++){let m=u[p],g=a(m);g!==null&&(g instanceof HTMLImageElement?f.push(g):f.push(new wn(g.data,g.width,g.height)))}s[d.uuid]=new pi(f)}else{let f=a(d.url);s[d.uuid]=new pi(f)}}}return s}async parseImagesAsync(e){let t=this,n={},s;async function r(o){if(typeof o=="string"){let a=o,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(a)?a:t.resourcePath+a;return await s.loadAsync(l)}else return o.data?{data:eo(o.type,o.data),width:o.width,height:o.height}:null}if(e!==void 0&&e.length>0){s=new Ls(this.manager),s.setCrossOrigin(this.crossOrigin);for(let o=0,a=e.length;o<a;o++){let l=e[o],c=l.url;if(Array.isArray(c)){let h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d],p=await r(f);p!==null&&(p instanceof HTMLImageElement?h.push(p):h.push(new wn(p.data,p.width,p.height)))}n[l.uuid]=new pi(h)}else{let h=await r(l.url);n[l.uuid]=new pi(h)}}}return n}parseTextures(e,t){function n(r,o){return typeof r=="number"?r:(ve("ObjectLoader.parseTexture: Constant should be in numeric form.",r),o[r])}let s={};if(e!==void 0)for(let r=0,o=e.length;r<o;r++){let a=e[r];a.image===void 0&&ve('ObjectLoader: No "image" specified for',a.uuid),t[a.image]===void 0&&ve("ObjectLoader: Undefined image",a.image);let l=t[a.image],c=l.data,h;Array.isArray(c)?(h=new Cs,c.length===6&&(h.needsUpdate=!0)):(c&&c.data?h=new wn:h=new Ft,c&&(h.needsUpdate=!0)),h.source=l,h.uuid=a.uuid,a.name!==void 0&&(h.name=a.name),a.mapping!==void 0&&(h.mapping=n(a.mapping,Wb)),a.channel!==void 0&&(h.channel=a.channel),a.offset!==void 0&&h.offset.fromArray(a.offset),a.repeat!==void 0&&h.repeat.fromArray(a.repeat),a.center!==void 0&&h.center.fromArray(a.center),a.rotation!==void 0&&(h.rotation=a.rotation),a.wrap!==void 0&&(h.wrapS=n(a.wrap[0],P0),h.wrapT=n(a.wrap[1],P0)),a.format!==void 0&&(h.format=a.format),a.internalFormat!==void 0&&(h.internalFormat=a.internalFormat),a.type!==void 0&&(h.type=a.type),a.colorSpace!==void 0&&(h.colorSpace=a.colorSpace),a.minFilter!==void 0&&(h.minFilter=n(a.minFilter,D0)),a.magFilter!==void 0&&(h.magFilter=n(a.magFilter,D0)),a.anisotropy!==void 0&&(h.anisotropy=a.anisotropy),a.flipY!==void 0&&(h.flipY=a.flipY),a.generateMipmaps!==void 0&&(h.generateMipmaps=a.generateMipmaps),a.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=a.premultiplyAlpha),a.unpackAlignment!==void 0&&(h.unpackAlignment=a.unpackAlignment),a.compareFunction!==void 0&&(h.compareFunction=a.compareFunction),a.normalized!==void 0&&(h.normalized=a.normalized),a.userData!==void 0&&(h.userData=a.userData),s[a.uuid]=h}return s}parseObject(e,t,n,s,r){let o;function a(u){return t[u]===void 0&&ve("ObjectLoader: Undefined geometry",u),t[u]}function l(u){if(u!==void 0){if(Array.isArray(u)){let f=[];for(let p=0,_=u.length;p<_;p++){let m=u[p];n[m]===void 0&&ve("ObjectLoader: Undefined material",m),f.push(n[m])}return f}return n[u]===void 0&&ve("ObjectLoader: Undefined material",u),n[u]}}function c(u){return s[u]===void 0&&ve("ObjectLoader: Undefined texture",u),s[u]}let h,d;switch(e.type){case"Scene":o=new ja,e.background!==void 0&&(Number.isInteger(e.background)?o.background=new be(e.background):o.background=c(e.background)),e.environment!==void 0&&(o.environment=c(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?o.fog=new Ka(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(o.fog=new Ja(e.fog.color,e.fog.density)),e.fog.name!==""&&(o.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(o.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(o.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&o.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(o.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&o.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":o=new qt(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(o.focus=e.focus),e.zoom!==void 0&&(o.zoom=e.zoom),e.filmGauge!==void 0&&(o.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(o.filmOffset=e.filmOffset),e.view!==void 0&&(o.view=Object.assign({},e.view));break;case"OrthographicCamera":o=new Pi(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(o.zoom=e.zoom),e.view!==void 0&&(o.view=Object.assign({},e.view));break;case"AmbientLight":o=new $l(e.color,e.intensity);break;case"DirectionalLight":o=new Zl(e.color,e.intensity),o.target=e.target||"";break;case"PointLight":o=new Yl(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":o=new Jl(e.color,e.intensity,e.width,e.height);break;case"SpotLight":o=new ql(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),o.target=e.target||"";break;case"HemisphereLight":o=new Wl(e.color,e.groundColor,e.intensity);break;case"LightProbe":let u=new Fo().fromArray(e.sh);o=new Kl(u,e.intensity);break;case"SkinnedMesh":h=a(e.geometry),d=l(e.material),o=new tl(h,d),e.bindMode!==void 0&&(o.bindMode=e.bindMode),e.bindMatrix!==void 0&&o.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(o.skeleton=e.skeleton);break;case"Mesh":h=a(e.geometry),d=l(e.material),o=new Pt(h,d);break;case"InstancedMesh":h=a(e.geometry),d=l(e.material);let f=e.count,p=e.instanceMatrix,_=e.instanceColor;o=new il(h,d,f),o.instanceMatrix=new es(new Float32Array(p.array),16),_!==void 0&&(o.instanceColor=new es(new Float32Array(_.array),_.itemSize));break;case"BatchedMesh":h=a(e.geometry),d=l(e.material),o=new rl(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,d),o.geometry=h,o.perObjectFrustumCulled=e.perObjectFrustumCulled,o.sortObjects=e.sortObjects,o._drawRanges=e.drawRanges,o._reservedRanges=e.reservedRanges,o._geometryInfo=e.geometryInfo.map(m=>{let g=null,b=null;return m.boundingBox!==void 0&&(g=new Kt().fromJSON(m.boundingBox)),m.boundingSphere!==void 0&&(b=new Yt().fromJSON(m.boundingSphere)),{...m,boundingBox:g,boundingSphere:b}}),o._instanceInfo=e.instanceInfo,o._availableInstanceIds=e._availableInstanceIds,o._availableGeometryIds=e._availableGeometryIds,o._nextIndexStart=e.nextIndexStart,o._nextVertexStart=e.nextVertexStart,o._geometryCount=e.geometryCount,o._maxInstanceCount=e.maxInstanceCount,o._maxVertexCount=e.maxVertexCount,o._maxIndexCount=e.maxIndexCount,o._geometryInitialized=e.geometryInitialized,o._matricesTexture=c(e.matricesTexture.uuid),o._indirectTexture=c(e.indirectTexture.uuid),e.colorsTexture!==void 0&&(o._colorsTexture=c(e.colorsTexture.uuid)),e.boundingSphere!==void 0&&(o.boundingSphere=new Yt().fromJSON(e.boundingSphere)),e.boundingBox!==void 0&&(o.boundingBox=new Kt().fromJSON(e.boundingBox));break;case"LOD":o=new el;break;case"Line":o=new _i(a(e.geometry),l(e.material));break;case"LineLoop":o=new ol(a(e.geometry),l(e.material));break;case"LineSegments":o=new Gn(a(e.geometry),l(e.material));break;case"PointCloud":case"Points":o=new al(a(e.geometry),l(e.material));break;case"Sprite":o=new Qa(l(e.material));break;case"Group":o=new $i;break;case"Bone":o=new go;break;default:o=new xt}if(o.uuid=e.uuid,e.name!==void 0&&(o.name=e.name),e.matrix!==void 0?(o.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(o.matrixAutoUpdate=e.matrixAutoUpdate),o.matrixAutoUpdate&&o.matrix.decompose(o.position,o.quaternion,o.scale)):(e.position!==void 0&&o.position.fromArray(e.position),e.rotation!==void 0&&o.rotation.fromArray(e.rotation),e.quaternion!==void 0&&o.quaternion.fromArray(e.quaternion),e.scale!==void 0&&o.scale.fromArray(e.scale)),e.up!==void 0&&o.up.fromArray(e.up),e.pivot!==void 0&&(o.pivot=new R().fromArray(e.pivot)),e.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),e.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=e.morphTargetInfluences.slice()),e.castShadow!==void 0&&(o.castShadow=e.castShadow),e.receiveShadow!==void 0&&(o.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(o.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(o.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(o.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(o.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&o.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(o.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(o.visible=e.visible),e.frustumCulled!==void 0&&(o.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(o.renderOrder=e.renderOrder),e.static!==void 0&&(o.static=e.static),e.userData!==void 0&&(o.userData=e.userData),e.layers!==void 0&&(o.layers.mask=e.layers),e.children!==void 0){let u=e.children;for(let f=0;f<u.length;f++)o.add(this.parseObject(u[f],t,n,s,r))}if(e.animations!==void 0){let u=e.animations;for(let f=0;f<u.length;f++){let p=u[f];o.animations.push(r[p])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(o.autoUpdate=e.autoUpdate);let u=e.levels;for(let f=0;f<u.length;f++){let p=u[f],_=o.getObjectByProperty("uuid",p.object);_!==void 0&&o.addLevel(_,p.distance,p.hysteresis)}}return o}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){let s=t[n.skeleton];s===void 0?ve("ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(s,n.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){let n=t.target,s=e.getObjectByProperty("uuid",n);s!==void 0?t.target=s:t.target=new xt}})}},Wb={UVMapping:lc,CubeReflectionMapping:yi,CubeRefractionMapping:is,EquirectangularReflectionMapping:Ho,EquirectangularRefractionMapping:Wo,CubeUVReflectionMapping:vr},P0={RepeatWrapping:no,ClampToEdgeWrapping:An,MirroredRepeatWrapping:io},D0={NearestFilter:Ot,NearestMipmapNearestFilter:Id,NearestMipmapLinearFilter:yr,LinearFilter:It,LinearMipmapNearestFilter:Xo,LinearMipmapLinearFilter:bi},dp=new WeakMap,Bu=class extends ln{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&ve("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&ve("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=mi.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{dp.has(o)===!0?(s&&s(dp.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){mi.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e)}).catch(function(c){s&&s(c),dp.set(l,c),mi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});mi.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},iu,zo=class{static getContext(){return iu===void 0&&(iu=new(window.AudioContext||window.webkitAudioContext)),iu}static setContext(e){iu=e}},zu=class extends ln{constructor(e){super(e)}load(e,t,n,s){let r=this,o=new jn(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){try{let c=l.slice(0),h=zo.getContext(),d=e+"#decode";r.manager.itemStart(d),h.decodeAudioData(c,function(u){t(u),r.manager.itemEnd(d)}).catch(function(u){a(u),r.manager.itemEnd(d)})}catch(c){a(c)}},n,s);function a(l){s?s(l):ke(l),r.manager.itemError(e)}}},L0=new nt,N0=new nt,Js=new nt,Vu=class{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new qt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new qt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){let t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,Js.copy(e.projectionMatrix);let s=t.eyeSep/2,r=s*t.near/t.focus,o=t.near*Math.tan(ir*t.fov*.5)/t.zoom,a,l;N0.elements[12]=-s,L0.elements[12]=s,a=-o*t.aspect+r,l=o*t.aspect+r,Js.elements[0]=2*t.near/(l-a),Js.elements[8]=(l+a)/(l-a),this.cameraL.projectionMatrix.copy(Js),a=-o*t.aspect-r,l=o*t.aspect-r,Js.elements[0]=2*t.near/(l-a),Js.elements[8]=(l+a)/(l-a),this.cameraR.projectionMatrix.copy(Js)}this.cameraL.matrix.copy(e.matrixWorld).multiply(N0),this.cameraL.matrixWorldNeedsUpdate=!0,this.cameraR.matrix.copy(e.matrixWorld).multiply(L0),this.cameraR.matrixWorldNeedsUpdate=!0}},Jr=-90,Kr=1,tc=class extends xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new qt(Jr,Kr,e,t);s.layers=this.layers,this.add(s);let r=new qt(Jr,Kr,e,t);r.layers=this.layers,this.add(r);let o=new qt(Jr,Kr,e,t);o.layers=this.layers,this.add(o);let a=new qt(Jr,Kr,e,t);a.layers=this.layers,this.add(a);let l=new qt(Jr,Kr,e,t);l.layers=this.layers,this.add(l);let c=new qt(Jr,Kr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Pn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===As)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},nc=class extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},_r=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Xb.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Xb(){this._document.hidden===!1&&this.reset()}var Ks=new R,fp=new rn,qb=new R,js=new R,Qs=new R,ku=class extends xt{constructor(){super(),this.type="AudioListener",this.context=zo.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._timer=new _r}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e),this._timer.update();let t=this.context.listener;if(this.timeDelta=this._timer.getDelta(),this.matrixWorld.decompose(Ks,fp,qb),js.set(0,0,-1).applyQuaternion(fp),Qs.set(0,1,0).applyQuaternion(fp),t.positionX){let n=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Ks.x,n),t.positionY.linearRampToValueAtTime(Ks.y,n),t.positionZ.linearRampToValueAtTime(Ks.z,n),t.forwardX.linearRampToValueAtTime(js.x,n),t.forwardY.linearRampToValueAtTime(js.y,n),t.forwardZ.linearRampToValueAtTime(js.z,n),t.upX.linearRampToValueAtTime(Qs.x,n),t.upY.linearRampToValueAtTime(Qs.y,n),t.upZ.linearRampToValueAtTime(Qs.z,n)}else t.setPosition(Ks.x,Ks.y,Ks.z),t.setOrientation(js.x,js.y,js.z,Qs.x,Qs.y,Qs.z)}},ic=class extends xt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){ve("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){ve("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;let t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){ve("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){ve("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){ve("Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(ve("Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){ve("Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}copy(e,t){return super.copy(e,t),e.sourceType!=="buffer"?(ve("Audio: Audio source type cannot be copied."),this):(this.autoplay=e.autoplay,this.buffer=e.buffer,this.detune=e.detune,this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this.offset=e.offset,this.duration=e.duration,this.playbackRate=e.playbackRate,this.hasPlaybackControl=e.hasPlaybackControl,this.sourceType=e.sourceType,this.filters=e.filters.slice(),this)}clone(e){return new this.constructor(this.listener).copy(this,e)}},er=new R,U0=new rn,Yb=new R,tr=new R,Gu=class extends ic{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(er,U0,Yb),tr.set(0,0,1).applyQuaternion(U0);let t=this.panner;if(t.positionX){let n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(er.x,n),t.positionY.linearRampToValueAtTime(er.y,n),t.positionZ.linearRampToValueAtTime(er.z,n),t.orientationX.linearRampToValueAtTime(tr.x,n),t.orientationY.linearRampToValueAtTime(tr.y,n),t.orientationZ.linearRampToValueAtTime(tr.z,n)}else t.setPosition(er.x,er.y,er.z),t.setOrientation(tr.x,tr.y,tr.z)}},Hu=class{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0,t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}},sc=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,s=this.valueSize,r=e*s+s,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)n[r+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(n,s,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,s);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,o=s;r!==o;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,s){rn.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){let o=this._workIndex*r;rn.multiplyQuaternionsFlat(e,o,e,t,e,n),rn.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,n,s,r){let o=1-s;for(let a=0;a!==r;++a){let l=t+a;e[l]=e[l]*o+e[n+a]*s}}_lerpAdditive(e,t,n,s,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[n+o]*s}}},mm="\\[\\]\\.:\\/",Zb=new RegExp("["+mm+"]","g"),gm="[^"+mm+"]",$b="[^"+mm.replace("\\.","")+"]",Jb=/((?:WC+[\/:])*)/.source.replace("WC",gm),Kb=/(WCOD+)?/.source.replace("WCOD",$b),jb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gm),Qb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gm),eS=new RegExp("^"+Jb+Kb+jb+Qb+"$"),tS=["material","materials","bones","map"],Ep=class{constructor(e,t,n){let s=n||St.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},St=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Zb,"")}static parseTrackName(e){let t=eS.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);tS.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ve("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ke("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ke("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ke("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){ke("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){ke("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;ke("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};St.Composite=Ep;St.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};St.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};St.prototype.GetterByBindingType=[St.prototype._getValue_direct,St.prototype._getValue_array,St.prototype._getValue_arrayElement,St.prototype._getValue_toArray];St.prototype.SetterByBindingTypeAndVersioning=[[St.prototype._setValue_direct,St.prototype._setValue_direct_setNeedsUpdate,St.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[St.prototype._setValue_array,St.prototype._setValue_array_setNeedsUpdate,St.prototype._setValue_array_setMatrixWorldNeedsUpdate],[St.prototype._setValue_arrayElement,St.prototype._setValue_arrayElement_setNeedsUpdate,St.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[St.prototype._setValue_fromArray,St.prototype._setValue_fromArray_setNeedsUpdate,St.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Wu=class{constructor(){this.isAnimationObjectGroup=!0,this.uuid=Vn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;let e={};this._indicesByUUID=e;for(let n=0,s=arguments.length;n!==s;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};let t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){let e=this._objects,t=this._indicesByUUID,n=this._paths,s=this._parsedPaths,r=this._bindings,o=r.length,a,l=e.length,c=this.nCachedObjects_;for(let h=0,d=arguments.length;h!==d;++h){let u=arguments[h],f=u.uuid,p=t[f];if(p===void 0){p=l++,t[f]=p,e.push(u);for(let _=0,m=o;_!==m;++_)r[_].push(new St(u,n[_],s[_]))}else if(p<c){a=e[p];let _=--c,m=e[_];t[m.uuid]=p,e[p]=m,t[f]=_,e[_]=u;for(let g=0,b=o;g!==b;++g){let S=r[g],x=S[_],A=S[p];S[p]=x,A===void 0&&(A=new St(u,n[g],s[g])),S[_]=A}}else e[p]!==a&&ke("AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){let e=this._objects,t=this._indicesByUUID,n=this._bindings,s=n.length,r=this.nCachedObjects_;for(let o=0,a=arguments.length;o!==a;++o){let l=arguments[o],c=l.uuid,h=t[c];if(h!==void 0&&h>=r){let d=r++,u=e[d];t[u.uuid]=h,e[h]=u,t[c]=d,e[d]=l;for(let f=0,p=s;f!==p;++f){let _=n[f],m=_[d],g=_[h];_[h]=m,_[d]=g}}}this.nCachedObjects_=r}uncache(){let e=this._objects,t=this._indicesByUUID,n=this._bindings,s=n.length,r=this.nCachedObjects_,o=e.length;for(let a=0,l=arguments.length;a!==l;++a){let c=arguments[a],h=c.uuid,d=t[h];if(d!==void 0)if(delete t[h],d<r){let u=--r,f=e[u],p=--o,_=e[p];t[f.uuid]=d,e[d]=f,t[_.uuid]=u,e[u]=_,e.pop();for(let m=0,g=s;m!==g;++m){let b=n[m],S=b[u],x=b[p];b[d]=S,b[u]=x,b.pop()}}else{let u=--o,f=e[u];u>0&&(t[f.uuid]=d),e[d]=f,e.pop();for(let p=0,_=s;p!==_;++p){let m=n[p];m[d]=m[u],m.pop()}}}this.nCachedObjects_=r}subscribe_(e,t){let n=this._bindingsIndicesByPath,s=n[e],r=this._bindings;if(s!==void 0)return r[s];let o=this._paths,a=this._parsedPaths,l=this._objects,c=l.length,h=this.nCachedObjects_,d=new Array(c);s=r.length,n[e]=s,o.push(e),a.push(t),r.push(d);for(let u=h,f=l.length;u!==f;++u){let p=l[u];d[u]=new St(p,e,t)}return d}unsubscribe_(e){let t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){let s=this._paths,r=this._parsedPaths,o=this._bindings,a=o.length-1,l=o[a],c=e[a];t[c]=n,o[n]=l,o.pop(),r[n]=r[a],r.pop(),s[n]=s[a],s.pop()}}},rc=class{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;let r=t.tracks,o=r.length,a=new Array(o),l={endingStart:bs,endingEnd:bs};for(let c=0;c!==o;++c){let h=r[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=em,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let s=this._clip.duration,r=e._clip.duration,o=r/s,a=s/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let s=this._mixer,r=s.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Fd:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case Xc:default:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(o),c[h].accumulate(s,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,s=this.time+e,r=this._loopCount,o=n===tm;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(n===Qp){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){let a=Math.floor(s/t);s-=t*a,r+=Math.abs(a);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this._loopCount=r,this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){let s=this._interpolantSettings;n?(s.endingStart=Ss,s.endingEnd=Ss):(e?s.endingStart=this.zeroSlopeAtStart?Ss:bs:s.endingStart=ro,t?s.endingEnd=this.zeroSlopeAtEnd?Ss:bs:s.endingEnd=ro)}_scheduleFading(e,t,n){let s=this._mixer,r=s.time,o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}},nS=new Float32Array(1),Xu=class extends Dn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let d=0;d!==r;++d){let u=s[d],f=u.name,p=h[f];if(p!==void 0)++p.referenceCount,o[d]=p;else{if(p=o[d],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,f));continue}let _=t&&t._propertyBindings[d].binding.parsedPath;p=new sc(St.create(n,f,_),u.ValueTypeName,u.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,f),o[d]=p}a[d].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let s=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;let d=a.actionByRoot,u=(e._localRoot||this._root).uuid;delete d[u],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let s=this._bindingsByRootAndName,r=this._bindings,o=s[t];o===void 0&&(o={},s[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[s],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Lo(new Float32Array(2),new Float32Array(2),1,nS),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let s=t||this._root,r=s.uuid,o=typeof e=="string"?Ds.findByName(s,e):e,a=o!==null?o.uuid:e,l=this._actionsByClip[a],c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Xc),l!==void 0){let d=l.actionByRoot[r];if(d!==void 0&&d.blendMode===n)return d;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let h=new rc(this,o,t,n);return this._bindAction(h,c),this._addInactiveAction(h,a,r),h}existingAction(e,t){let n=t||this._root,s=n.uuid,r=typeof e=="string"?Ds.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(s,e,r,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){let o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let h=c._cacheIndex,d=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=h,t[h]=d,t.pop(),this._removeInactiveBindingsForAction(c)}delete s[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}},qu=class extends uo{constructor(e=1,t=1,n=1,s={}){super(e,t,s),this.isRenderTarget3D=!0,this.depth=n,this.texture=new or(null,e,t,n),this._setTextureOptions(s),this.texture.isRenderTargetTexture=!0}},Yu=class i{constructor(e){this.value=e}clone(){return new i(this.value.clone===void 0?this.value:this.value.clone())}},iS=0,Zu=class extends Dn{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:iS++}),this.name="",this.usage=lo,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){let t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){this.dispatchEvent({type:"dispose"})}copy(e){this.name=e.name,this.usage=e.usage;let t=e.uniforms;this.uniforms.length=0;for(let n=0,s=t.length;n<s;n++){let r=Array.isArray(t[n])?t[n]:[t[n]];for(let o=0;o<r.length;o++)this.uniforms.push(r[o].clone())}return this}clone(){return new this.constructor().copy(this)}},$u=class extends cr{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}},Ju=class{constructor(e,t,n,s,r,o=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=s,this.count=r,this.normalized=o,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}},O0=new nt,Ku=class{constructor(e,t,n=0,s=1/0){this.ray=new Qi(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new ar,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ke("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return O0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(O0),this}intersectObject(e,t=!0,n=[]){return Cp(e,this,n,t),n.sort(F0),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Cp(e[s],this,n,t);return n.sort(F0),n}};function F0(i,e){return i.distance-e.distance}function Cp(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Cp(r[o],e,t,!0)}}var ju=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ve("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}},Qu=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Qe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Qe(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},ed=class{constructor(e=1,t=0,n=0){this.radius=e,this.theta=t,this.y=n}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}},bm=class bm{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};bm.prototype.isMatrix2=!0;var td=bm,B0=new ne,oc=class{constructor(e=new ne(1/0,1/0),t=new ne(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=B0.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,B0).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},z0=new R,su=new R,jr=new R,Qr=new R,pp=new R,sS=new R,rS=new R,nd=class{constructor(e=new R,t=new R){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){z0.subVectors(e,this.start),su.subVectors(this.end,this.start);let n=su.dot(su);if(n===0)return 0;let r=su.dot(z0)/n;return t&&(r=Qe(r,0,1)),r}closestPointToPoint(e,t,n){let s=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(e,t=sS,n=rS){let s=10000000000000001e-32,r,o,a=this.start,l=e.start,c=this.end,h=e.end;jr.subVectors(c,a),Qr.subVectors(h,l),pp.subVectors(a,l);let d=jr.dot(jr),u=Qr.dot(Qr),f=Qr.dot(pp);if(d<=s&&u<=s)return t.copy(a),n.copy(l),t.sub(n),t.dot(t);if(d<=s)r=0,o=f/u,o=Qe(o,0,1);else{let p=jr.dot(pp);if(u<=s)o=0,r=Qe(-p/d,0,1);else{let _=jr.dot(Qr),m=d*u-_*_;m!==0?r=Qe((_*f-p*u)/m,0,1):r=0,o=(_*r+f)/u,o<0?(o=0,r=Qe(-p/d,0,1)):o>1&&(o=1,r=Qe((_-p)/d,0,1))}}return t.copy(a).addScaledVector(jr,r),n.copy(l).addScaledVector(Qr,o),t.distanceToSquared(n)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}},V0=new R,id=class extends xt{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";let n=new it,s=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,a=1,l=32;o<l;o++,a++){let c=o/l*Math.PI*2,h=a/l*Math.PI*2;s.push(Math.cos(c),Math.sin(c),1,Math.cos(h),Math.sin(h),1)}n.setAttribute("position",new Pe(s,3));let r=new on({fog:!1,toneMapped:!1});this.cone=new Gn(n,r),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorldNeedsUpdate=!0;let e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),V0.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(V0),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}},vs=new R,ru=new nt,mp=new nt,sd=class extends Gn{constructor(e){let t=Q_(e),n=new it,s=[],r=[];for(let c=0;c<t.length;c++){let h=t[c];h.parent&&h.parent.isBone&&(s.push(0,0,0),s.push(0,0,0),r.push(0,0,0),r.push(0,0,0))}n.setAttribute("position",new Pe(s,3)),n.setAttribute("color",new Pe(r,3));let o=new on({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,o),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1;let a=new be(255),l=new be(65280);this.setColors(a,l)}updateMatrixWorld(e){let t=this.bones,n=this.geometry,s=n.getAttribute("position");mp.copy(this.root.matrixWorld).invert();for(let r=0,o=0;r<t.length;r++){let a=t[r];a.parent&&a.parent.isBone&&(ru.multiplyMatrices(mp,a.matrixWorld),vs.setFromMatrixPosition(ru),s.setXYZ(o,vs.x,vs.y,vs.z),ru.multiplyMatrices(mp,a.parent.matrixWorld),vs.setFromMatrixPosition(ru),s.setXYZ(o+1,vs.x,vs.y,vs.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}setColors(e,t){let s=this.geometry.getAttribute("color");for(let r=0;r<s.count;r+=2)s.setXYZ(r,e.r,e.g,e.b),s.setXYZ(r+1,t.r,t.g,t.b);return s.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}};function Q_(i){let e=[];i.isBone===!0&&e.push(i);for(let t=0;t<i.children.length;t++)e.push(...Q_(i.children[t]));return e}var rd=class extends Pt{constructor(e,t,n){let s=new Co(t,4,2),r=new kn({wireframe:!0,fog:!1,toneMapped:!1});super(s,r),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}},oS=new R,k0=new be,G0=new be,od=class extends xt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";let s=new Eo(t);s.rotateY(Math.PI*.5),this.material=new kn({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);let r=s.getAttribute("position"),o=new Float32Array(r.count*3);s.setAttribute("color",new yt(o,3)),this.add(new Pt(s,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){let e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{let t=e.geometry.getAttribute("color");k0.copy(this.light.color),G0.copy(this.light.groundColor);for(let n=0,s=t.count;n<s;n++){let r=n<s/2?k0:G0;t.setXYZ(n,r.r,r.g,r.b)}t.needsUpdate=!0}this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),e.lookAt(oS.setFromMatrixPosition(this.light.matrixWorld).negate())}},ad=class extends Gn{constructor(e=10,t=10,n=4473924,s=8947848){n=new be(n),s=new be(s);let r=t/2,o=e/t,a=e/2,l=[],c=[];for(let u=0,f=0,p=-a;u<=t;u++,p+=o){l.push(-a,0,p,a,0,p),l.push(p,0,-a,p,0,a);let _=u===r?n:s;_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3}let h=new it;h.setAttribute("position",new Pe(l,3)),h.setAttribute("color",new Pe(c,3));let d=new on({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}},ld=class extends Gn{constructor(e=10,t=16,n=8,s=64,r=4473924,o=8947848){r=new be(r),o=new be(o);let a=[],l=[];if(t>1)for(let d=0;d<t;d++){let u=d/t*(Math.PI*2),f=Math.sin(u)*e,p=Math.cos(u)*e;a.push(0,0,0),a.push(f,0,p);let _=d&1?r:o;l.push(_.r,_.g,_.b),l.push(_.r,_.g,_.b)}for(let d=0;d<n;d++){let u=d&1?r:o,f=e-e/n*d;for(let p=0;p<s;p++){let _=p/s*(Math.PI*2),m=Math.sin(_)*f,g=Math.cos(_)*f;a.push(m,0,g),l.push(u.r,u.g,u.b),_=(p+1)/s*(Math.PI*2),m=Math.sin(_)*f,g=Math.cos(_)*f,a.push(m,0,g),l.push(u.r,u.g,u.b)}}let c=new it;c.setAttribute("position",new Pe(a,3)),c.setAttribute("color",new Pe(l,3));let h=new on({vertexColors:!0,toneMapped:!1});super(c,h),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}},H0=new R,ou=new R,W0=new R,cd=class extends xt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let s=new it;s.setAttribute("position",new Pe([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));let r=new on({fog:!1,toneMapped:!1});this.lightPlane=new _i(s,r),this.add(this.lightPlane),s=new it,s.setAttribute("position",new Pe([0,0,0,0,0,1],3)),this.targetLine=new _i(s,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),H0.setFromMatrixPosition(this.light.matrixWorld),ou.setFromMatrixPosition(this.light.target.matrixWorld),W0.subVectors(ou,H0),this.lightPlane.lookAt(ou),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(ou),this.targetLine.scale.z=W0.length()}},au=new R,Ut=new gr,hd=class extends Gn{constructor(e){let t=new it,n=new on({color:16777215,vertexColors:!0,toneMapped:!1}),s=[],r=[],o={};a("n1","n2"),a("n2","n4"),a("n4","n3"),a("n3","n1"),a("f1","f2"),a("f2","f4"),a("f4","f3"),a("f3","f1"),a("n1","f1"),a("n2","f2"),a("n3","f3"),a("n4","f4"),a("p","n1"),a("p","n2"),a("p","n3"),a("p","n4"),a("u1","u2"),a("u2","u3"),a("u3","u1"),a("c","t"),a("p","c"),a("cn1","cn2"),a("cn3","cn4"),a("cf1","cf2"),a("cf3","cf4");function a(p,_){l(p),l(_)}function l(p){s.push(0,0,0),r.push(0,0,0),o[p]===void 0&&(o[p]=[]),o[p].push(s.length/3-1)}t.setAttribute("position",new Pe(s,3)),t.setAttribute("color",new Pe(r,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update();let c=new be(16755200),h=new be(16711680),d=new be(43775),u=new be(16777215),f=new be(3355443);this.setColors(c,h,d,u,f)}setColors(e,t,n,s,r){let a=this.geometry.getAttribute("color");return a.setXYZ(0,e.r,e.g,e.b),a.setXYZ(1,e.r,e.g,e.b),a.setXYZ(2,e.r,e.g,e.b),a.setXYZ(3,e.r,e.g,e.b),a.setXYZ(4,e.r,e.g,e.b),a.setXYZ(5,e.r,e.g,e.b),a.setXYZ(6,e.r,e.g,e.b),a.setXYZ(7,e.r,e.g,e.b),a.setXYZ(8,e.r,e.g,e.b),a.setXYZ(9,e.r,e.g,e.b),a.setXYZ(10,e.r,e.g,e.b),a.setXYZ(11,e.r,e.g,e.b),a.setXYZ(12,e.r,e.g,e.b),a.setXYZ(13,e.r,e.g,e.b),a.setXYZ(14,e.r,e.g,e.b),a.setXYZ(15,e.r,e.g,e.b),a.setXYZ(16,e.r,e.g,e.b),a.setXYZ(17,e.r,e.g,e.b),a.setXYZ(18,e.r,e.g,e.b),a.setXYZ(19,e.r,e.g,e.b),a.setXYZ(20,e.r,e.g,e.b),a.setXYZ(21,e.r,e.g,e.b),a.setXYZ(22,e.r,e.g,e.b),a.setXYZ(23,e.r,e.g,e.b),a.setXYZ(24,t.r,t.g,t.b),a.setXYZ(25,t.r,t.g,t.b),a.setXYZ(26,t.r,t.g,t.b),a.setXYZ(27,t.r,t.g,t.b),a.setXYZ(28,t.r,t.g,t.b),a.setXYZ(29,t.r,t.g,t.b),a.setXYZ(30,t.r,t.g,t.b),a.setXYZ(31,t.r,t.g,t.b),a.setXYZ(32,n.r,n.g,n.b),a.setXYZ(33,n.r,n.g,n.b),a.setXYZ(34,n.r,n.g,n.b),a.setXYZ(35,n.r,n.g,n.b),a.setXYZ(36,n.r,n.g,n.b),a.setXYZ(37,n.r,n.g,n.b),a.setXYZ(38,s.r,s.g,s.b),a.setXYZ(39,s.r,s.g,s.b),a.setXYZ(40,r.r,r.g,r.b),a.setXYZ(41,r.r,r.g,r.b),a.setXYZ(42,r.r,r.g,r.b),a.setXYZ(43,r.r,r.g,r.b),a.setXYZ(44,r.r,r.g,r.b),a.setXYZ(45,r.r,r.g,r.b),a.setXYZ(46,r.r,r.g,r.b),a.setXYZ(47,r.r,r.g,r.b),a.setXYZ(48,r.r,r.g,r.b),a.setXYZ(49,r.r,r.g,r.b),a.needsUpdate=!0,this}update(){let e=this.geometry,t=this.pointMap,n=1,s=1,r,o;if(Ut.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),this.camera.reversedDepth===!0)r=1,o=0;else if(this.camera.coordinateSystem===Pn)r=-1,o=1;else if(this.camera.coordinateSystem===As)r=0,o=1;else throw new Error("THREE.CameraHelper.update(): Invalid coordinate system: "+this.camera.coordinateSystem);Gt("c",t,e,Ut,0,0,r),Gt("t",t,e,Ut,0,0,o),Gt("n1",t,e,Ut,-n,-s,r),Gt("n2",t,e,Ut,n,-s,r),Gt("n3",t,e,Ut,-n,s,r),Gt("n4",t,e,Ut,n,s,r),Gt("f1",t,e,Ut,-n,-s,o),Gt("f2",t,e,Ut,n,-s,o),Gt("f3",t,e,Ut,-n,s,o),Gt("f4",t,e,Ut,n,s,o),Gt("u1",t,e,Ut,n*.7,s*1.1,r),Gt("u2",t,e,Ut,-n*.7,s*1.1,r),Gt("u3",t,e,Ut,0,s*2,r),Gt("cf1",t,e,Ut,-n,0,o),Gt("cf2",t,e,Ut,n,0,o),Gt("cf3",t,e,Ut,0,-s,o),Gt("cf4",t,e,Ut,0,s,o),Gt("cn1",t,e,Ut,-n,0,r),Gt("cn2",t,e,Ut,n,0,r),Gt("cn3",t,e,Ut,0,-s,r),Gt("cn4",t,e,Ut,0,s,r),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}};function Gt(i,e,t,n,s,r,o){au.set(s,r,o).unproject(n);let a=e[i];if(a!==void 0){let l=t.getAttribute("position");for(let c=0,h=a.length;c<h;c++)l.setXYZ(a[c],au.x,au.y,au.z)}}var lu=new Kt,ud=class extends Gn{constructor(e,t=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=new Float32Array(24),r=new it;r.setIndex(new yt(n,1)),r.setAttribute("position",new yt(s,3)),super(r,new on({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&lu.setFromObject(this.object),lu.isEmpty())return;let e=lu.min,t=lu.max,n=this.geometry.attributes.position,s=n.array;s[0]=t.x,s[1]=t.y,s[2]=t.z,s[3]=e.x,s[4]=t.y,s[5]=t.z,s[6]=e.x,s[7]=e.y,s[8]=t.z,s[9]=t.x,s[10]=e.y,s[11]=t.z,s[12]=t.x,s[13]=t.y,s[14]=e.z,s[15]=e.x,s[16]=t.y,s[17]=e.z,s[18]=e.x,s[19]=e.y,s[20]=e.z,s[21]=t.x,s[22]=e.y,s[23]=e.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}},dd=class extends Gn{constructor(e,t=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new it;r.setIndex(new yt(n,1)),r.setAttribute("position",new Pe(s,3)),super(r,new on({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){let t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}},fd=class extends _i{constructor(e,t=1,n=16776960){let s=n,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],o=new it;o.setAttribute("position",new Pe(r,3)),o.computeBoundingSphere(),super(o,new on({color:s,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;let a=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new it;l.setAttribute("position",new Pe(a,3)),l.computeBoundingSphere(),this.add(new Pt(l,new kn({color:s,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}},X0=new R,cu,gp,pd=class extends xt{constructor(e=new R(0,0,1),t=new R(0,0,0),n=1,s=16776960,r=n*.2,o=r*.2){super(),this.type="ArrowHelper",cu===void 0&&(cu=new it,cu.setAttribute("position",new Pe([0,0,0,0,1,0],3)),gp=new yo(.5,1,5,1),gp.translate(0,-.5,0)),this.position.copy(t),this.line=new _i(cu,new on({color:s,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Pt(gp,new kn({color:s,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,r,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{X0.set(e.z,0,-e.x).normalize();let t=Math.acos(e.y);this.quaternion.setFromAxisAngle(X0,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}},md=class extends Gn{constructor(e=1){let t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new it;s.setAttribute("position",new Pe(t,3)),s.setAttribute("color",new Pe(n,3));let r=new on({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(e,t,n){let s=new be,r=this.geometry.attributes.color.array;return s.set(e),s.toArray(r,0),s.toArray(r,3),s.set(t),s.toArray(r,6),s.toArray(r,9),s.set(n),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}},gd=class{constructor(){this.type="ShapePath",this.color=new be,this.subPaths=[],this.currentPath=null,this.userData={}}moveTo(e,t){return this.currentPath=new Is,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,s){return this.currentPath.quadraticCurveTo(e,t,n,s),this}bezierCurveTo(e,t,n,s,r,o){return this.currentPath.bezierCurveTo(e,t,n,s,r,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(){function e(l,c){let h=!1,d=c.length;for(let u=0,f=d-1;u<d;f=u++){let p=c[u],_=c[f];p.y>l.y!=_.y>l.y&&l.x<(_.x-p.x)*(l.y-p.y)/(_.y-p.y)+p.x&&(h=!h)}return h}function t(l,c){let h=c.getCenter(new ne);if(e(h,l))return h;let d=h.y,u=[],f=l.length;for(let p=0;p<f;p++){let _=l[p],m=l[(p+1)%f];if(_.y>d!=m.y>d){let g=_.x+(d-_.y)*(m.x-_.x)/(m.y-_.y);u.push(g)}}return u.length>1&&(u.sort((p,_)=>p-_),h.x=(u[0]+u[1])/2),h}let n=this.userData.style&&this.userData.style.fillRule||"nonzero";n!=="nonzero"&&n!=="evenodd"&&(ve('Fill-rule "'+n+'" is not supported, falling back to "nonzero".'),n="nonzero");let s=n==="nonzero"?(l=>l!==0):(l=>(l&1)!==0),r=[];for(let l of this.subPaths){let c=l.getPoints();if(c.length<3)continue;let h=Jn.area(c);if(h===0)continue;let d=new oc;for(let u=0;u<c.length;u++)d.expandByPoint(c[u]);r.push({subPath:l,points:c,boundingBox:d,interiorPoint:t(c,d),absArea:Math.abs(h),winding:h<0?-1:1,container:null,exclude:!1,role:null})}r.sort((l,c)=>c.absArea-l.absArea);for(let l=0;l<r.length;l++){let c=r[l],h=0;for(let d=l-1;d>=0;d--){let u=r[d];if(u.boundingBox.containsBox(c.boundingBox)&&e(c.interiorPoint,u.points)){c.container=u.exclude?u.container:u,h=u.winding,c.winding+=h;break}}s(c.winding)===s(h)&&(c.exclude=!0)}for(let l of r)l.exclude||(l.role=l.container===null||l.container.role==="hole"?"outer":"hole");let o=[],a=new Map;for(let l of r){if(l.exclude||l.role!=="outer")continue;let c=new Ps;c.curves=l.subPath.curves,o.push(c),a.set(l,c)}for(let l of r){if(l.exclude||l.role!=="hole")continue;let c=a.get(l.container);if(!c)continue;let h=new Is;h.curves=l.subPath.curves,c.holes.push(h)}return o}},_d=class extends Dn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){ve("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function aS(i,e){let t=i.image&&i.image.width?i.image.width/i.image.height:1;return t>e?(i.repeat.x=1,i.repeat.y=t/e,i.offset.x=0,i.offset.y=(1-i.repeat.y)/2):(i.repeat.x=e/t,i.repeat.y=1,i.offset.x=(1-i.repeat.x)/2,i.offset.y=0),i}function lS(i,e){let t=i.image&&i.image.width?i.image.width/i.image.height:1;return t>e?(i.repeat.x=e/t,i.repeat.y=1,i.offset.x=(1-i.repeat.x)/2,i.offset.y=0):(i.repeat.x=1,i.repeat.y=t/e,i.offset.x=0,i.offset.y=(1-i.repeat.y)/2),i}function cS(i){return i.repeat.x=1,i.repeat.y=1,i.offset.x=0,i.offset.y=0,i}function zd(i,e,t,n){let s=hS(n);switch(t){case Ud:return i*e;case dc:return i*e/s.components*s.byteLength;case qo:return i*e/s.components*s.byteLength;case rs:return i*e*2/s.components*s.byteLength;case fc:return i*e*2/s.components*s.byteLength;case Od:return i*e*3/s.components*s.byteLength;case _n:return i*e*4/s.components*s.byteLength;case pc:return i*e*4/s.components*s.byteLength;case Yo:case Zo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case $o:case Jo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case gc:case xc:return Math.max(i,16)*Math.max(e,8)/4;case mc:case _c:return Math.max(i,8)*Math.max(e,8)/2;case vc:case yc:case Sc:case Mc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case bc:case Ko:case Tc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ac:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case wc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ec:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Cc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Rc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ic:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Pc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Dc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Lc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Nc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Uc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Oc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Fc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Bc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case zc:case Vc:case kc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Gc:case Hc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case jo:case Wc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function hS(i){switch(i){case Cn:case Pd:return{byteLength:1,components:1};case br:case Dd:case cn:return{byteLength:2,components:1};case hc:case uc:return{byteLength:2,components:4};case Wn:case cc:case gn:return{byteLength:4,components:1};case Ld:case Nd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}var xd=class{static contain(e,t){return aS(e,t)}static cover(e,t){return lS(e,t)}static fill(e){return cS(e)}static getByteLength(e,t,n,s){return zd(e,t,n,s)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function Sx(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function uS(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){let p=d[u],_=d[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){let _=d[f];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var dS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,pS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_S=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT )
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN )
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,bS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,SS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,MS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,TS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,AS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,wS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ES=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,CS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,RS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,IS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,PS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,DS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,LS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,NS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,US=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,OS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,FS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,BS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,VS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,GS="gl_FragColor = linearToOutputTexel( gl_FragColor );",HS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,WS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,XS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,qS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,YS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS

		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ZS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$S=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,JS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,KS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,QS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,eM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,iM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,sM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,rM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,oM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,aM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,hM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN

		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );

		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );

		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );

		irradiance *= sheenEnergyComp;

	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,uM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,dM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,fM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pM=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,mM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_M=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,SM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,MM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,TM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,AM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,EM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,RM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,IM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,PM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,DM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,UM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,OM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,FM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,BM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,VM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER

		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {

	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,GM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,HM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,WM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,XM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,YM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ZM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif

				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,$M=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,JM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,KM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,jM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,QM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,e1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,t1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,n1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,i1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,s1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,r1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,o1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,a1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,l1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,c1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,h1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,u1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,d1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,f1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,v1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,y1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,b1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,S1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,M1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,A1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,w1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,E1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,R1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,P1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,L1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,N1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,U1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,O1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,F1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN

		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;

	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,z1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,k1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,G1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,H1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,W1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,X1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ht={alphahash_fragment:dS,alphahash_pars_fragment:fS,alphamap_fragment:pS,alphamap_pars_fragment:mS,alphatest_fragment:gS,alphatest_pars_fragment:_S,aomap_fragment:xS,aomap_pars_fragment:vS,batching_pars_vertex:yS,batching_vertex:bS,begin_vertex:SS,beginnormal_vertex:MS,bsdfs:TS,iridescence_fragment:AS,bumpmap_pars_fragment:wS,clipping_planes_fragment:ES,clipping_planes_pars_fragment:CS,clipping_planes_pars_vertex:RS,clipping_planes_vertex:IS,color_fragment:PS,color_pars_fragment:DS,color_pars_vertex:LS,color_vertex:NS,common:US,cube_uv_reflection_fragment:OS,defaultnormal_vertex:FS,displacementmap_pars_vertex:BS,displacementmap_vertex:zS,emissivemap_fragment:VS,emissivemap_pars_fragment:kS,colorspace_fragment:GS,colorspace_pars_fragment:HS,envmap_fragment:WS,envmap_common_pars_fragment:XS,envmap_pars_fragment:qS,envmap_pars_vertex:YS,envmap_physical_pars_fragment:sM,envmap_vertex:ZS,fog_vertex:$S,fog_pars_vertex:JS,fog_fragment:KS,fog_pars_fragment:jS,gradientmap_pars_fragment:QS,lightmap_pars_fragment:eM,lights_lambert_fragment:tM,lights_lambert_pars_fragment:nM,lights_pars_begin:iM,lights_toon_fragment:rM,lights_toon_pars_fragment:oM,lights_phong_fragment:aM,lights_phong_pars_fragment:lM,lights_physical_fragment:cM,lights_physical_pars_fragment:hM,lights_fragment_begin:uM,lights_fragment_maps:dM,lights_fragment_end:fM,lightprobes_pars_fragment:pM,logdepthbuf_fragment:mM,logdepthbuf_pars_fragment:gM,logdepthbuf_pars_vertex:_M,logdepthbuf_vertex:xM,map_fragment:vM,map_pars_fragment:yM,map_particle_fragment:bM,map_particle_pars_fragment:SM,metalnessmap_fragment:MM,metalnessmap_pars_fragment:TM,morphinstance_vertex:AM,morphcolor_vertex:wM,morphnormal_vertex:EM,morphtarget_pars_vertex:CM,morphtarget_vertex:RM,normal_fragment_begin:IM,normal_fragment_maps:PM,normal_pars_fragment:DM,normal_pars_vertex:LM,normal_vertex:NM,normalmap_pars_fragment:UM,clearcoat_normal_fragment_begin:OM,clearcoat_normal_fragment_maps:FM,clearcoat_pars_fragment:BM,iridescence_pars_fragment:zM,opaque_fragment:VM,packing:kM,premultiplied_alpha_fragment:GM,project_vertex:HM,dithering_fragment:WM,dithering_pars_fragment:XM,roughnessmap_fragment:qM,roughnessmap_pars_fragment:YM,shadowmap_pars_fragment:ZM,shadowmap_pars_vertex:$M,shadowmap_vertex:JM,shadowmask_pars_fragment:KM,skinbase_vertex:jM,skinning_pars_vertex:QM,skinning_vertex:e1,skinnormal_vertex:t1,specularmap_fragment:n1,specularmap_pars_fragment:i1,tonemapping_fragment:s1,tonemapping_pars_fragment:r1,transmission_fragment:o1,transmission_pars_fragment:a1,uv_pars_fragment:l1,uv_pars_vertex:c1,uv_vertex:h1,worldpos_vertex:u1,background_vert:d1,background_frag:f1,backgroundCube_vert:p1,backgroundCube_frag:m1,cube_vert:g1,cube_frag:_1,depth_vert:x1,depth_frag:v1,distance_vert:y1,distance_frag:b1,equirect_vert:S1,equirect_frag:M1,linedashed_vert:T1,linedashed_frag:A1,meshbasic_vert:w1,meshbasic_frag:E1,meshlambert_vert:C1,meshlambert_frag:R1,meshmatcap_vert:I1,meshmatcap_frag:P1,meshnormal_vert:D1,meshnormal_frag:L1,meshphong_vert:N1,meshphong_frag:U1,meshphysical_vert:O1,meshphysical_frag:F1,meshtoon_vert:B1,meshtoon_frag:z1,points_vert:V1,points_frag:k1,shadow_vert:G1,shadow_frag:H1,sprite_vert:W1,sprite_frag:X1},Te={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new R},probesMax:{value:new R},probesResolution:{value:new R}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},Si={basic:{uniforms:vn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:vn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new be(0)},envMapIntensity:{value:1}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:vn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:vn([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:vn([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new be(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:vn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:vn([Te.points,Te.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:vn([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:vn([Te.common,Te.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:vn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:vn([Te.sprite,Te.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:vn([Te.common,Te.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:vn([Te.lights,Te.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Si.physical={uniforms:vn([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};var Vd={r:0,b:0,g:0},q1=new nt,Mx=new rt;Mx.set(-1,0,0,0,1,0,0,0,1);function Y1(i,e,t,n,s,r){let o=new be(0),a=s===!0?0:1,l,c,h=null,d=0,u=null;function f(b){let S=b.isScene===!0?b.background:null;if(S&&S.isTexture){let x=b.backgroundBlurriness>0;S=e.get(S,x)}return S}function p(b){let S=!1,x=f(b);x===null?m(o,a):x&&x.isColor&&(m(x,1),S=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(b,S){let x=f(S);x&&(x.isCubeTexture||x.mapping===vr)?(c===void 0&&(c=new Pt(new Rs(1,1,1),new Lt({name:"BackgroundCubeMaterial",uniforms:Mr(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,M,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(q1.makeRotationFromEuler(S.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Mx),c.material.toneMapped=mt.getTransfer(x.colorSpace)!==vt,(h!==x||d!==x.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,u=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Pt(new fr(2,2),new Lt({name:"BackgroundMaterial",uniforms:Mr(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=mt.getTransfer(x.colorSpace)!==vt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=x,d=x.version,u=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function m(b,S){b.getRGB(Vd,fm(i)),t.buffers.color.setClear(Vd.r,Vd.g,Vd.b,S,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,S=1){o.set(b),a=S,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(b){a=b,m(o,a)},render:p,addToRenderList:_,dispose:g}}function Z1(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(D,L,q,Y,U){let k=!1,G=d(D,Y,q,L);r!==G&&(r=G,c(r.object)),k=f(D,Y,q,U),k&&p(D,Y,q,U),U!==null&&e.update(U,i.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,x(D,L,q,Y),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return i.createVertexArray()}function c(D){return i.bindVertexArray(D)}function h(D){return i.deleteVertexArray(D)}function d(D,L,q,Y){let U=Y.wireframe===!0,k=n[L.id];k===void 0&&(k={},n[L.id]=k);let G=D.isInstancedMesh===!0?D.id:0,K=k[G];K===void 0&&(K={},k[G]=K);let V=K[q.id];V===void 0&&(V={},K[q.id]=V);let re=V[U];return re===void 0&&(re=u(l()),V[U]=re),re}function u(D){let L=[],q=[],Y=[];for(let U=0;U<t;U++)L[U]=0,q[U]=0,Y[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:q,attributeDivisors:Y,object:D,attributes:{},index:null}}function f(D,L,q,Y){let U=r.attributes,k=L.attributes,G=0,K=q.getAttributes();for(let V in K)if(K[V].location>=0){let le=U[V],me=k[V];if(me===void 0&&(V==="instanceMatrix"&&D.instanceMatrix&&(me=D.instanceMatrix),V==="instanceColor"&&D.instanceColor&&(me=D.instanceColor)),le===void 0||le.attribute!==me||me&&le.data!==me.data)return!0;G++}return r.attributesNum!==G||r.index!==Y}function p(D,L,q,Y){let U={},k=L.attributes,G=0,K=q.getAttributes();for(let V in K)if(K[V].location>=0){let le=k[V];le===void 0&&(V==="instanceMatrix"&&D.instanceMatrix&&(le=D.instanceMatrix),V==="instanceColor"&&D.instanceColor&&(le=D.instanceColor));let me={};me.attribute=le,le&&le.data&&(me.data=le.data),U[V]=me,G++}r.attributes=U,r.attributesNum=G,r.index=Y}function _(){let D=r.newAttributes;for(let L=0,q=D.length;L<q;L++)D[L]=0}function m(D){g(D,0)}function g(D,L){let q=r.newAttributes,Y=r.enabledAttributes,U=r.attributeDivisors;q[D]=1,Y[D]===0&&(i.enableVertexAttribArray(D),Y[D]=1),U[D]!==L&&(i.vertexAttribDivisor(D,L),U[D]=L)}function b(){let D=r.newAttributes,L=r.enabledAttributes;for(let q=0,Y=L.length;q<Y;q++)L[q]!==D[q]&&(i.disableVertexAttribArray(q),L[q]=0)}function S(D,L,q,Y,U,k,G){G===!0?i.vertexAttribIPointer(D,L,q,U,k):i.vertexAttribPointer(D,L,q,Y,U,k)}function x(D,L,q,Y){_();let U=Y.attributes,k=q.getAttributes(),G=L.defaultAttributeValues;for(let K in k){let V=k[K];if(V.location>=0){let re=U[K];if(re===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(re=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(re=D.instanceColor)),re!==void 0){let le=re.normalized,me=re.itemSize,tt=e.get(re);if(tt===void 0)continue;let pt=tt.buffer,je=tt.type,X=tt.bytesPerElement,de=je===i.INT||je===i.UNSIGNED_INT||re.gpuType===cc;if(re.isInterleavedBufferAttribute){let se=re.data,fe=se.stride,ze=re.offset;if(se.isInstancedInterleavedBuffer){for(let Le=0;Le<V.locationSize;Le++)g(V.location+Le,se.meshPerAttribute);D.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Le=0;Le<V.locationSize;Le++)m(V.location+Le);i.bindBuffer(i.ARRAY_BUFFER,pt);for(let Le=0;Le<V.locationSize;Le++)S(V.location+Le,me/V.locationSize,je,le,fe*X,(ze+me/V.locationSize*Le)*X,de)}else{if(re.isInstancedBufferAttribute){for(let se=0;se<V.locationSize;se++)g(V.location+se,re.meshPerAttribute);D.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let se=0;se<V.locationSize;se++)m(V.location+se);i.bindBuffer(i.ARRAY_BUFFER,pt);for(let se=0;se<V.locationSize;se++)S(V.location+se,me/V.locationSize,je,le,me*X,me/V.locationSize*se*X,de)}}else if(G!==void 0){let le=G[K];if(le!==void 0)switch(le.length){case 2:i.vertexAttrib2fv(V.location,le);break;case 3:i.vertexAttrib3fv(V.location,le);break;case 4:i.vertexAttrib4fv(V.location,le);break;default:i.vertexAttrib1fv(V.location,le)}}}}b()}function A(){w();for(let D in n){let L=n[D];for(let q in L){let Y=L[q];for(let U in Y){let k=Y[U];for(let G in k)h(k[G].object),delete k[G];delete Y[U]}}delete n[D]}}function M(D){if(n[D.id]===void 0)return;let L=n[D.id];for(let q in L){let Y=L[q];for(let U in Y){let k=Y[U];for(let G in k)h(k[G].object),delete k[G];delete Y[U]}}delete n[D.id]}function C(D){for(let L in n){let q=n[L];for(let Y in q){let U=q[Y];if(U[D.id]===void 0)continue;let k=U[D.id];for(let G in k)h(k[G].object),delete k[G];delete U[D.id]}}}function y(D){for(let L in n){let q=n[L],Y=D.isInstancedMesh===!0?D.id:0,U=q[Y];if(U!==void 0){for(let k in U){let G=U[k];for(let K in G)h(G[K].object),delete G[K];delete U[k]}delete q[Y],Object.keys(q).length===0&&delete n[L]}}}function w(){I(),o=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:I,dispose:A,releaseStatesOfGeometry:M,releaseStatesOfObject:y,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:b}}function $1(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function J1(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==_n&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let y=C===cn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Cn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==gn&&!y)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(ve("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&ve("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),M=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:b,maxVaryings:S,maxFragmentUniforms:x,maxSamples:A,samples:M}}function K1(i){let e=this,t=null,n=0,s=!1,r=!1,o=new di,a=new rt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let p=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,g=i.get(d);if(!s||p===null||p.length===0||r&&!m)r?h(null):c();else{let b=r?0:n,S=b*4,x=g.clippingState||null;l.value=x,x=h(p,u,S,f);for(let A=0;A!==S;++A)x[A]=t[A];g.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,p){let _=d!==null?d.length:0,m=null;if(_!==0){if(m=l.value,p!==!0||m===null){let g=f+_*4,b=u.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<g)&&(m=new Float32Array(g));for(let S=0,x=f;S!==_;++S,x+=4)o.copy(d[S]).applyMatrix4(b,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}var Us=4,ex=[.125,.215,.35,.446,.526,.582],Tr=20,j1=256,Zc=new Pi,tx=new be,Sm=null,Mm=0,Tm=0,Am=!1,Q1=new R,Kc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=Q1}=r;Sm=this._renderer.getRenderTarget(),Mm=this._renderer.getActiveCubeFace(),Tm=this._renderer.getActiveMipmapLevel(),Am=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ix(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Sm,Mm,Tm),this._renderer.xr.enabled=Am,e.scissorTest=!1,Qo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===yi||e.mapping===is?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sm=this._renderer.getRenderTarget(),Mm=this._renderer.getActiveCubeFace(),Tm=this._renderer.getActiveMipmapLevel(),Am=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:It,minFilter:It,generateMipmaps:!1,type:cn,format:_n,colorSpace:oo,depthBuffer:!1},s=nx(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nx(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=eT(r)),this._blurMaterial=nT(r,e,t),this._ggxMaterial=tT(r,e,t)}return s}_compileMaterial(e){let t=new Pt(new it,e);this._renderer.compile(t,Zc)}_sceneToCubeUV(e,t,n,s,r){let l=new qt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(tx),d.toneMapping=Qn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pt(new Rs,new kn({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,m=_.material,g=!1,b=e.background;b?b.isColor&&(m.color.copy(b),e.background=null,g=!0):(m.color.copy(tx),g=!0);for(let S=0;S<6;S++){let x=S%3;x===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[S],r.y,r.z)):x===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[S]));let A=this._cubeSize;Qo(s,x*A,S>2?A:0,A,A),d.setRenderTarget(s),g&&d.render(_,l),d.render(e,l)}d.toneMapping=f,d.autoClear=u,e.background=b}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===yi||e.mapping===is;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=sx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ix());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Qo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Zc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=0+c*1.25,f=d*u,{_lodMax:p}=this,_=this._sizeLods[n],m=3*_*(n>p-Us?n-p+Us:0),g=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=p-t,Qo(r,m,g,3*_,2*_),s.setRenderTarget(r),s.render(a,Zc),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,Qo(e,m,g,3*_,2*_),s.setRenderTarget(e),s.render(a,Zc)}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&ke("blur direction must be either latitudinal or longitudinal!");let h=3,d=this._lodMeshes[s];d.material=c;let u=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Tr-1),_=r/p,m=isFinite(r)?1+Math.floor(h*_):Tr;m>Tr&&ve(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Tr}`);let g=[],b=0;for(let C=0;C<Tr;++C){let y=C/_,w=Math.exp(-y*y/2);g.push(w),C===0?b+=w:C<m&&(b+=2*w)}for(let C=0;C<g.length;C++)g[C]=g[C]/b;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=g,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:S}=this;u.dTheta.value=p,u.mipInt.value=S-n;let x=this._sizeLods[s],A=3*x*(s>S-Us?s-S+Us:0),M=4*(this._cubeSize-x);Qo(t,A,M,3*x,2*x),l.setRenderTarget(t),l.render(d,Zc)}};function eT(i){let e=[],t=[],n=[],s=i,r=i-Us+1+ex.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Us?l=ex[o-i+Us-1]:o===0&&(l=0),t.push(l);let c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,p=6,_=3,m=2,g=1,b=new Float32Array(_*p*f),S=new Float32Array(m*p*f),x=new Float32Array(g*p*f);for(let M=0;M<f;M++){let C=M%3*2/3-1,y=M>2?0:-1,w=[C,y,0,C+2/3,y,0,C+2/3,y+1,0,C,y,0,C+2/3,y+1,0,C,y+1,0];b.set(w,_*p*M),S.set(u,m*p*M);let I=[M,M,M,M,M,M];x.set(I,g*p*M)}let A=new it;A.setAttribute("position",new yt(b,_)),A.setAttribute("uv",new yt(S,m)),A.setAttribute("faceIndex",new yt(x,g)),n.push(new Pt(A,null)),s>Us&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function nx(i,e,t){let n=new Bt(i,e,t);return n.texture.mapping=vr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function tT(i,e,t){return new Lt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:j1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Gd(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function nT(i,e,t){let n=new Float32Array(Tr),s=new R(0,1,0);return new Lt({name:"SphericalGaussianBlur",defines:{n:Tr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Gd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function ix(){return new Lt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function sx(){return new Lt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Gd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var jc=class extends Bt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Cs(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Rs(5,5,5),r=new Lt({name:"CubemapFromEquirect",uniforms:Mr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:xn,blending:Hn});r.uniforms.tEquirect.value=t;let o=new Pt(s,r),a=t.minFilter;return t.minFilter===bi&&(t.minFilter=It),new tc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};function iT(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Ho||f===Wo)if(e.has(u)){let p=e.get(u).texture;return a(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let _=new jc(p.height);return _.fromEquirectangularTexture(i,u),e.set(u,_),u.addEventListener("dispose",c),a(_.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let f=u.mapping,p=f===Ho||f===Wo,_=f===yi||f===is;if(p||_){let m=t.get(u),g=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new Kc(i)),m=p?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let b=u.image;return p&&b&&b.height>0||_&&b&&l(b)?(n===null&&(n=new Kc(i)),m=p?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,f){return f===Ho?u.mapping=yi:f===Wo&&(u.mapping=is),u}function l(u){let f=0,p=6;for(let _=0;_<p;_++)u[_]!==void 0&&f++;return f===p}function c(u){let f=u.target;f.removeEventListener("dispose",c);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function sT(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ji("WebGLRenderer: "+n+" extension not supported."),s}}}function rT(i,e,t,n){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let p in u.attributes)e.remove(u.attributes[p]);u.removeEventListener("dispose",o),delete s[u.id];let f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)e.update(u[f],i.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,p=d.attributes.position,_=0;if(p===void 0)return;if(f!==null){let b=f.array;_=f.version;for(let S=0,x=b.length;S<x;S+=3){let A=b[S+0],M=b[S+1],C=b[S+2];u.push(A,M,M,C,C,A)}}else{let b=p.array;_=p.version;for(let S=0,x=b.length/3-1;S<x;S+=3){let A=S+0,M=S+1,C=S+2;u.push(A,M,M,C,C,A)}}let m=new(p.count>=65535?po:fo)(u,1);m.version=_;let g=r.get(d);g&&e.remove(g),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function oT(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*o),t.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*o,f),t.update(u,n,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let _=0;for(let m=0;m<f;m++)_+=u[m];t.update(_,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function aT(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:ke("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function lT(i,e,t){let n=new WeakMap,s=new Mt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let w=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],S=0;f===!0&&(S=1),p===!0&&(S=2),_===!0&&(S=3);let x=a.attributes.position.count*S,A=1;x>e.maxTextureSize&&(A=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let M=new Float32Array(x*A*4*d),C=new rr(M,x,A,d);C.type=gn,C.needsUpdate=!0;let y=S*4;for(let I=0;I<d;I++){let D=m[I],L=g[I],q=b[I],Y=x*A*4*I;for(let U=0;U<D.count;U++){let k=U*y;f===!0&&(s.fromBufferAttribute(D,U),M[Y+k+0]=s.x,M[Y+k+1]=s.y,M[Y+k+2]=s.z,M[Y+k+3]=0),p===!0&&(s.fromBufferAttribute(L,U),M[Y+k+4]=s.x,M[Y+k+5]=s.y,M[Y+k+6]=s.z,M[Y+k+7]=0),_===!0&&(s.fromBufferAttribute(q,U),M[Y+k+8]=s.x,M[Y+k+9]=s.y,M[Y+k+10]=s.z,M[Y+k+11]=q.itemSize===4?s.w:1)}}u={count:d,texture:C,size:new ne(x,A)},n.set(a,u),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function cT(i,e,t,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var hT={[Md]:"LINEAR_TONE_MAPPING",[Td]:"REINHARD_TONE_MAPPING",[Ad]:"CINEON_TONE_MAPPING",[wd]:"ACES_FILMIC_TONE_MAPPING",[Cd]:"AGX_TONE_MAPPING",[Rd]:"NEUTRAL_TONE_MAPPING",[Ed]:"CUSTOM_TONE_MAPPING"};function uT(i,e,t,n,s,r){let o=new Bt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,depthTexture:s?new Ci(e,t):void 0}),a=new Bt(e,t,{type:cn,depthBuffer:!1,stencilBuffer:!1}),l=new it;l.setAttribute("position",new Pe([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Pe([0,2,0,0,2,0],2));let c=new Ro({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Pt(l,c),d=new Pi(-1,1,1,-1,0,1),u=null,f=null,p=!1,_,m=null,g=[],b=!1;this.setSize=function(S,x){o.setSize(S,x),a.setSize(S,x);for(let A=0;A<g.length;A++){let M=g[A];M.setSize&&M.setSize(S,x)}},this.setEffects=function(S){g=S,b=g.length>0&&g[0].isRenderPass===!0;let x=o.width,A=o.height;for(let M=0;M<g.length;M++){let C=g[M];C.setSize&&C.setSize(x,A)}},this.begin=function(S,x){if(p||S.toneMapping===Qn&&g.length===0)return!1;if(m=x,x!==null){let A=x.width,M=x.height;(o.width!==A||o.height!==M)&&this.setSize(A,M)}return b===!1&&S.setRenderTarget(o),_=S.toneMapping,S.toneMapping=Qn,!0},this.hasRenderPass=function(){return b},this.end=function(S,x){S.toneMapping=_,p=!0;let A=o,M=a;for(let C=0;C<g.length;C++){let y=g[C];if(y.enabled!==!1&&(y.render(S,M,A,x),y.needsSwap!==!1)){let w=A;A=M,M=w}}if(u!==S.outputColorSpace||f!==S.toneMapping){u=S.outputColorSpace,f=S.toneMapping,c.defines={},mt.getTransfer(u)===vt&&(c.defines.SRGB_TRANSFER="");let C=hT[f];C&&(c.defines[C]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=A.texture,S.setRenderTarget(m),S.render(h,d),m=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),l.dispose(),c.dispose()}}var Tx=new Ft,Cm=new Ci(1,1),Ax=new rr,wx=new or,Ex=new Cs,rx=[],ox=[],ax=new Float32Array(16),lx=new Float32Array(9),cx=new Float32Array(4);function ta(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=rx[s];if(r===void 0&&(r=new Float32Array(s),rx[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function jt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Qt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Hd(i,e){let t=ox[e];t===void 0&&(t=new Int32Array(e),ox[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function dT(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function fT(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2fv(this.addr,e),Qt(t,e)}}function pT(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;i.uniform3fv(this.addr,e),Qt(t,e)}}function mT(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4fv(this.addr,e),Qt(t,e)}}function gT(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Qt(t,e)}else{if(jt(t,n))return;cx.set(n),i.uniformMatrix2fv(this.addr,!1,cx),Qt(t,n)}}function _T(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Qt(t,e)}else{if(jt(t,n))return;lx.set(n),i.uniformMatrix3fv(this.addr,!1,lx),Qt(t,n)}}function xT(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Qt(t,e)}else{if(jt(t,n))return;ax.set(n),i.uniformMatrix4fv(this.addr,!1,ax),Qt(t,n)}}function vT(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function yT(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2iv(this.addr,e),Qt(t,e)}}function bT(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;i.uniform3iv(this.addr,e),Qt(t,e)}}function ST(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4iv(this.addr,e),Qt(t,e)}}function MT(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function TT(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2uiv(this.addr,e),Qt(t,e)}}function AT(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;i.uniform3uiv(this.addr,e),Qt(t,e)}}function wT(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4uiv(this.addr,e),Qt(t,e)}}function ET(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Cm.compareFunction=t.isReversedDepthBuffer()?Yc:qc,r=Cm):r=Tx,t.setTexture2D(e||r,s)}function CT(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||wx,s)}function RT(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Ex,s)}function IT(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Ax,s)}function PT(i){switch(i){case 5126:return dT;case 35664:return fT;case 35665:return pT;case 35666:return mT;case 35674:return gT;case 35675:return _T;case 35676:return xT;case 5124:case 35670:return vT;case 35667:case 35671:return yT;case 35668:case 35672:return bT;case 35669:case 35673:return ST;case 5125:return MT;case 36294:return TT;case 36295:return AT;case 36296:return wT;case 35678:case 36198:case 36298:case 36306:case 35682:return ET;case 35679:case 36299:case 36307:return CT;case 35680:case 36300:case 36308:case 36293:return RT;case 36289:case 36303:case 36311:case 36292:return IT}}function DT(i,e){i.uniform1fv(this.addr,e)}function LT(i,e){let t=ta(e,this.size,2);i.uniform2fv(this.addr,t)}function NT(i,e){let t=ta(e,this.size,3);i.uniform3fv(this.addr,t)}function UT(i,e){let t=ta(e,this.size,4);i.uniform4fv(this.addr,t)}function OT(i,e){let t=ta(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function FT(i,e){let t=ta(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function BT(i,e){let t=ta(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function zT(i,e){i.uniform1iv(this.addr,e)}function VT(i,e){i.uniform2iv(this.addr,e)}function kT(i,e){i.uniform3iv(this.addr,e)}function GT(i,e){i.uniform4iv(this.addr,e)}function HT(i,e){i.uniform1uiv(this.addr,e)}function WT(i,e){i.uniform2uiv(this.addr,e)}function XT(i,e){i.uniform3uiv(this.addr,e)}function qT(i,e){i.uniform4uiv(this.addr,e)}function YT(i,e,t){let n=this.cache,s=e.length,r=Hd(t,s);jt(n,r)||(i.uniform1iv(this.addr,r),Qt(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Cm:o=Tx;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function ZT(i,e,t){let n=this.cache,s=e.length,r=Hd(t,s);jt(n,r)||(i.uniform1iv(this.addr,r),Qt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||wx,r[o])}function $T(i,e,t){let n=this.cache,s=e.length,r=Hd(t,s);jt(n,r)||(i.uniform1iv(this.addr,r),Qt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Ex,r[o])}function JT(i,e,t){let n=this.cache,s=e.length,r=Hd(t,s);jt(n,r)||(i.uniform1iv(this.addr,r),Qt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Ax,r[o])}function KT(i){switch(i){case 5126:return DT;case 35664:return LT;case 35665:return NT;case 35666:return UT;case 35674:return OT;case 35675:return FT;case 35676:return BT;case 5124:case 35670:return zT;case 35667:case 35671:return VT;case 35668:case 35672:return kT;case 35669:case 35673:return GT;case 5125:return HT;case 36294:return WT;case 36295:return XT;case 36296:return qT;case 35678:case 36198:case 36298:case 36306:case 35682:return YT;case 35679:case 36299:case 36307:return ZT;case 35680:case 36300:case 36308:case 36293:return $T;case 36289:case 36303:case 36311:case 36292:return JT}}var Rm=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=PT(t.type)}},Im=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=KT(t.type)}},Pm=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},wm=/(\w+)(\])?(\[|\.)?/g;function hx(i,e){i.seq.push(e),i.map[e.id]=e}function jT(i,e,t){let n=i.name,s=n.length;for(wm.lastIndex=0;;){let r=wm.exec(n),o=wm.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){hx(t,c===void 0?new Rm(a,i,e):new Im(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new Pm(a),hx(t,d)),t=d}}}var ea=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);jT(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function ux(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var QT=37297,eA=0;function tA(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var dx=new rt;function nA(i){mt._getMatrix(dx,mt.workingColorSpace,i);let e=`mat3( ${dx.elements.map(t=>t.toFixed(4))} )`;switch(mt.getTransfer(i)){case ao:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return ve("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function fx(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+tA(i.getShaderSource(e),a)}else return r}function iA(i,e){let t=nA(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var sA={[Md]:"Linear",[Td]:"Reinhard",[Ad]:"Cineon",[wd]:"ACESFilmic",[Cd]:"AgX",[Rd]:"Neutral",[Ed]:"Custom"};function rA(i,e){let t=sA[e];return t===void 0?(ve("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var kd=new R;function oA(){mt.getLuminanceCoefficients(kd);let i=kd.x.toFixed(4),e=kd.y.toFixed(4),t=kd.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function aA(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Jc).join(`
`)}function lA(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function cA(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Jc(i){return i!==""}function px(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mx(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var hA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dm(i){return i.replace(hA,dA)}var uA=new Map;function dA(i,e){let t=ht[e];if(t===void 0){let n=uA.get(e);if(n!==void 0)t=ht[n],ve('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Dm(t)}var fA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gx(i){return i.replace(fA,pA)}function pA(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function _x(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var mA={[Vo]:"SHADOWMAP_TYPE_PCF",[xr]:"SHADOWMAP_TYPE_VSM"};function gA(i){return mA[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var _A={[yi]:"ENVMAP_TYPE_CUBE",[is]:"ENVMAP_TYPE_CUBE",[vr]:"ENVMAP_TYPE_CUBE_UV"};function xA(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":_A[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var vA={[is]:"ENVMAP_MODE_REFRACTION"};function yA(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":vA[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var bA={[Go]:"ENVMAP_BLENDING_MULTIPLY",[Jp]:"ENVMAP_BLENDING_MIX",[Kp]:"ENVMAP_BLENDING_ADD"};function SA(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":bA[i.combine]||"ENVMAP_BLENDING_NONE"}function MA(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function TA(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=gA(t),c=xA(t),h=yA(t),d=SA(t),u=MA(t),f=aA(t),p=lA(r),_=s.createProgram(),m,g,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Jc).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Jc).join(`
`),g.length>0&&(g+=`
`)):(m=[_x(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jc).join(`
`),g=[_x(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qn?"#define TONE_MAPPING":"",t.toneMapping!==Qn?ht.tonemapping_pars_fragment:"",t.toneMapping!==Qn?rA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,iA("linearToOutputTexel",t.outputColorSpace),oA(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Jc).join(`
`)),o=Dm(o),o=px(o,t),o=mx(o,t),a=Dm(a),a=px(a,t),a=mx(a,t),o=gx(o),a=gx(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===Bd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let S=b+m+o,x=b+g+a,A=ux(s,s.VERTEX_SHADER,S),M=ux(s,s.FRAGMENT_SHADER,x);s.attachShader(_,A),s.attachShader(_,M),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(D){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(_)||"",q=s.getShaderInfoLog(A)||"",Y=s.getShaderInfoLog(M)||"",U=L.trim(),k=q.trim(),G=Y.trim(),K=!0,V=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,A,M);else{let re=fx(s,A,"vertex"),le=fx(s,M,"fragment");ke("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+U+`
`+re+`
`+le)}else U!==""?ve("WebGLProgram: Program Info Log:",U):(k===""||G==="")&&(V=!1);V&&(D.diagnostics={runnable:K,programLog:U,vertexShader:{log:k,prefix:m},fragmentShader:{log:G,prefix:g}})}s.deleteShader(A),s.deleteShader(M),y=new ea(s,_),w=cA(s,_)}let y;this.getUniforms=function(){return y===void 0&&C(this),y};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(_,QT)),I},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=eA++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=M,this}var AA=0,Lm=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Nm(e),t.set(e,n)),n}},Nm=class{constructor(e){this.id=AA++,this.code=e,this.usedTimes=0}};function wA(i){return i===rs||i===Ko||i===jo}function EA(i,e,t,n,s,r){let o=new ar,a=new Lm,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return l.add(y),y===0?"uv":`uv${y}`}function _(y,w,I,D,L,q){let Y=D.fog,U=L.geometry,k=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?D.environment:null,G=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,K=e.get(y.envMap||k,G),V=K&&K.mapping===vr?K.image.height:null,re=f[y.type];y.precision!==null&&(u=n.getMaxPrecision(y.precision),u!==y.precision&&ve("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));let le=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,me=le!==void 0?le.length:0,tt=0;U.morphAttributes.position!==void 0&&(tt=1),U.morphAttributes.normal!==void 0&&(tt=2),U.morphAttributes.color!==void 0&&(tt=3);let pt,je,X,de;if(re){let Be=Si[re];pt=Be.vertexShader,je=Be.fragmentShader}else{pt=y.vertexShader,je=y.fragmentShader;let Be=a.getVertexShaderStage(y),qe=a.getFragmentShaderStage(y);a.update(y,Be,qe),X=Be.id,de=qe.id}let se=i.getRenderTarget(),fe=i.state.buffers.depth.getReversed(),ze=L.isInstancedMesh===!0,Le=L.isBatchedMesh===!0,De=!!y.map,Me=!!y.matcap,Q=!!K,ie=!!y.aoMap,j=!!y.lightMap,he=!!y.bumpMap&&y.wireframe===!1,ue=!!y.normalMap,Ce=!!y.displacementMap,Re=!!y.emissiveMap,Ne=!!y.metalnessMap,Ve=!!y.roughnessMap,P=y.anisotropy>0,$e=y.clearcoat>0,Ue=y.dispersion>0,E=y.iridescence>0,v=y.sheen>0,O=y.transmission>0,z=P&&!!y.anisotropyMap,$=$e&&!!y.clearcoatMap,ce=$e&&!!y.clearcoatNormalMap,pe=$e&&!!y.clearcoatRoughnessMap,J=E&&!!y.iridescenceMap,ee=E&&!!y.iridescenceThicknessMap,ge=v&&!!y.sheenColorMap,He=v&&!!y.sheenRoughnessMap,Se=!!y.specularMap,ye=!!y.specularColorMap,We=!!y.specularIntensityMap,Je=O&&!!y.transmissionMap,Ze=O&&!!y.thicknessMap,N=!!y.gradientMap,_e=!!y.alphaMap,te=y.alphaTest>0,xe=!!y.alphaHash,Ae=!!y.extensions,oe=Qn;y.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(oe=i.toneMapping);let Ie={shaderID:re,shaderType:y.type,shaderName:y.name,vertexShader:pt,fragmentShader:je,defines:y.defines,customVertexShaderID:X,customFragmentShaderID:de,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:Le,batchingColor:Le&&L._colorsTexture!==null,instancing:ze,instancingColor:ze&&L.instanceColor!==null,instancingMorph:ze&&L.morphTexture!==null,outputColorSpace:se===null?i.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:mt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:De,matcap:Me,envMap:Q,envMapMode:Q&&K.mapping,envMapCubeUVHeight:V,aoMap:ie,lightMap:j,bumpMap:he,normalMap:ue,displacementMap:Ce,emissiveMap:Re,normalMapObjectSpace:ue&&y.normalMapType===im,normalMapTangentSpace:ue&&y.normalMapType===Di,packedNormalMap:ue&&y.normalMapType===Di&&wA(y.normalMap.format),metalnessMap:Ne,roughnessMap:Ve,anisotropy:P,anisotropyMap:z,clearcoat:$e,clearcoatMap:$,clearcoatNormalMap:ce,clearcoatRoughnessMap:pe,dispersion:Ue,iridescence:E,iridescenceMap:J,iridescenceThicknessMap:ee,sheen:v,sheenColorMap:ge,sheenRoughnessMap:He,specularMap:Se,specularColorMap:ye,specularIntensityMap:We,transmission:O,transmissionMap:Je,thicknessMap:Ze,gradientMap:N,opaque:y.transparent===!1&&y.blending===Ms&&y.alphaToCoverage===!1,alphaMap:_e,alphaTest:te,alphaHash:xe,combine:y.combine,mapUv:De&&p(y.map.channel),aoMapUv:ie&&p(y.aoMap.channel),lightMapUv:j&&p(y.lightMap.channel),bumpMapUv:he&&p(y.bumpMap.channel),normalMapUv:ue&&p(y.normalMap.channel),displacementMapUv:Ce&&p(y.displacementMap.channel),emissiveMapUv:Re&&p(y.emissiveMap.channel),metalnessMapUv:Ne&&p(y.metalnessMap.channel),roughnessMapUv:Ve&&p(y.roughnessMap.channel),anisotropyMapUv:z&&p(y.anisotropyMap.channel),clearcoatMapUv:$&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:ce&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:He&&p(y.sheenRoughnessMap.channel),specularMapUv:Se&&p(y.specularMap.channel),specularColorMapUv:ye&&p(y.specularColorMap.channel),specularIntensityMapUv:We&&p(y.specularIntensityMap.channel),transmissionMapUv:Je&&p(y.transmissionMap.channel),thicknessMapUv:Ze&&p(y.thicknessMap.channel),alphaMapUv:_e&&p(y.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(ue||P),vertexNormals:!!U.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!U.attributes.uv&&(De||_e),fog:!!Y,useFog:y.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||U.attributes.normal===void 0&&ue===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:fe,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:tt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:q.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:oe,decodeVideoTexture:De&&y.map.isVideoTexture===!0&&mt.getTransfer(y.map.colorSpace)===vt,decodeVideoTextureEmissive:Re&&y.emissiveMap.isVideoTexture===!0&&mt.getTransfer(y.emissiveMap.colorSpace)===vt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===vi,flipSided:y.side===xn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ae&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ae&&y.extensions.multiDraw===!0||Le)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ie.vertexUv1s=l.has(1),Ie.vertexUv2s=l.has(2),Ie.vertexUv3s=l.has(3),l.clear(),Ie}function m(y){let w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(let I in y.defines)w.push(I),w.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(g(w,y),b(w,y),w.push(i.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function g(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function b(y,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function S(y){let w=f[y.type],I;if(w){let D=Si[w];I=Ns.clone(D.uniforms)}else I=y.uniforms;return I}function x(y,w){let I=h.get(w);return I!==void 0?++I.usedTimes:(I=new TA(i,w,y,s),c.push(I),h.set(w,I)),I}function A(y){if(--y.usedTimes===0){let w=c.indexOf(y);c[w]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function M(y){a.remove(y)}function C(){a.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:S,acquireProgram:x,releaseProgram:A,releaseShaderCache:M,programs:c,dispose:C}}function CA(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function RA(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function xx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function vx(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,p,_,m,g){let b=i[e];return b===void 0?(b={id:u.id,object:u,geometry:f,material:p,materialVariant:o(u),groupOrder:_,renderOrder:u.renderOrder,z:m,group:g},i[e]=b):(b.id=u.id,b.object=u,b.geometry=f,b.material=p,b.materialVariant=o(u),b.groupOrder=_,b.renderOrder=u.renderOrder,b.z=m,b.group=g),e++,b}function l(u,f,p,_,m,g){let b=a(u,f,p,_,m,g);p.transmission>0?n.push(b):p.transparent===!0?s.push(b):t.push(b)}function c(u,f,p,_,m,g){let b=a(u,f,p,_,m,g);p.transmission>0?n.unshift(b):p.transparent===!0?s.unshift(b):t.unshift(b)}function h(u,f,p){t.length>1&&t.sort(u||RA),n.length>1&&n.sort(f||xx),s.length>1&&s.sort(f||xx),p&&(t.reverse(),n.reverse(),s.reverse())}function d(){for(let u=e,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function IA(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new vx,i.set(n,[o])):s>=r.length?(o=new vx,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function PA(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new be};break;case"SpotLight":t={position:new R,direction:new R,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new be,groundColor:new be};break;case"RectAreaLight":t={color:new be,position:new R,halfWidth:new R,halfHeight:new R};break}return i[e.id]=t,t}}}function DA(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var LA=0;function NA(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function UA(i){let e=new PA,t=DA(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);let s=new R,r=new nt,o=new nt;function a(c){let h=0,d=0,u=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,p=0,_=0,m=0,g=0,b=0,S=0,x=0,A=0,M=0,C=0;c.sort(NA);for(let w=0,I=c.length;w<I;w++){let D=c[w],L=D.color,q=D.intensity,Y=D.distance,U=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===rs?U=D.shadow.map.texture:U=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=L.r*q,d+=L.g*q,u+=L.b*q;else if(D.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(D.sh.coefficients[k],q);C++}else if(D.isDirectionalLight){let k=e.get(D);if(k.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let G=D.shadow,K=t.get(D);K.shadowIntensity=G.intensity,K.shadowBias=G.bias,K.shadowNormalBias=G.normalBias,K.shadowRadius=G.radius,K.shadowMapSize=G.mapSize,n.directionalShadow[f]=K,n.directionalShadowMap[f]=U,n.directionalShadowMatrix[f]=D.shadow.matrix,b++}n.directional[f]=k,f++}else if(D.isSpotLight){let k=e.get(D);k.position.setFromMatrixPosition(D.matrixWorld),k.color.copy(L).multiplyScalar(q),k.distance=Y,k.coneCos=Math.cos(D.angle),k.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),k.decay=D.decay,n.spot[_]=k;let G=D.shadow;if(D.map&&(n.spotLightMap[A]=D.map,A++,G.updateMatrices(D),D.castShadow&&M++),n.spotLightMatrix[_]=G.matrix,D.castShadow){let K=t.get(D);K.shadowIntensity=G.intensity,K.shadowBias=G.bias,K.shadowNormalBias=G.normalBias,K.shadowRadius=G.radius,K.shadowMapSize=G.mapSize,n.spotShadow[_]=K,n.spotShadowMap[_]=U,x++}_++}else if(D.isRectAreaLight){let k=e.get(D);k.color.copy(L).multiplyScalar(q),k.halfWidth.set(D.width*.5,0,0),k.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=k,m++}else if(D.isPointLight){let k=e.get(D);if(k.color.copy(D.color).multiplyScalar(D.intensity),k.distance=D.distance,k.decay=D.decay,D.castShadow){let G=D.shadow,K=t.get(D);K.shadowIntensity=G.intensity,K.shadowBias=G.bias,K.shadowNormalBias=G.normalBias,K.shadowRadius=G.radius,K.shadowMapSize=G.mapSize,K.shadowCameraNear=G.camera.near,K.shadowCameraFar=G.camera.far,n.pointShadow[p]=K,n.pointShadowMap[p]=U,n.pointShadowMatrix[p]=D.shadow.matrix,S++}n.point[p]=k,p++}else if(D.isHemisphereLight){let k=e.get(D);k.skyColor.copy(D.color).multiplyScalar(q),k.groundColor.copy(D.groundColor).multiplyScalar(q),n.hemi[g]=k,g++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Te.LTC_FLOAT_1,n.rectAreaLTC2=Te.LTC_FLOAT_2):(n.rectAreaLTC1=Te.LTC_HALF_1,n.rectAreaLTC2=Te.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let y=n.hash;(y.directionalLength!==f||y.pointLength!==p||y.spotLength!==_||y.rectAreaLength!==m||y.hemiLength!==g||y.numDirectionalShadows!==b||y.numPointShadows!==S||y.numSpotShadows!==x||y.numSpotMaps!==A||y.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=p,n.hemi.length=g,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=x+A-M,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=C,y.directionalLength=f,y.pointLength=p,y.spotLength=_,y.rectAreaLength=m,y.hemiLength=g,y.numDirectionalShadows=b,y.numPointShadows=S,y.numSpotShadows=x,y.numSpotMaps=A,y.numLightProbes=C,n.version=LA++)}function l(c,h){let d=0,u=0,f=0,p=0,_=0,m=h.matrixWorldInverse;for(let g=0,b=c.length;g<b;g++){let S=c[g];if(S.isDirectionalLight){let x=n.directional[d];x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(S.isSpotLight){let x=n.spot[f];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(S.isRectAreaLight){let x=n.rectArea[p];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),p++}else if(S.isPointLight){let x=n.point[u];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),u++}else if(S.isHemisphereLight){let x=n.hemi[_];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function yx(i){let e=new UA(i),t=[],n=[],s=[];function r(u){d.camera=u,t.length=0,n.length=0,s.length=0}function o(u){t.push(u)}function a(u){n.push(u)}function l(u){s.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}let d={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function OA(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new yx(i),e.set(s,[a])):r>=o.length?(a=new yx(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var FA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,BA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,zA=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],VA=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],bx=new nt,$c=new R,Em=new R;function kA(i,e,t){let n=new Ei,s=new ne,r=new ne,o=new Mt,a=new Po,l=new Do,c={},h=t.maxTextureSize,d={[wi]:xn,[xn]:wi,[vi]:vi},u=new Lt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:FA,fragmentShader:BA}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new it;p.setAttribute("position",new yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Pt(p,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vo;let g=this.type;this.render=function(M,C,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;this.type===Pp&&(ve("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Vo);let w=i.getRenderTarget(),I=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),L=i.state;L.setBlending(Hn),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let q=g!==this.type;q&&C.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(U=>U.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,U=M.length;Y<U;Y++){let k=M[Y],G=k.shadow;if(G===void 0){ve("WebGLShadowMap:",k,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let K=G.getFrameExtents();s.multiply(K),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/K.x),s.x=r.x*K.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/K.y),s.y=r.y*K.y,G.mapSize.y=r.y));let V=i.state.buffers.depth.getReversed();if(G.camera._reversedDepth=V,G.map===null||q===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===xr){if(k.isPointLight){ve("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Bt(s.x,s.y,{format:rs,type:cn,minFilter:It,magFilter:It,generateMipmaps:!1}),G.map.texture.name=k.name+".shadowMap",G.map.depthTexture=new Ci(s.x,s.y,gn),G.map.depthTexture.name=k.name+".shadowMapDepth",G.map.depthTexture.format=gi,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Ot,G.map.depthTexture.magFilter=Ot}else k.isPointLight?(G.map=new jc(s.x),G.map.depthTexture=new cl(s.x,Wn)):(G.map=new Bt(s.x,s.y),G.map.depthTexture=new Ci(s.x,s.y,Wn)),G.map.depthTexture.name=k.name+".shadowMap",G.map.depthTexture.format=gi,this.type===Vo?(G.map.depthTexture.compareFunction=V?Yc:qc,G.map.depthTexture.minFilter=It,G.map.depthTexture.magFilter=It):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Ot,G.map.depthTexture.magFilter=Ot);G.camera.updateProjectionMatrix()}let re=G.map.isWebGLCubeRenderTarget?6:1;for(let le=0;le<re;le++){if(G.map.isWebGLCubeRenderTarget)i.setRenderTarget(G.map,le),i.clear();else{le===0&&(i.setRenderTarget(G.map),i.clear());let me=G.getViewport(le);o.set(r.x*me.x,r.y*me.y,r.x*me.z,r.y*me.w),L.viewport(o)}if(k.isPointLight){let me=G.camera,tt=G.matrix,pt=k.distance||me.far;pt!==me.far&&(me.far=pt,me.updateProjectionMatrix()),$c.setFromMatrixPosition(k.matrixWorld),me.position.copy($c),Em.copy(me.position),Em.add(zA[le]),me.up.copy(VA[le]),me.lookAt(Em),me.updateMatrixWorld(),tt.makeTranslation(-$c.x,-$c.y,-$c.z),bx.multiplyMatrices(me.projectionMatrix,me.matrixWorldInverse),G._frustum.setFromProjectionMatrix(bx,me.coordinateSystem,me.reversedDepth)}else G.updateMatrices(k);n=G.getFrustum(),x(C,y,G.camera,k,this.type)}G.isPointLightShadow!==!0&&this.type===xr&&b(G,y),G.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(w,I,D)};function b(M,C){let y=e.update(_);u.defines.VSM_SAMPLES!==M.blurSamples&&(u.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Bt(s.x,s.y,{format:rs,type:cn})),u.uniforms.shadow_pass.value=M.map.depthTexture,u.uniforms.resolution.value=M.mapSize,u.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(C,null,y,u,_,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(C,null,y,f,_,null)}function S(M,C,y,w){let I=null,D=y.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(D!==void 0)I=D;else if(I=y.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let L=I.uuid,q=C.uuid,Y=c[L];Y===void 0&&(Y={},c[L]=Y);let U=Y[q];U===void 0&&(U=I.clone(),Y[q]=U,C.addEventListener("dispose",A)),I=U}if(I.visible=C.visible,I.wireframe=C.wireframe,w===xr?I.side=C.shadowSide!==null?C.shadowSide:C.side:I.side=C.shadowSide!==null?C.shadowSide:d[C.side],I.alphaMap=C.alphaMap,I.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,I.map=C.map,I.clipShadows=C.clipShadows,I.clippingPlanes=C.clippingPlanes,I.clipIntersection=C.clipIntersection,I.displacementMap=C.displacementMap,I.displacementScale=C.displacementScale,I.displacementBias=C.displacementBias,I.wireframeLinewidth=C.wireframeLinewidth,I.linewidth=C.linewidth,y.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let L=i.properties.get(I);L.light=y}return I}function x(M,C,y,w,I){if(M.visible===!1)return;if(M.layers.test(C.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&I===xr)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,M.matrixWorld);let q=e.update(M),Y=M.material;if(Array.isArray(Y)){let U=q.groups;for(let k=0,G=U.length;k<G;k++){let K=U[k],V=Y[K.materialIndex];if(V&&V.visible){let re=S(M,V,w,I);M.onBeforeShadow(i,M,C,y,q,re,K),i.renderBufferDirect(y,null,q,re,M,K),M.onAfterShadow(i,M,C,y,q,re,K)}}}else if(Y.visible){let U=S(M,Y,w,I);M.onBeforeShadow(i,M,C,y,q,U,null),i.renderBufferDirect(y,null,q,U,M,null),M.onAfterShadow(i,M,C,y,q,U,null)}}let L=M.children;for(let q=0,Y=L.length;q<Y;q++)x(L[q],C,y,w,I)}function A(M){M.target.removeEventListener("dispose",A);for(let y in c){let w=c[y],I=M.target.uuid;I in w&&(w[I].dispose(),delete w[I])}}}function GA(i,e){function t(){let N=!1,_e=new Mt,te=null,xe=new Mt(0,0,0,0);return{setMask:function(Ae){te!==Ae&&!N&&(i.colorMask(Ae,Ae,Ae,Ae),te=Ae)},setLocked:function(Ae){N=Ae},setClear:function(Ae,oe,Ie,Be,qe){qe===!0&&(Ae*=Be,oe*=Be,Ie*=Be),_e.set(Ae,oe,Ie,Be),xe.equals(_e)===!1&&(i.clearColor(Ae,oe,Ie,Be),xe.copy(_e))},reset:function(){N=!1,te=null,xe.set(-1,0,0,0)}}}function n(){let N=!1,_e=!1,te=null,xe=null,Ae=null;return{setReversed:function(oe){if(_e!==oe){let Ie=e.get("EXT_clip_control");oe?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),_e=oe;let Be=Ae;Ae=null,this.setClear(Be)}},getReversed:function(){return _e},setTest:function(oe){oe?se(i.DEPTH_TEST):fe(i.DEPTH_TEST)},setMask:function(oe){te!==oe&&!N&&(i.depthMask(oe),te=oe)},setFunc:function(oe){if(_e&&(oe=H_[oe]),xe!==oe){switch(oe){case ka:i.depthFunc(i.NEVER);break;case Ga:i.depthFunc(i.ALWAYS);break;case Ha:i.depthFunc(i.LESS);break;case Ts:i.depthFunc(i.LEQUAL);break;case Wa:i.depthFunc(i.EQUAL);break;case Xa:i.depthFunc(i.GEQUAL);break;case qa:i.depthFunc(i.GREATER);break;case Ya:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}xe=oe}},setLocked:function(oe){N=oe},setClear:function(oe){Ae!==oe&&(Ae=oe,_e&&(oe=1-oe),i.clearDepth(oe))},reset:function(){N=!1,te=null,xe=null,Ae=null,_e=!1}}}function s(){let N=!1,_e=null,te=null,xe=null,Ae=null,oe=null,Ie=null,Be=null,qe=null;return{setTest:function(at){N||(at?se(i.STENCIL_TEST):fe(i.STENCIL_TEST))},setMask:function(at){_e!==at&&!N&&(i.stencilMask(at),_e=at)},setFunc:function(at,li,On){(te!==at||xe!==li||Ae!==On)&&(i.stencilFunc(at,li,On),te=at,xe=li,Ae=On)},setOp:function(at,li,On){(oe!==at||Ie!==li||Be!==On)&&(i.stencilOp(at,li,On),oe=at,Ie=li,Be=On)},setLocked:function(at){N=at},setClear:function(at){qe!==at&&(i.clearStencil(at),qe=at)},reset:function(){N=!1,_e=null,te=null,xe=null,Ae=null,oe=null,Ie=null,Be=null,qe=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,p=[],_=null,m=!1,g=null,b=null,S=null,x=null,A=null,M=null,C=null,y=new be(0,0,0),w=0,I=!1,D=null,L=null,q=null,Y=null,U=null,k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,K=0,V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(V)[1]),G=K>=1):V.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),G=K>=2);let re=null,le={},me=i.getParameter(i.SCISSOR_BOX),tt=i.getParameter(i.VIEWPORT),pt=new Mt().fromArray(me),je=new Mt().fromArray(tt);function X(N,_e,te,xe){let Ae=new Uint8Array(4),oe=i.createTexture();i.bindTexture(N,oe),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ie=0;Ie<te;Ie++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(_e,0,i.RGBA,1,1,xe,0,i.RGBA,i.UNSIGNED_BYTE,Ae):i.texImage2D(_e+Ie,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ae);return oe}let de={};de[i.TEXTURE_2D]=X(i.TEXTURE_2D,i.TEXTURE_2D,1),de[i.TEXTURE_CUBE_MAP]=X(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[i.TEXTURE_2D_ARRAY]=X(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),de[i.TEXTURE_3D]=X(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),se(i.DEPTH_TEST),o.setFunc(Ts),he(!1),ue(yd),se(i.CULL_FACE),ie(Hn);function se(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function fe(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function ze(N,_e){return u[N]!==_e?(i.bindFramebuffer(N,_e),u[N]=_e,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=_e),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=_e),!0):!1}function Le(N,_e){let te=p,xe=!1;if(N){te=f.get(_e),te===void 0&&(te=[],f.set(_e,te));let Ae=N.textures;if(te.length!==Ae.length||te[0]!==i.COLOR_ATTACHMENT0){for(let oe=0,Ie=Ae.length;oe<Ie;oe++)te[oe]=i.COLOR_ATTACHMENT0+oe;te.length=Ae.length,xe=!0}}else te[0]!==i.BACK&&(te[0]=i.BACK,xe=!0);xe&&i.drawBuffers(te)}function De(N){return _!==N?(i.useProgram(N),_=N,!0):!1}let Me={[ji]:i.FUNC_ADD,[Lp]:i.FUNC_SUBTRACT,[Np]:i.FUNC_REVERSE_SUBTRACT};Me[Up]=i.MIN,Me[Op]=i.MAX;let Q={[Fp]:i.ZERO,[Bp]:i.ONE,[zp]:i.SRC_COLOR,[za]:i.SRC_ALPHA,[Xp]:i.SRC_ALPHA_SATURATE,[Hp]:i.DST_COLOR,[kp]:i.DST_ALPHA,[Vp]:i.ONE_MINUS_SRC_COLOR,[Va]:i.ONE_MINUS_SRC_ALPHA,[Wp]:i.ONE_MINUS_DST_COLOR,[Gp]:i.ONE_MINUS_DST_ALPHA,[qp]:i.CONSTANT_COLOR,[Yp]:i.ONE_MINUS_CONSTANT_COLOR,[Zp]:i.CONSTANT_ALPHA,[$p]:i.ONE_MINUS_CONSTANT_ALPHA};function ie(N,_e,te,xe,Ae,oe,Ie,Be,qe,at){if(N===Hn){m===!0&&(fe(i.BLEND),m=!1);return}if(m===!1&&(se(i.BLEND),m=!0),N!==Dp){if(N!==g||at!==I){if((b!==ji||A!==ji)&&(i.blendEquation(i.FUNC_ADD),b=ji,A=ji),at)switch(N){case Ms:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ko:i.blendFunc(i.ONE,i.ONE);break;case bd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Sd:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ke("WebGLState: Invalid blending: ",N);break}else switch(N){case Ms:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ko:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case bd:ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Sd:ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ke("WebGLState: Invalid blending: ",N);break}S=null,x=null,M=null,C=null,y.set(0,0,0),w=0,g=N,I=at}return}Ae=Ae||_e,oe=oe||te,Ie=Ie||xe,(_e!==b||Ae!==A)&&(i.blendEquationSeparate(Me[_e],Me[Ae]),b=_e,A=Ae),(te!==S||xe!==x||oe!==M||Ie!==C)&&(i.blendFuncSeparate(Q[te],Q[xe],Q[oe],Q[Ie]),S=te,x=xe,M=oe,C=Ie),(Be.equals(y)===!1||qe!==w)&&(i.blendColor(Be.r,Be.g,Be.b,qe),y.copy(Be),w=qe),g=N,I=!1}function j(N,_e){N.side===vi?fe(i.CULL_FACE):se(i.CULL_FACE);let te=N.side===xn;_e&&(te=!te),he(te),N.blending===Ms&&N.transparent===!1?ie(Hn):ie(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let xe=N.stencilWrite;a.setTest(xe),xe&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Re(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?se(i.SAMPLE_ALPHA_TO_COVERAGE):fe(i.SAMPLE_ALPHA_TO_COVERAGE)}function he(N){D!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),D=N)}function ue(N){N!==Rp?(se(i.CULL_FACE),N!==L&&(N===yd?i.cullFace(i.BACK):N===Ip?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):fe(i.CULL_FACE),L=N}function Ce(N){N!==q&&(G&&i.lineWidth(N),q=N)}function Re(N,_e,te){N?(se(i.POLYGON_OFFSET_FILL),(Y!==_e||U!==te)&&(Y=_e,U=te,o.getReversed()&&(_e=-_e),i.polygonOffset(_e,te))):fe(i.POLYGON_OFFSET_FILL)}function Ne(N){N?se(i.SCISSOR_TEST):fe(i.SCISSOR_TEST)}function Ve(N){N===void 0&&(N=i.TEXTURE0+k-1),re!==N&&(i.activeTexture(N),re=N)}function P(N,_e,te){te===void 0&&(re===null?te=i.TEXTURE0+k-1:te=re);let xe=le[te];xe===void 0&&(xe={type:void 0,texture:void 0},le[te]=xe),(xe.type!==N||xe.texture!==_e)&&(re!==te&&(i.activeTexture(te),re=te),i.bindTexture(N,_e||de[N]),xe.type=N,xe.texture=_e)}function $e(){let N=le[re];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Ue(){try{i.compressedTexImage2D(...arguments)}catch(N){ke("WebGLState:",N)}}function E(){try{i.compressedTexImage3D(...arguments)}catch(N){ke("WebGLState:",N)}}function v(){try{i.texSubImage2D(...arguments)}catch(N){ke("WebGLState:",N)}}function O(){try{i.texSubImage3D(...arguments)}catch(N){ke("WebGLState:",N)}}function z(){try{i.compressedTexSubImage2D(...arguments)}catch(N){ke("WebGLState:",N)}}function $(){try{i.compressedTexSubImage3D(...arguments)}catch(N){ke("WebGLState:",N)}}function ce(){try{i.texStorage2D(...arguments)}catch(N){ke("WebGLState:",N)}}function pe(){try{i.texStorage3D(...arguments)}catch(N){ke("WebGLState:",N)}}function J(){try{i.texImage2D(...arguments)}catch(N){ke("WebGLState:",N)}}function ee(){try{i.texImage3D(...arguments)}catch(N){ke("WebGLState:",N)}}function ge(N){return d[N]!==void 0?d[N]:i.getParameter(N)}function He(N,_e){d[N]!==_e&&(i.pixelStorei(N,_e),d[N]=_e)}function Se(N){pt.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),pt.copy(N))}function ye(N){je.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),je.copy(N))}function We(N,_e){let te=c.get(_e);te===void 0&&(te=new WeakMap,c.set(_e,te));let xe=te.get(N);xe===void 0&&(xe=i.getUniformBlockIndex(_e,N.name),te.set(N,xe))}function Je(N,_e){let xe=c.get(_e).get(N);l.get(_e)!==xe&&(i.uniformBlockBinding(_e,xe,N.__bindingPointIndex),l.set(_e,xe))}function Ze(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},re=null,le={},u={},f=new WeakMap,p=[],_=null,m=!1,g=null,b=null,S=null,x=null,A=null,M=null,C=null,y=new be(0,0,0),w=0,I=!1,D=null,L=null,q=null,Y=null,U=null,pt.set(0,0,i.canvas.width,i.canvas.height),je.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:se,disable:fe,bindFramebuffer:ze,drawBuffers:Le,useProgram:De,setBlending:ie,setMaterial:j,setFlipSided:he,setCullFace:ue,setLineWidth:Ce,setPolygonOffset:Re,setScissorTest:Ne,activeTexture:Ve,bindTexture:P,unbindTexture:$e,compressedTexImage2D:Ue,compressedTexImage3D:E,texImage2D:J,texImage3D:ee,pixelStorei:He,getParameter:ge,updateUBOMapping:We,uniformBlockBinding:Je,texStorage2D:ce,texStorage3D:pe,texSubImage2D:v,texSubImage3D:O,compressedTexSubImage2D:z,compressedTexSubImage3D:$,scissor:Se,viewport:ye,reset:Ze}}function HA(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ne,h=new WeakMap,d=new Set,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(E,v){return p?new OffscreenCanvas(E,v):co("canvas")}function m(E,v,O){let z=1,$=Ue(E);if(($.width>O||$.height>O)&&(z=O/Math.max($.width,$.height)),z<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let ce=Math.floor(z*$.width),pe=Math.floor(z*$.height);u===void 0&&(u=_(ce,pe));let J=v?_(ce,pe):u;return J.width=ce,J.height=pe,J.getContext("2d").drawImage(E,0,0,ce,pe),ve("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+ce+"x"+pe+")."),J}else return"data"in E&&ve("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),E;return E}function g(E){return E.generateMipmaps}function b(E){i.generateMipmap(E)}function S(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(E,v,O,z,$,ce=!1){if(E!==null){if(i[E]!==void 0)return i[E];ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let pe;z&&(pe=e.get("EXT_texture_norm16"),pe||ve("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=v;if(v===i.RED&&(O===i.FLOAT&&(J=i.R32F),O===i.HALF_FLOAT&&(J=i.R16F),O===i.UNSIGNED_BYTE&&(J=i.R8),O===i.UNSIGNED_SHORT&&pe&&(J=pe.R16_EXT),O===i.SHORT&&pe&&(J=pe.R16_SNORM_EXT)),v===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(J=i.R8UI),O===i.UNSIGNED_SHORT&&(J=i.R16UI),O===i.UNSIGNED_INT&&(J=i.R32UI),O===i.BYTE&&(J=i.R8I),O===i.SHORT&&(J=i.R16I),O===i.INT&&(J=i.R32I)),v===i.RG&&(O===i.FLOAT&&(J=i.RG32F),O===i.HALF_FLOAT&&(J=i.RG16F),O===i.UNSIGNED_BYTE&&(J=i.RG8),O===i.UNSIGNED_SHORT&&pe&&(J=pe.RG16_EXT),O===i.SHORT&&pe&&(J=pe.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(J=i.RG8UI),O===i.UNSIGNED_SHORT&&(J=i.RG16UI),O===i.UNSIGNED_INT&&(J=i.RG32UI),O===i.BYTE&&(J=i.RG8I),O===i.SHORT&&(J=i.RG16I),O===i.INT&&(J=i.RG32I)),v===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(J=i.RGB8UI),O===i.UNSIGNED_SHORT&&(J=i.RGB16UI),O===i.UNSIGNED_INT&&(J=i.RGB32UI),O===i.BYTE&&(J=i.RGB8I),O===i.SHORT&&(J=i.RGB16I),O===i.INT&&(J=i.RGB32I)),v===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),O===i.UNSIGNED_INT&&(J=i.RGBA32UI),O===i.BYTE&&(J=i.RGBA8I),O===i.SHORT&&(J=i.RGBA16I),O===i.INT&&(J=i.RGBA32I)),v===i.RGB&&(O===i.UNSIGNED_SHORT&&pe&&(J=pe.RGB16_EXT),O===i.SHORT&&pe&&(J=pe.RGB16_SNORM_EXT),O===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),v===i.RGBA){let ee=ce?ao:mt.getTransfer($);O===i.FLOAT&&(J=i.RGBA32F),O===i.HALF_FLOAT&&(J=i.RGBA16F),O===i.UNSIGNED_BYTE&&(J=ee===vt?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT&&pe&&(J=pe.RGBA16_EXT),O===i.SHORT&&pe&&(J=pe.RGBA16_SNORM_EXT),O===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function A(E,v){let O;return E?v===null||v===Wn||v===Sr?O=i.DEPTH24_STENCIL8:v===gn?O=i.DEPTH32F_STENCIL8:v===br&&(O=i.DEPTH24_STENCIL8,ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Wn||v===Sr?O=i.DEPTH_COMPONENT24:v===gn?O=i.DEPTH_COMPONENT32F:v===br&&(O=i.DEPTH_COMPONENT16),O}function M(E,v){return g(E)===!0||E.isFramebufferTexture&&E.minFilter!==Ot&&E.minFilter!==It?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function C(E){let v=E.target;v.removeEventListener("dispose",C),w(v),v.isVideoTexture&&h.delete(v),v.isHTMLTexture&&d.delete(v)}function y(E){let v=E.target;v.removeEventListener("dispose",y),D(v)}function w(E){let v=n.get(E);if(v.__webglInit===void 0)return;let O=E.source,z=f.get(O);if(z){let $=z[v.__cacheKey];$.usedTimes--,$.usedTimes===0&&I(E),Object.keys(z).length===0&&f.delete(O)}n.remove(E)}function I(E){let v=n.get(E);i.deleteTexture(v.__webglTexture);let O=E.source,z=f.get(O);delete z[v.__cacheKey],o.memory.textures--}function D(E){let v=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(v.__webglFramebuffer[z]))for(let $=0;$<v.__webglFramebuffer[z].length;$++)i.deleteFramebuffer(v.__webglFramebuffer[z][$]);else i.deleteFramebuffer(v.__webglFramebuffer[z]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[z])}else{if(Array.isArray(v.__webglFramebuffer))for(let z=0;z<v.__webglFramebuffer.length;z++)i.deleteFramebuffer(v.__webglFramebuffer[z]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let z=0;z<v.__webglColorRenderbuffer.length;z++)v.__webglColorRenderbuffer[z]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[z]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let O=E.textures;for(let z=0,$=O.length;z<$;z++){let ce=n.get(O[z]);ce.__webglTexture&&(i.deleteTexture(ce.__webglTexture),o.memory.textures--),n.remove(O[z])}n.remove(E)}let L=0;function q(){L=0}function Y(){return L}function U(E){L=E}function k(){let E=L;return E>=s.maxTextures&&ve("WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),L+=1,E}function G(E){let v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function K(E,v){let O=n.get(E);if(E.isVideoTexture&&P(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&O.__version!==E.version){let z=E.image;if(z===null)ve("WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)ve("WebGLRenderer: Texture marked for update but image is incomplete");else{fe(O,E,v);return}}else E.isExternalTexture&&(O.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+v)}function V(E,v){let O=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){fe(O,E,v);return}else E.isExternalTexture&&(O.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+v)}function re(E,v){let O=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){fe(O,E,v);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+v)}function le(E,v){let O=n.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&O.__version!==E.version){ze(O,E,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+v)}let me={[no]:i.REPEAT,[An]:i.CLAMP_TO_EDGE,[io]:i.MIRRORED_REPEAT},tt={[Ot]:i.NEAREST,[Id]:i.NEAREST_MIPMAP_NEAREST,[yr]:i.NEAREST_MIPMAP_LINEAR,[It]:i.LINEAR,[Xo]:i.LINEAR_MIPMAP_NEAREST,[bi]:i.LINEAR_MIPMAP_LINEAR},pt={[sm]:i.NEVER,[cm]:i.ALWAYS,[rm]:i.LESS,[qc]:i.LEQUAL,[om]:i.EQUAL,[Yc]:i.GEQUAL,[am]:i.GREATER,[lm]:i.NOTEQUAL};function je(E,v){if(v.type===gn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===It||v.magFilter===Xo||v.magFilter===yr||v.magFilter===bi||v.minFilter===It||v.minFilter===Xo||v.minFilter===yr||v.minFilter===bi)&&ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,me[v.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,me[v.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,me[v.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,tt[v.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,tt[v.minFilter]),v.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,pt[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ot||v.minFilter!==yr&&v.minFilter!==bi||v.type===gn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function X(E,v){let O=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",C));let z=v.source,$=f.get(z);$===void 0&&($={},f.set(z,$));let ce=G(v);if(ce!==E.__cacheKey){$[ce]===void 0&&($[ce]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),$[ce].usedTimes++;let pe=$[E.__cacheKey];pe!==void 0&&($[E.__cacheKey].usedTimes--,pe.usedTimes===0&&I(v)),E.__cacheKey=ce,E.__webglTexture=$[ce].texture}return O}function de(E,v,O){return Math.floor(Math.floor(E/O)/v)}function se(E,v,O,z){let ce=E.updateRanges;if(ce.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,O,z,v.data);else{ce.sort((He,Se)=>He.start-Se.start);let pe=0;for(let He=1;He<ce.length;He++){let Se=ce[pe],ye=ce[He],We=Se.start+Se.count,Je=de(ye.start,v.width,4),Ze=de(Se.start,v.width,4);ye.start<=We+1&&Je===Ze&&de(ye.start+ye.count-1,v.width,4)===Je?Se.count=Math.max(Se.count,ye.start+ye.count-Se.start):(++pe,ce[pe]=ye)}ce.length=pe+1;let J=t.getParameter(i.UNPACK_ROW_LENGTH),ee=t.getParameter(i.UNPACK_SKIP_PIXELS),ge=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let He=0,Se=ce.length;He<Se;He++){let ye=ce[He],We=Math.floor(ye.start/4),Je=Math.ceil(ye.count/4),Ze=We%v.width,N=Math.floor(We/v.width),_e=Je,te=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ze),t.pixelStorei(i.UNPACK_SKIP_ROWS,N),t.texSubImage2D(i.TEXTURE_2D,0,Ze,N,_e,te,O,z,v.data)}E.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,J),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(i.UNPACK_SKIP_ROWS,ge)}}function fe(E,v,O){let z=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(z=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(z=i.TEXTURE_3D);let $=X(E,v),ce=v.source;t.bindTexture(z,E.__webglTexture,i.TEXTURE0+O);let pe=n.get(ce);if(ce.version!==pe.__version||$===!0){if(t.activeTexture(i.TEXTURE0+O),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let te=mt.getPrimaries(mt.workingColorSpace),xe=v.colorSpace===Li?null:mt.getPrimaries(v.colorSpace),Ae=v.colorSpace===Li||te===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae)}t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let ee=m(v.image,!1,s.maxTextureSize);ee=$e(v,ee);let ge=r.convert(v.format,v.colorSpace),He=r.convert(v.type),Se=x(v.internalFormat,ge,He,v.normalized,v.colorSpace,v.isVideoTexture);je(z,v);let ye,We=v.mipmaps,Je=v.isVideoTexture!==!0,Ze=pe.__version===void 0||$===!0,N=ce.dataReady,_e=M(v,ee);if(v.isDepthTexture)Se=A(v.format===ss,v.type),Ze&&(Je?t.texStorage2D(i.TEXTURE_2D,1,Se,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,Se,ee.width,ee.height,0,ge,He,null));else if(v.isDataTexture)if(We.length>0){Je&&Ze&&t.texStorage2D(i.TEXTURE_2D,_e,Se,We[0].width,We[0].height);for(let te=0,xe=We.length;te<xe;te++)ye=We[te],Je?N&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,ye.width,ye.height,ge,He,ye.data):t.texImage2D(i.TEXTURE_2D,te,Se,ye.width,ye.height,0,ge,He,ye.data);v.generateMipmaps=!1}else Je?(Ze&&t.texStorage2D(i.TEXTURE_2D,_e,Se,ee.width,ee.height),N&&se(v,ee,ge,He)):t.texImage2D(i.TEXTURE_2D,0,Se,ee.width,ee.height,0,ge,He,ee.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Je&&Ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,Se,We[0].width,We[0].height,ee.depth);for(let te=0,xe=We.length;te<xe;te++)if(ye=We[te],v.format!==_n)if(ge!==null)if(Je){if(N)if(v.layerUpdates.size>0){let Ae=zd(ye.width,ye.height,v.format,v.type);for(let oe of v.layerUpdates){let Ie=ye.data.subarray(oe*Ae/ye.data.BYTES_PER_ELEMENT,(oe+1)*Ae/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,oe,ye.width,ye.height,1,ge,Ie)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,ye.width,ye.height,ee.depth,ge,ye.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,te,Se,ye.width,ye.height,ee.depth,0,ye.data,0,0);else ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Je?N&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,ye.width,ye.height,ee.depth,ge,He,ye.data):t.texImage3D(i.TEXTURE_2D_ARRAY,te,Se,ye.width,ye.height,ee.depth,0,ge,He,ye.data)}else{Je&&Ze&&t.texStorage2D(i.TEXTURE_2D,_e,Se,We[0].width,We[0].height);for(let te=0,xe=We.length;te<xe;te++)ye=We[te],v.format!==_n?ge!==null?Je?N&&t.compressedTexSubImage2D(i.TEXTURE_2D,te,0,0,ye.width,ye.height,ge,ye.data):t.compressedTexImage2D(i.TEXTURE_2D,te,Se,ye.width,ye.height,0,ye.data):ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?N&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,ye.width,ye.height,ge,He,ye.data):t.texImage2D(i.TEXTURE_2D,te,Se,ye.width,ye.height,0,ge,He,ye.data)}else if(v.isDataArrayTexture)if(Je){if(Ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,Se,ee.width,ee.height,ee.depth),N)if(v.layerUpdates.size>0){let te=zd(ee.width,ee.height,v.format,v.type);for(let xe of v.layerUpdates){let Ae=ee.data.subarray(xe*te/ee.data.BYTES_PER_ELEMENT,(xe+1)*te/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,xe,ee.width,ee.height,1,ge,He,Ae)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ge,He,ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Se,ee.width,ee.height,ee.depth,0,ge,He,ee.data);else if(v.isData3DTexture)Je?(Ze&&t.texStorage3D(i.TEXTURE_3D,_e,Se,ee.width,ee.height,ee.depth),N&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ge,He,ee.data)):t.texImage3D(i.TEXTURE_3D,0,Se,ee.width,ee.height,ee.depth,0,ge,He,ee.data);else if(v.isFramebufferTexture){if(Ze)if(Je)t.texStorage2D(i.TEXTURE_2D,_e,Se,ee.width,ee.height);else{let te=ee.width,xe=ee.height;for(let Ae=0;Ae<_e;Ae++)t.texImage2D(i.TEXTURE_2D,Ae,Se,te,xe,0,ge,He,null),te>>=1,xe>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let te=i.canvas;if(te.hasAttribute("layoutsubtree")||te.setAttribute("layoutsubtree","true"),ee.parentNode!==te){te.appendChild(ee),d.add(v),te.onpaint=xe=>{let Ae=xe.changedElements;for(let oe of d)Ae.includes(oe.image)&&(oe.needsUpdate=!0)},te.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ee);else{let Ae=i.RGBA,oe=i.RGBA,Ie=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ae,oe,Ie,ee)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(We.length>0){if(Je&&Ze){let te=Ue(We[0]);t.texStorage2D(i.TEXTURE_2D,_e,Se,te.width,te.height)}for(let te=0,xe=We.length;te<xe;te++)ye=We[te],Je?N&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,ge,He,ye):t.texImage2D(i.TEXTURE_2D,te,Se,ge,He,ye);v.generateMipmaps=!1}else if(Je){if(Ze){let te=Ue(ee);t.texStorage2D(i.TEXTURE_2D,_e,Se,te.width,te.height)}N&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ge,He,ee)}else t.texImage2D(i.TEXTURE_2D,0,Se,ge,He,ee);g(v)&&b(z),pe.__version=ce.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function ze(E,v,O){if(v.image.length!==6)return;let z=X(E,v),$=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+O);let ce=n.get($);if($.version!==ce.__version||z===!0){t.activeTexture(i.TEXTURE0+O);let pe=mt.getPrimaries(mt.workingColorSpace),J=v.colorSpace===Li?null:mt.getPrimaries(v.colorSpace),ee=v.colorSpace===Li||pe===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let ge=v.isCompressedTexture||v.image[0].isCompressedTexture,He=v.image[0]&&v.image[0].isDataTexture,Se=[];for(let oe=0;oe<6;oe++)!ge&&!He?Se[oe]=m(v.image[oe],!0,s.maxCubemapSize):Se[oe]=He?v.image[oe].image:v.image[oe],Se[oe]=$e(v,Se[oe]);let ye=Se[0],We=r.convert(v.format,v.colorSpace),Je=r.convert(v.type),Ze=x(v.internalFormat,We,Je,v.normalized,v.colorSpace),N=v.isVideoTexture!==!0,_e=ce.__version===void 0||z===!0,te=$.dataReady,xe=M(v,ye);je(i.TEXTURE_CUBE_MAP,v);let Ae;if(ge){N&&_e&&t.texStorage2D(i.TEXTURE_CUBE_MAP,xe,Ze,ye.width,ye.height);for(let oe=0;oe<6;oe++){Ae=Se[oe].mipmaps;for(let Ie=0;Ie<Ae.length;Ie++){let Be=Ae[Ie];v.format!==_n?We!==null?N?te&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ie,0,0,Be.width,Be.height,We,Be.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ie,Ze,Be.width,Be.height,0,Be.data):ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ie,0,0,Be.width,Be.height,We,Je,Be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ie,Ze,Be.width,Be.height,0,We,Je,Be.data)}}}else{if(Ae=v.mipmaps,N&&_e){Ae.length>0&&xe++;let oe=Ue(Se[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,xe,Ze,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(He){N?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Se[oe].width,Se[oe].height,We,Je,Se[oe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Ze,Se[oe].width,Se[oe].height,0,We,Je,Se[oe].data);for(let Ie=0;Ie<Ae.length;Ie++){let qe=Ae[Ie].image[oe].image;N?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ie+1,0,0,qe.width,qe.height,We,Je,qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ie+1,Ze,qe.width,qe.height,0,We,Je,qe.data)}}else{N?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,We,Je,Se[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Ze,We,Je,Se[oe]);for(let Ie=0;Ie<Ae.length;Ie++){let Be=Ae[Ie];N?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ie+1,0,0,We,Je,Be.image[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ie+1,Ze,We,Je,Be.image[oe])}}}g(v)&&b(i.TEXTURE_CUBE_MAP),ce.__version=$.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function Le(E,v,O,z,$,ce){let pe=r.convert(O.format,O.colorSpace),J=r.convert(O.type),ee=x(O.internalFormat,pe,J,O.normalized,O.colorSpace),ge=n.get(v),He=n.get(O);if(He.__renderTarget=v,!ge.__hasExternalTextures){let Se=Math.max(1,v.width>>ce),ye=Math.max(1,v.height>>ce);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?t.texImage3D($,ce,ee,Se,ye,v.depth,0,pe,J,null):t.texImage2D($,ce,ee,Se,ye,0,pe,J,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),Ve(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,z,$,He.__webglTexture,0,Ne(v)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,z,$,He.__webglTexture,ce),t.bindFramebuffer(i.FRAMEBUFFER,null)}function De(E,v,O){if(i.bindRenderbuffer(i.RENDERBUFFER,E),v.depthBuffer){let z=v.depthTexture,$=z&&z.isDepthTexture?z.type:null,ce=A(v.stencilBuffer,$),pe=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ve(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ne(v),ce,v.width,v.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ne(v),ce,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ce,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,pe,i.RENDERBUFFER,E)}else{let z=v.textures;for(let $=0;$<z.length;$++){let ce=z[$],pe=r.convert(ce.format,ce.colorSpace),J=r.convert(ce.type),ee=x(ce.internalFormat,pe,J,ce.normalized,ce.colorSpace);Ve(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ne(v),ee,v.width,v.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ne(v),ee,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ee,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Me(E,v,O){let z=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let $=n.get(v.depthTexture);if($.__renderTarget=v,(!$.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),z){if($.__webglInit===void 0&&($.__webglInit=!0,v.depthTexture.addEventListener("dispose",C)),$.__webglTexture===void 0){$.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),je(i.TEXTURE_CUBE_MAP,v.depthTexture);let ge=r.convert(v.depthTexture.format),He=r.convert(v.depthTexture.type),Se;v.depthTexture.format===gi?Se=i.DEPTH_COMPONENT24:v.depthTexture.format===ss&&(Se=i.DEPTH24_STENCIL8);for(let ye=0;ye<6;ye++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,Se,v.width,v.height,0,ge,He,null)}}else K(v.depthTexture,0);let ce=$.__webglTexture,pe=Ne(v),J=z?i.TEXTURE_CUBE_MAP_POSITIVE_X+O:i.TEXTURE_2D,ee=v.depthTexture.format===ss?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===gi)Ve(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,J,ce,0,pe):i.framebufferTexture2D(i.FRAMEBUFFER,ee,J,ce,0);else if(v.depthTexture.format===ss)Ve(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,J,ce,0,pe):i.framebufferTexture2D(i.FRAMEBUFFER,ee,J,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Q(E){let v=n.get(E),O=E.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==E.depthTexture){let z=E.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),z){let $=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,z.removeEventListener("dispose",$)};z.addEventListener("dispose",$),v.__depthDisposeCallback=$}v.__boundDepthTexture=z}if(E.depthTexture&&!v.__autoAllocateDepthBuffer)if(O)for(let z=0;z<6;z++)Me(v.__webglFramebuffer[z],E,z);else{let z=E.texture.mipmaps;z&&z.length>0?Me(v.__webglFramebuffer[0],E,0):Me(v.__webglFramebuffer,E,0)}else if(O){v.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[z]),v.__webglDepthbuffer[z]===void 0)v.__webglDepthbuffer[z]=i.createRenderbuffer(),De(v.__webglDepthbuffer[z],E,!1);else{let $=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=v.__webglDepthbuffer[z];i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,ce)}}else{let z=E.texture.mipmaps;if(z&&z.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),De(v.__webglDepthbuffer,E,!1);else{let $=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,ce)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ie(E,v,O){let z=n.get(E);v!==void 0&&Le(z.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Q(E)}function j(E){let v=E.texture,O=n.get(E),z=n.get(v);E.addEventListener("dispose",y);let $=E.textures,ce=E.isWebGLCubeRenderTarget===!0,pe=$.length>1;if(pe||(z.__webglTexture===void 0&&(z.__webglTexture=i.createTexture()),z.__version=v.version,o.memory.textures++),ce){O.__webglFramebuffer=[];for(let J=0;J<6;J++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[J]=[];for(let ee=0;ee<v.mipmaps.length;ee++)O.__webglFramebuffer[J][ee]=i.createFramebuffer()}else O.__webglFramebuffer[J]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let J=0;J<v.mipmaps.length;J++)O.__webglFramebuffer[J]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(pe)for(let J=0,ee=$.length;J<ee;J++){let ge=n.get($[J]);ge.__webglTexture===void 0&&(ge.__webglTexture=i.createTexture(),o.memory.textures++)}if(E.samples>0&&Ve(E)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let J=0;J<$.length;J++){let ee=$[J];O.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[J]);let ge=r.convert(ee.format,ee.colorSpace),He=r.convert(ee.type),Se=x(ee.internalFormat,ge,He,ee.normalized,ee.colorSpace,E.isXRRenderTarget===!0),ye=Ne(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,Se,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,O.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),De(O.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ce){t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture),je(i.TEXTURE_CUBE_MAP,v);for(let J=0;J<6;J++)if(v.mipmaps&&v.mipmaps.length>0)for(let ee=0;ee<v.mipmaps.length;ee++)Le(O.__webglFramebuffer[J][ee],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ee);else Le(O.__webglFramebuffer[J],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);g(v)&&b(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let J=0,ee=$.length;J<ee;J++){let ge=$[J],He=n.get(ge),Se=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Se=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Se,He.__webglTexture),je(Se,ge),Le(O.__webglFramebuffer,E,ge,i.COLOR_ATTACHMENT0+J,Se,0),g(ge)&&b(Se)}t.unbindTexture()}else{let J=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(J=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,z.__webglTexture),je(J,v),v.mipmaps&&v.mipmaps.length>0)for(let ee=0;ee<v.mipmaps.length;ee++)Le(O.__webglFramebuffer[ee],E,v,i.COLOR_ATTACHMENT0,J,ee);else Le(O.__webglFramebuffer,E,v,i.COLOR_ATTACHMENT0,J,0);g(v)&&b(J),t.unbindTexture()}E.depthBuffer&&Q(E)}function he(E){let v=E.textures;for(let O=0,z=v.length;O<z;O++){let $=v[O];if(g($)){let ce=S(E),pe=n.get($).__webglTexture;t.bindTexture(ce,pe),b(ce),t.unbindTexture()}}}let ue=[],Ce=[];function Re(E){if(E.samples>0){if(Ve(E)===!1){let v=E.textures,O=E.width,z=E.height,$=i.COLOR_BUFFER_BIT,ce=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=n.get(E),J=v.length>1;if(J)for(let ge=0;ge<v.length;ge++)t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer);let ee=E.texture.mipmaps;ee&&ee.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let ge=0;ge<v.length;ge++){if(E.resolveDepthBuffer&&(E.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pe.__webglColorRenderbuffer[ge]);let He=n.get(v[ge]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,He,0)}i.blitFramebuffer(0,0,O,z,0,0,O,z,$,i.NEAREST),l===!0&&(ue.length=0,Ce.length=0,ue.push(i.COLOR_ATTACHMENT0+ge),E.depthBuffer&&E.resolveDepthBuffer===!1&&(ue.push(ce),Ce.push(ce),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ce)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ue))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let ge=0;ge<v.length;ge++){t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,pe.__webglColorRenderbuffer[ge]);let He=n.get(v[ge]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,He,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){let v=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Ne(E){return Math.min(s.maxSamples,E.samples)}function Ve(E){let v=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function P(E){let v=o.render.frame;h.get(E)!==v&&(h.set(E,v),E.update())}function $e(E,v){let O=E.colorSpace,z=E.format,$=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||O!==oo&&O!==Li&&(mt.getTransfer(O)===vt?(z!==_n||$!==Cn)&&ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ke("WebGLTextures: Unsupported texture color space:",O)),v}function Ue(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=q,this.getTextureUnits=Y,this.setTextureUnits=U,this.setTexture2D=K,this.setTexture2DArray=V,this.setTexture3D=re,this.setTextureCube=le,this.rebindTextures=ie,this.setupRenderTarget=j,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=Re,this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=Ve,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Cx(i,e){function t(n,s=Li){let r,o=mt.getTransfer(s);if(n===Cn)return i.UNSIGNED_BYTE;if(n===hc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===uc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ld)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Nd)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Pd)return i.BYTE;if(n===Dd)return i.SHORT;if(n===br)return i.UNSIGNED_SHORT;if(n===cc)return i.INT;if(n===Wn)return i.UNSIGNED_INT;if(n===gn)return i.FLOAT;if(n===cn)return i.HALF_FLOAT;if(n===Ud)return i.ALPHA;if(n===Od)return i.RGB;if(n===_n)return i.RGBA;if(n===gi)return i.DEPTH_COMPONENT;if(n===ss)return i.DEPTH_STENCIL;if(n===dc)return i.RED;if(n===qo)return i.RED_INTEGER;if(n===rs)return i.RG;if(n===fc)return i.RG_INTEGER;if(n===pc)return i.RGBA_INTEGER;if(n===Yo||n===Zo||n===$o||n===Jo)if(o===vt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Yo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===$o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Yo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Zo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===$o)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Jo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===mc||n===gc||n===_c||n===xc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===mc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===gc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_c)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===xc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===vc||n===yc||n===bc||n===Sc||n===Mc||n===Ko||n===Tc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===vc||n===yc)return o===vt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===bc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Sc)return r.COMPRESSED_R11_EAC;if(n===Mc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ko)return r.COMPRESSED_RG11_EAC;if(n===Tc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ac||n===wc||n===Ec||n===Cc||n===Rc||n===Ic||n===Pc||n===Dc||n===Lc||n===Nc||n===Uc||n===Oc||n===Fc||n===Bc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ac)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===wc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ec)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Cc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Rc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ic)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Pc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Dc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Lc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Nc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Uc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Oc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Bc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===zc||n===Vc||n===kc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===zc)return o===vt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Vc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===kc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Gc||n===Hc||n===jo||n===Wc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Gc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Hc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===jo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Wc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Sr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var WA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,XA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Um=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new xo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Lt({vertexShader:WA,fragmentShader:XA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pt(new fr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Om=class extends Dn{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,p=null,_=typeof XRWebGLBinding<"u",m=new Um,g={},b=t.getContextAttributes(),S=null,x=null,A=[],M=[],C=new ne,y=null,w=new qt;w.viewport=new Mt;let I=new qt;I.viewport=new Mt;let D=[w,I],L=new nc,q=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let de=A[X];return de===void 0&&(de=new lr,A[X]=de),de.getTargetRaySpace()},this.getControllerGrip=function(X){let de=A[X];return de===void 0&&(de=new lr,A[X]=de),de.getGripSpace()},this.getHand=function(X){let de=A[X];return de===void 0&&(de=new lr,A[X]=de),de.getHandSpace()};function U(X){let de=M.indexOf(X.inputSource);if(de===-1)return;let se=A[de];se!==void 0&&(se.update(X.inputSource,X.frame,c||o),se.dispatchEvent({type:X.type,data:X.inputSource}))}function k(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",G);for(let X=0;X<A.length;X++){let de=M[X];de!==null&&(M[X]=null,A[X].disconnect(de))}q=null,Y=null,m.reset();for(let X in g)delete g[X];e.setRenderTarget(S),f=null,u=null,d=null,s=null,x=null,je.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",k),s.addEventListener("inputsourceschange",G),b.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,fe=null,ze=null;b.depth&&(ze=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=b.stencil?ss:gi,fe=b.stencil?Sr:Wn);let Le={colorFormat:t.RGBA8,depthFormat:ze,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Le),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),x=new Bt(u.textureWidth,u.textureHeight,{format:_n,type:Cn,depthTexture:new Ci(u.textureWidth,u.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{let se={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,se),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Bt(f.framebufferWidth,f.framebufferHeight,{format:_n,type:Cn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),je.setContext(s),je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function G(X){for(let de=0;de<X.removed.length;de++){let se=X.removed[de],fe=M.indexOf(se);fe>=0&&(M[fe]=null,A[fe].disconnect(se))}for(let de=0;de<X.added.length;de++){let se=X.added[de],fe=M.indexOf(se);if(fe===-1){for(let Le=0;Le<A.length;Le++)if(Le>=M.length){M.push(se),fe=Le;break}else if(M[Le]===null){M[Le]=se,fe=Le;break}if(fe===-1)break}let ze=A[fe];ze&&ze.connect(se)}}let K=new R,V=new R;function re(X,de,se){K.setFromMatrixPosition(de.matrixWorld),V.setFromMatrixPosition(se.matrixWorld);let fe=K.distanceTo(V),ze=de.projectionMatrix.elements,Le=se.projectionMatrix.elements,De=ze[14]/(ze[10]-1),Me=ze[14]/(ze[10]+1),Q=(ze[9]+1)/ze[5],ie=(ze[9]-1)/ze[5],j=(ze[8]-1)/ze[0],he=(Le[8]+1)/Le[0],ue=De*j,Ce=De*he,Re=fe/(-j+he),Ne=Re*-j;if(de.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Ne),X.translateZ(Re),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),ze[10]===-1)X.projectionMatrix.copy(de.projectionMatrix),X.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{let Ve=De+Re,P=Me+Re,$e=ue-Ne,Ue=Ce+(fe-Ne),E=Q*Me/P*Ve,v=ie*Me/P*Ve;X.projectionMatrix.makePerspective($e,Ue,E,v,Ve,P),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function le(X,de){de===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(de.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let de=X.near,se=X.far;m.texture!==null&&(m.depthNear>0&&(de=m.depthNear),m.depthFar>0&&(se=m.depthFar)),L.near=I.near=w.near=de,L.far=I.far=w.far=se,(q!==L.near||Y!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),q=L.near,Y=L.far),L.layers.mask=X.layers.mask|6,w.layers.mask=L.layers.mask&-5,I.layers.mask=L.layers.mask&-3;let fe=X.parent,ze=L.cameras;le(L,fe);for(let Le=0;Le<ze.length;Le++)le(ze[Le],fe);ze.length===2?re(L,w,I):L.projectionMatrix.copy(w.projectionMatrix),me(X,L,fe)};function me(X,de,se){se===null?X.matrix.copy(de.matrixWorld):(X.matrix.copy(se.matrixWorld),X.matrix.invert(),X.matrix.multiply(de.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(de.projectionMatrix),X.projectionMatrixInverse.copy(de.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=sr*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(X){l=X,u!==null&&(u.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function(X){return g[X]};let tt=null;function pt(X,de){if(h=de.getViewerPose(c||o),p=de,h!==null){let se=h.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let fe=!1;se.length!==L.cameras.length&&(L.cameras.length=0,fe=!0);for(let Me=0;Me<se.length;Me++){let Q=se[Me],ie=null;if(f!==null)ie=f.getViewport(Q);else{let he=d.getViewSubImage(u,Q);ie=he.viewport,Me===0&&(e.setRenderTargetTextures(x,he.colorTexture,he.depthStencilTexture),e.setRenderTarget(x))}let j=D[Me];j===void 0&&(j=new qt,j.layers.enable(Me),j.viewport=new Mt,D[Me]=j),j.matrix.fromArray(Q.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(Q.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(ie.x,ie.y,ie.width,ie.height),Me===0&&(L.matrix.copy(j.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),fe===!0&&L.cameras.push(j)}let ze=s.enabledFeatures;if(ze&&ze.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let Me=d.getDepthInformation(se[0]);Me&&Me.isValid&&Me.texture&&m.init(Me,s.renderState)}if(ze&&ze.includes("camera-access")&&_){e.state.unbindTexture(),d=n.getBinding();for(let Me=0;Me<se.length;Me++){let Q=se[Me].camera;if(Q){let ie=g[Q];ie||(ie=new xo,g[Q]=ie);let j=d.getCameraImage(Q);ie.sourceTexture=j}}}}for(let se=0;se<A.length;se++){let fe=M[se],ze=A[se];fe!==null&&ze!==void 0&&ze.update(fe,de,c||o)}tt&&tt(X,de),de.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:de}),p=null}let je=new Sx;je.setAnimationLoop(pt),this.setAnimationLoop=function(X){tt=X},this.dispose=function(){}}},qA=new nt,Rx=new rt;Rx.set(-1,0,0,0,1,0,0,0,1);function YA(i,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,fm(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,b,S,x){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),d(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),u(m,g),g.isMeshPhysicalMaterial&&f(m,g,x)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),_(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,b,S):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===xn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===xn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let b=e.get(g),S=b.envMap,x=b.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(qA.makeRotationFromEuler(x)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Rx),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,b,S){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*b,m.scale.value=S*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function u(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,b){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===xn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){let b=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ZA(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,A){let M=A.program;n.uniformBlockBinding(x,M)}function c(x,A){let M=s[x.id];M===void 0&&(m(x),M=h(x),s[x.id]=M,x.addEventListener("dispose",b));let C=A.program;n.updateUBOMapping(x,C);let y=e.render.frame;r[x.id]!==y&&(u(x),r[x.id]=y)}function h(x){let A=d();x.__bindingPointIndex=A;let M=i.createBuffer(),C=x.__size,y=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,C,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,M),M}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return ke("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){let A=s[x.id],M=x.uniforms,C=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let y=0,w=M.length;y<w;y++){let I=M[y];if(Array.isArray(I))for(let D=0,L=I.length;D<L;D++)f(I[D],y,D,C);else f(I,y,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,A,M,C){if(_(x,A,M,C)===!0){let y=x.__offset,w=x.value;if(Array.isArray(w)){let I=0;for(let D=0;D<w.length;D++){let L=w[D],q=g(L);p(L,x.__data,I),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(I+=q.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(w,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,x.__data)}}function p(x,A,M){typeof x=="number"||typeof x=="boolean"?A[0]=x:x.isMatrix3?(A[0]=x.elements[0],A[1]=x.elements[1],A[2]=x.elements[2],A[3]=0,A[4]=x.elements[3],A[5]=x.elements[4],A[6]=x.elements[5],A[7]=0,A[8]=x.elements[6],A[9]=x.elements[7],A[10]=x.elements[8],A[11]=0):ArrayBuffer.isView(x)?A.set(new x.constructor(x.buffer,x.byteOffset,A.length)):x.toArray(A,M)}function _(x,A,M,C){let y=x.value,w=A+"_"+M;if(C[w]===void 0)return typeof y=="number"||typeof y=="boolean"?C[w]=y:ArrayBuffer.isView(y)?C[w]=y.slice():C[w]=y.clone(),!0;{let I=C[w];if(typeof y=="number"||typeof y=="boolean"){if(I!==y)return C[w]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(I.equals(y)===!1)return I.copy(y),!0}}return!1}function m(x){let A=x.uniforms,M=0,C=16;for(let w=0,I=A.length;w<I;w++){let D=Array.isArray(A[w])?A[w]:[A[w]];for(let L=0,q=D.length;L<q;L++){let Y=D[L],U=Array.isArray(Y.value)?Y.value:[Y.value];for(let k=0,G=U.length;k<G;k++){let K=U[k],V=g(K),re=M%C,le=re%V.boundary,me=re+le;M+=le,me!==0&&C-me<V.storage&&(M+=C-me),Y.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=M,M+=V.storage}}}let y=M%C;return y>0&&(M+=C-y),x.__size=M,x.__cache={},this}function g(x){let A={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(A.boundary=4,A.storage=4):x.isVector2?(A.boundary=8,A.storage=8):x.isVector3||x.isColor?(A.boundary=16,A.storage=12):x.isVector4?(A.boundary=16,A.storage=16):x.isMatrix3?(A.boundary=48,A.storage=48):x.isMatrix4?(A.boundary=64,A.storage=64):x.isTexture?ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(A.boundary=16,A.storage=x.byteLength):ve("WebGLRenderer: Unsupported uniform value type.",x),A}function b(x){let A=x.target;A.removeEventListener("dispose",b);let M=o.indexOf(A.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function S(){for(let x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:S}}var $A=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ni=null;function JA(){return Ni===null&&(Ni=new wn($A,16,16,rs,cn),Ni.name="DFG_LUT",Ni.minFilter=It,Ni.magFilter=It,Ni.wrapS=An,Ni.wrapT=An,Ni.generateMipmaps=!1,Ni.needsUpdate=!0),Ni}var Fm=class{constructor(e={}){let{canvas:t=hm(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Cn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let _=f,m=new Set([pc,fc,qo]),g=new Set([Cn,Wn,br,Sr,hc,uc]),b=new Uint32Array(4),S=new Int32Array(4),x=new R,A=null,M=null,C=[],y=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,D=!1,L=null,q=null,Y=null,U=null;this._outputColorSpace=Mn;let k=0,G=0,K=null,V=-1,re=null,le=new Mt,me=new Mt,tt=null,pt=new be(0),je=0,X=t.width,de=t.height,se=1,fe=null,ze=null,Le=new Mt(0,0,X,de),De=new Mt(0,0,X,de),Me=!1,Q=new Ei,ie=!1,j=!1,he=new nt,ue=new R,Ce=new Mt,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ne=!1;function Ve(){return K===null?se:1}let P=n;function $e(T,B){return t.getContext(T,B)}try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"185"}`),t.addEventListener("webglcontextlost",qe,!1),t.addEventListener("webglcontextrestored",at,!1),t.addEventListener("webglcontextcreationerror",li,!1),P===null){let B="webgl2";if(P=$e(B,T),P===null)throw $e(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(T){throw ke("WebGLRenderer: "+T.message),T}let Ue,E,v,O,z,$,ce,pe,J,ee,ge,He,Se,ye,We,Je,Ze,N,_e,te,xe,Ae,oe;function Ie(){Ue=new sT(P),Ue.init(),xe=new Cx(P,Ue),E=new J1(P,Ue,e,xe),v=new GA(P,Ue),E.reversedDepthBuffer&&u&&v.buffers.depth.setReversed(!0),q=P.createFramebuffer(),Y=P.createFramebuffer(),U=P.createFramebuffer(),O=new aT(P),z=new CA,$=new HA(P,Ue,v,z,E,xe,O),ce=new iT(I),pe=new uS(P),Ae=new Z1(P,pe),J=new rT(P,pe,O,Ae),ee=new cT(P,J,pe,Ae,O),N=new lT(P,E,$),We=new K1(z),ge=new EA(I,ce,Ue,E,Ae,We),He=new YA(I,z),Se=new IA,ye=new OA(Ue),Ze=new Y1(I,ce,v,ee,p,l),Je=new kA(I,ee,E),oe=new ZA(P,O,E,v),_e=new $1(P,Ue,O),te=new oT(P,Ue,O),O.programs=ge.programs,I.capabilities=E,I.extensions=Ue,I.properties=z,I.renderLists=Se,I.shadowMap=Je,I.state=v,I.info=O}Ie(),_!==Cn&&(w=new uT(_,t.width,t.height,a,s,r));let Be=new Om(I,P);this.xr=Be,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let T=Ue.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Ue.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(T){T!==void 0&&(se=T,this.setSize(X,de,!1))},this.getSize=function(T){return T.set(X,de)},this.setSize=function(T,B,Z=!0){if(Be.isPresenting){ve("WebGLRenderer: Can't change size while VR device is presenting.");return}X=T,de=B,t.width=Math.floor(T*se),t.height=Math.floor(B*se),Z===!0&&(t.style.width=T+"px",t.style.height=B+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(X*se,de*se).floor()},this.setDrawingBufferSize=function(T,B,Z){X=T,de=B,se=Z,t.width=Math.floor(T*Z),t.height=Math.floor(B*Z),this.setViewport(0,0,T,B)},this.setEffects=function(T){if(_===Cn){ke("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let B=0;B<T.length;B++)if(T[B].isOutputPass===!0){ve("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(le)},this.getViewport=function(T){return T.copy(Le)},this.setViewport=function(T,B,Z,H){T.isVector4?Le.set(T.x,T.y,T.z,T.w):Le.set(T,B,Z,H),v.viewport(le.copy(Le).multiplyScalar(se).round())},this.getScissor=function(T){return T.copy(De)},this.setScissor=function(T,B,Z,H){T.isVector4?De.set(T.x,T.y,T.z,T.w):De.set(T,B,Z,H),v.scissor(me.copy(De).multiplyScalar(se).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(T){v.setScissorTest(Me=T)},this.setOpaqueSort=function(T){fe=T},this.setTransparentSort=function(T){ze=T},this.getClearColor=function(T){return T.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor(...arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha(...arguments)},this.clear=function(T=!0,B=!0,Z=!0){let H=0;if(T){let W=!1;if(K!==null){let Ee=K.texture.format;W=m.has(Ee)}if(W){let Ee=K.texture.type,Fe=g.has(Ee),we=Ze.getClearColor(),Ge=Ze.getClearAlpha(),Xe=we.r,lt=we.g,dt=we.b;Fe?(b[0]=Xe,b[1]=lt,b[2]=dt,b[3]=Ge,P.clearBufferuiv(P.COLOR,0,b)):(S[0]=Xe,S[1]=lt,S[2]=dt,S[3]=Ge,P.clearBufferiv(P.COLOR,0,S))}else H|=P.COLOR_BUFFER_BIT}B&&(H|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(H|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&P.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),L=T},this.dispose=function(){t.removeEventListener("webglcontextlost",qe,!1),t.removeEventListener("webglcontextrestored",at,!1),t.removeEventListener("webglcontextcreationerror",li,!1),Ze.dispose(),Se.dispose(),ye.dispose(),z.dispose(),ce.dispose(),ee.dispose(),Ae.dispose(),oe.dispose(),ge.dispose(),Be.dispose(),Be.removeEventListener("sessionstart",Ag),Be.removeEventListener("sessionend",wg),Hs.stop()};function qe(T){T.preventDefault(),ho("WebGLRenderer: Context Lost."),D=!0}function at(){ho("WebGLRenderer: Context Restored."),D=!1;let T=O.autoReset,B=Je.enabled,Z=Je.autoUpdate,H=Je.needsUpdate,W=Je.type;Ie(),O.autoReset=T,Je.enabled=B,Je.autoUpdate=Z,Je.needsUpdate=H,Je.type=W}function li(T){ke("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function On(T){let B=T.target;B.removeEventListener("dispose",On),cy(B)}function cy(T){hy(T),z.remove(T)}function hy(T){let B=z.get(T).programs;B!==void 0&&(B.forEach(function(Z){ge.releaseProgram(Z)}),T.isShaderMaterial&&ge.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,Z,H,W,Ee){B===null&&(B=Re);let Fe=W.isMesh&&W.matrixWorld.determinantAffine()<0,we=fy(T,B,Z,H,W);v.setMaterial(H,Fe);let Ge=Z.index,Xe=1;if(H.wireframe===!0){if(Ge=J.getWireframeAttribute(Z),Ge===void 0)return;Xe=2}let lt=Z.drawRange,dt=Z.attributes.position,Ye=lt.start*Xe,wt=(lt.start+lt.count)*Xe;Ee!==null&&(Ye=Math.max(Ye,Ee.start*Xe),wt=Math.min(wt,(Ee.start+Ee.count)*Xe)),Ge!==null?(Ye=Math.max(Ye,0),wt=Math.min(wt,Ge.count)):dt!=null&&(Ye=Math.max(Ye,0),wt=Math.min(wt,dt.count));let Vt=wt-Ye;if(Vt<0||Vt===1/0)return;Ae.setup(W,H,we,Z,Ge);let Nt,Et=_e;if(Ge!==null&&(Nt=pe.get(Ge),Et=te,Et.setIndex(Nt)),W.isMesh)H.wireframe===!0?(v.setLineWidth(H.wireframeLinewidth*Ve()),Et.setMode(P.LINES)):Et.setMode(P.TRIANGLES);else if(W.isLine){let dn=H.linewidth;dn===void 0&&(dn=1),v.setLineWidth(dn*Ve()),W.isLineSegments?Et.setMode(P.LINES):W.isLineLoop?Et.setMode(P.LINE_LOOP):Et.setMode(P.LINE_STRIP)}else W.isPoints?Et.setMode(P.POINTS):W.isSprite&&Et.setMode(P.TRIANGLES);if(W.isBatchedMesh)if(Ue.get("WEBGL_multi_draw"))Et.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let dn=W._multiDrawStarts,Oe=W._multiDrawCounts,Fn=W._multiDrawCount,_t=Ge?pe.get(Ge).bytesPerElement:1,Zn=z.get(H).currentProgram.getUniforms();for(let Ti=0;Ti<Fn;Ti++)Zn.setValue(P,"_gl_DrawID",Ti),Et.render(dn[Ti]/_t,Oe[Ti])}else if(W.isInstancedMesh)Et.renderInstances(Ye,Vt,W.count);else if(Z.isInstancedBufferGeometry){let dn=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Oe=Math.min(Z.instanceCount,dn);Et.renderInstances(Ye,Vt,Oe)}else Et.render(Ye,Vt)};function Tg(T,B,Z){T.transparent===!0&&T.side===vi&&T.forceSinglePass===!1?(T.side=xn,T.needsUpdate=!0,yh(T,B,Z),T.side=wi,T.needsUpdate=!0,yh(T,B,Z),T.side=vi):yh(T,B,Z)}this.compile=function(T,B,Z=null){Z===null&&(Z=T),M=ye.get(Z),M.init(B),y.push(M),Z.traverseVisible(function(W){W.isLight&&W.layers.test(B.layers)&&(M.pushLight(W),W.castShadow&&M.pushShadow(W))}),T!==Z&&T.traverseVisible(function(W){W.isLight&&W.layers.test(B.layers)&&(M.pushLight(W),W.castShadow&&M.pushShadow(W))}),M.setupLights();let H=new Set;return T.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let Ee=W.material;if(Ee)if(Array.isArray(Ee))for(let Fe=0;Fe<Ee.length;Fe++){let we=Ee[Fe];Tg(we,Z,W),H.add(we)}else Tg(Ee,Z,W),H.add(Ee)}),M=y.pop(),H},this.compileAsync=function(T,B,Z=null){let H=this.compile(T,B,Z);return new Promise(W=>{function Ee(){if(H.forEach(function(Fe){z.get(Fe).currentProgram.isReady()&&H.delete(Fe)}),H.size===0){W(T);return}setTimeout(Ee,10)}Ue.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let If=null;function uy(T){If&&If(T)}function Ag(){Hs.stop()}function wg(){Hs.start()}let Hs=new Sx;Hs.setAnimationLoop(uy),typeof self<"u"&&Hs.setContext(self),this.setAnimationLoop=function(T){If=T,Be.setAnimationLoop(T),T===null?Hs.stop():Hs.start()},Be.addEventListener("sessionstart",Ag),Be.addEventListener("sessionend",wg),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;L!==null&&L.renderStart(T,B);let Z=Be.enabled===!0&&Be.isPresenting===!0,H=w!==null&&(K===null||Z)&&w.begin(I,K);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Be.enabled===!0&&Be.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Be.cameraAutoUpdate===!0&&Be.updateCamera(B),B=Be.getCamera()),T.isScene===!0&&T.onBeforeRender(I,T,B,K),M=ye.get(T,y.length),M.init(B),M.state.textureUnits=$.getTextureUnits(),y.push(M),he.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Q.setFromProjectionMatrix(he,Pn,B.reversedDepth),j=this.localClippingEnabled,ie=We.init(this.clippingPlanes,j),A=Se.get(T,C.length),A.init(),C.push(A),Be.enabled===!0&&Be.isPresenting===!0){let Fe=I.xr.getDepthSensingMesh();Fe!==null&&Pf(Fe,B,-1/0,I.sortObjects)}Pf(T,B,0,I.sortObjects),A.finish(),I.sortObjects===!0&&A.sort(fe,ze,B.reversedDepth),Ne=Be.enabled===!1||Be.isPresenting===!1||Be.hasDepthSensing()===!1,Ne&&Ze.addToRenderList(A,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ie===!0&&We.beginShadows();let W=M.state.shadowsArray;if(Je.render(W,T,B),ie===!0&&We.endShadows(),(H&&w.hasRenderPass())===!1){let Fe=A.opaque,we=A.transmissive;if(M.setupLights(),B.isArrayCamera){let Ge=B.cameras;if(we.length>0)for(let Xe=0,lt=Ge.length;Xe<lt;Xe++){let dt=Ge[Xe];Cg(Fe,we,T,dt)}Ne&&Ze.render(T);for(let Xe=0,lt=Ge.length;Xe<lt;Xe++){let dt=Ge[Xe];Eg(A,T,dt,dt.viewport)}}else we.length>0&&Cg(Fe,we,T,B),Ne&&Ze.render(T),Eg(A,T,B)}K!==null&&G===0&&($.updateMultisampleRenderTarget(K),$.updateRenderTargetMipmap(K)),H&&w.end(I),T.isScene===!0&&T.onAfterRender(I,T,B),Ae.resetDefaultState(),V=-1,re=null,y.pop(),y.length>0?(M=y[y.length-1],$.setTextureUnits(M.state.textureUnits),ie===!0&&We.setGlobalState(I.clippingPlanes,M.state.camera)):M=null,C.pop(),C.length>0?A=C[C.length-1]:A=null,L!==null&&L.renderEnd()};function Pf(T,B,Z,H){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)Z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLightProbeGrid)M.pushLightProbeGrid(T);else if(T.isLight)M.pushLight(T),T.castShadow&&M.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Q.intersectsSprite(T)){H&&Ce.setFromMatrixPosition(T.matrixWorld).applyMatrix4(he);let Fe=ee.update(T),we=T.material;we.visible&&A.push(T,Fe,we,Z,Ce.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Q.intersectsObject(T))){let Fe=ee.update(T),we=T.material;if(H&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ce.copy(T.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),Ce.copy(Fe.boundingSphere.center)),Ce.applyMatrix4(T.matrixWorld).applyMatrix4(he)),Array.isArray(we)){let Ge=Fe.groups;for(let Xe=0,lt=Ge.length;Xe<lt;Xe++){let dt=Ge[Xe],Ye=we[dt.materialIndex];Ye&&Ye.visible&&A.push(T,Fe,Ye,Z,Ce.z,dt)}}else we.visible&&A.push(T,Fe,we,Z,Ce.z,null)}}let Ee=T.children;for(let Fe=0,we=Ee.length;Fe<we;Fe++)Pf(Ee[Fe],B,Z,H)}function Eg(T,B,Z,H){let{opaque:W,transmissive:Ee,transparent:Fe}=T;M.setupLightsView(Z),ie===!0&&We.setGlobalState(I.clippingPlanes,Z),H&&v.viewport(le.copy(H)),W.length>0&&vh(W,B,Z),Ee.length>0&&vh(Ee,B,Z),Fe.length>0&&vh(Fe,B,Z),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function Cg(T,B,Z,H){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[H.id]===void 0){let Ye=Ue.has("EXT_color_buffer_half_float")||Ue.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[H.id]=new Bt(1,1,{generateMipmaps:!0,type:Ye?cn:Cn,minFilter:bi,samples:Math.max(4,E.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:mt.workingColorSpace})}let Ee=M.state.transmissionRenderTarget[H.id],Fe=H.viewport||le;Ee.setSize(Fe.z*I.transmissionResolutionScale,Fe.w*I.transmissionResolutionScale);let we=I.getRenderTarget(),Ge=I.getActiveCubeFace(),Xe=I.getActiveMipmapLevel();I.setRenderTarget(Ee),I.getClearColor(pt),je=I.getClearAlpha(),je<1&&I.setClearColor(16777215,.5),I.clear(),Ne&&Ze.render(Z);let lt=I.toneMapping;I.toneMapping=Qn;let dt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),M.setupLightsView(H),ie===!0&&We.setGlobalState(I.clippingPlanes,H),vh(T,Z,H),$.updateMultisampleRenderTarget(Ee),$.updateRenderTargetMipmap(Ee),Ue.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let wt=0,Vt=B.length;wt<Vt;wt++){let Nt=B[wt],{object:Et,geometry:dn,material:Oe,group:Fn}=Nt;if(Oe.side===vi&&Et.layers.test(H.layers)){let _t=Oe.side;Oe.side=xn,Oe.needsUpdate=!0,Rg(Et,Z,H,dn,Oe,Fn),Oe.side=_t,Oe.needsUpdate=!0,Ye=!0}}Ye===!0&&($.updateMultisampleRenderTarget(Ee),$.updateRenderTargetMipmap(Ee))}I.setRenderTarget(we,Ge,Xe),I.setClearColor(pt,je),dt!==void 0&&(H.viewport=dt),I.toneMapping=lt}function vh(T,B,Z){let H=B.isScene===!0?B.overrideMaterial:null;for(let W=0,Ee=T.length;W<Ee;W++){let Fe=T[W],{object:we,geometry:Ge,group:Xe}=Fe,lt=Fe.material;lt.allowOverride===!0&&H!==null&&(lt=H),we.layers.test(Z.layers)&&Rg(we,B,Z,Ge,lt,Xe)}}function Rg(T,B,Z,H,W,Ee){T.onBeforeRender(I,B,Z,H,W,Ee),T.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),W.onBeforeRender(I,B,Z,H,T,Ee),W.transparent===!0&&W.side===vi&&W.forceSinglePass===!1?(W.side=xn,W.needsUpdate=!0,I.renderBufferDirect(Z,B,H,W,T,Ee),W.side=wi,W.needsUpdate=!0,I.renderBufferDirect(Z,B,H,W,T,Ee),W.side=vi):I.renderBufferDirect(Z,B,H,W,T,Ee),T.onAfterRender(I,B,Z,H,W,Ee)}function yh(T,B,Z){B.isScene!==!0&&(B=Re);let H=z.get(T),W=M.state.lights,Ee=M.state.shadowsArray,Fe=W.state.version,we=ge.getParameters(T,W.state,Ee,B,Z,M.state.lightProbeGridArray),Ge=ge.getProgramCacheKey(we),Xe=H.programs;H.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?B.environment:null,H.fog=B.fog;let lt=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;H.envMap=ce.get(T.envMap||H.environment,lt),H.envMapRotation=H.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,Xe===void 0&&(T.addEventListener("dispose",On),Xe=new Map,H.programs=Xe);let dt=Xe.get(Ge);if(dt!==void 0){if(H.currentProgram===dt&&H.lightsStateVersion===Fe)return Pg(T,we),dt}else we.uniforms=ge.getUniforms(T),L!==null&&T.isNodeMaterial&&L.build(T,Z,we),T.onBeforeCompile(we,I),dt=ge.acquireProgram(we,Ge),Xe.set(Ge,dt),H.uniforms=we.uniforms;let Ye=H.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ye.clippingPlanes=We.uniform),Pg(T,we),H.needsLights=my(T),H.lightsStateVersion=Fe,H.needsLights&&(Ye.ambientLightColor.value=W.state.ambient,Ye.lightProbe.value=W.state.probe,Ye.directionalLights.value=W.state.directional,Ye.directionalLightShadows.value=W.state.directionalShadow,Ye.spotLights.value=W.state.spot,Ye.spotLightShadows.value=W.state.spotShadow,Ye.rectAreaLights.value=W.state.rectArea,Ye.ltc_1.value=W.state.rectAreaLTC1,Ye.ltc_2.value=W.state.rectAreaLTC2,Ye.pointLights.value=W.state.point,Ye.pointLightShadows.value=W.state.pointShadow,Ye.hemisphereLights.value=W.state.hemi,Ye.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ye.spotLightMatrix.value=W.state.spotLightMatrix,Ye.spotLightMap.value=W.state.spotLightMap,Ye.pointShadowMatrix.value=W.state.pointShadowMatrix),H.lightProbeGrid=M.state.lightProbeGridArray.length>0,H.currentProgram=dt,H.uniformsList=null,dt}function Ig(T){if(T.uniformsList===null){let B=T.currentProgram.getUniforms();T.uniformsList=ea.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function Pg(T,B){let Z=z.get(T);Z.outputColorSpace=B.outputColorSpace,Z.batching=B.batching,Z.batchingColor=B.batchingColor,Z.instancing=B.instancing,Z.instancingColor=B.instancingColor,Z.instancingMorph=B.instancingMorph,Z.skinning=B.skinning,Z.morphTargets=B.morphTargets,Z.morphNormals=B.morphNormals,Z.morphColors=B.morphColors,Z.morphTargetsCount=B.morphTargetsCount,Z.numClippingPlanes=B.numClippingPlanes,Z.numIntersection=B.numClipIntersection,Z.vertexAlphas=B.vertexAlphas,Z.vertexTangents=B.vertexTangents,Z.toneMapping=B.toneMapping}function dy(T,B){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;x.setFromMatrixPosition(B.matrixWorld);for(let Z=0,H=T.length;Z<H;Z++){let W=T[Z];if(W.texture!==null&&W.boundingBox.containsPoint(x))return W}return null}function fy(T,B,Z,H,W){B.isScene!==!0&&(B=Re),$.resetTextureUnits();let Ee=B.fog,Fe=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?B.environment:null,we=K===null?I.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:mt.workingColorSpace,Ge=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Xe=ce.get(H.envMap||Fe,Ge),lt=H.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,dt=!!Z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ye=!!Z.morphAttributes.position,wt=!!Z.morphAttributes.normal,Vt=!!Z.morphAttributes.color,Nt=Qn;H.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Nt=I.toneMapping);let Et=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,dn=Et!==void 0?Et.length:0,Oe=z.get(H),Fn=M.state.lights;if(ie===!0&&(j===!0||T!==re)){let Rt=T===re&&H.id===V;We.setState(H,T,Rt)}let _t=!1;H.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==Fn.state.version||Oe.outputColorSpace!==we||W.isBatchedMesh&&Oe.batching===!1||!W.isBatchedMesh&&Oe.batching===!0||W.isBatchedMesh&&Oe.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Oe.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Oe.instancing===!1||!W.isInstancedMesh&&Oe.instancing===!0||W.isSkinnedMesh&&Oe.skinning===!1||!W.isSkinnedMesh&&Oe.skinning===!0||W.isInstancedMesh&&Oe.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Oe.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Oe.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Oe.instancingMorph===!1&&W.morphTexture!==null||Oe.envMap!==Xe||H.fog===!0&&Oe.fog!==Ee||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==We.numPlanes||Oe.numIntersection!==We.numIntersection)||Oe.vertexAlphas!==lt||Oe.vertexTangents!==dt||Oe.morphTargets!==Ye||Oe.morphNormals!==wt||Oe.morphColors!==Vt||Oe.toneMapping!==Nt||Oe.morphTargetsCount!==dn||!!Oe.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(_t=!0):(_t=!0,Oe.__version=H.version);let Zn=Oe.currentProgram;_t===!0&&(Zn=yh(H,B,W),L&&H.isNodeMaterial&&L.onUpdateProgram(H,Zn,Oe));let Ti=!1,hs=!1,Pr=!1,Ct=Zn.getUniforms(),kt=Oe.uniforms;if(v.useProgram(Zn.program)&&(Ti=!0,hs=!0,Pr=!0),H.id!==V&&(V=H.id,hs=!0),Oe.needsLights){let Rt=dy(M.state.lightProbeGridArray,W);Oe.lightProbeGrid!==Rt&&(Oe.lightProbeGrid=Rt,hs=!0)}if(Ti||re!==T){v.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Ct.setValue(P,"projectionMatrix",T.projectionMatrix),Ct.setValue(P,"viewMatrix",T.matrixWorldInverse);let ds=Ct.map.cameraPosition;ds!==void 0&&ds.setValue(P,ue.setFromMatrixPosition(T.matrixWorld)),E.logarithmicDepthBuffer&&Ct.setValue(P,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Ct.setValue(P,"isOrthographic",T.isOrthographicCamera===!0),re!==T&&(re=T,hs=!0,Pr=!0)}if(Oe.needsLights&&(Fn.state.directionalShadowMap.length>0&&Ct.setValue(P,"directionalShadowMap",Fn.state.directionalShadowMap,$),Fn.state.spotShadowMap.length>0&&Ct.setValue(P,"spotShadowMap",Fn.state.spotShadowMap,$),Fn.state.pointShadowMap.length>0&&Ct.setValue(P,"pointShadowMap",Fn.state.pointShadowMap,$)),W.isSkinnedMesh){Ct.setOptional(P,W,"bindMatrix"),Ct.setOptional(P,W,"bindMatrixInverse");let Rt=W.skeleton;Rt&&(Rt.boneTexture===null&&Rt.computeBoneTexture(),Ct.setValue(P,"boneTexture",Rt.boneTexture,$))}W.isBatchedMesh&&(Ct.setOptional(P,W,"batchingTexture"),Ct.setValue(P,"batchingTexture",W._matricesTexture,$),Ct.setOptional(P,W,"batchingIdTexture"),Ct.setValue(P,"batchingIdTexture",W._indirectTexture,$),Ct.setOptional(P,W,"batchingColorTexture"),W._colorsTexture!==null&&Ct.setValue(P,"batchingColorTexture",W._colorsTexture,$));let us=Z.morphAttributes;if((us.position!==void 0||us.normal!==void 0||us.color!==void 0)&&N.update(W,Z,Zn),(hs||Oe.receiveShadow!==W.receiveShadow)&&(Oe.receiveShadow=W.receiveShadow,Ct.setValue(P,"receiveShadow",W.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&B.environment!==null&&(kt.envMapIntensity.value=B.environmentIntensity),kt.dfgLUT!==void 0&&(kt.dfgLUT.value=JA()),hs){if(Ct.setValue(P,"toneMappingExposure",I.toneMappingExposure),Oe.needsLights&&py(kt,Pr),Ee&&H.fog===!0&&He.refreshFogUniforms(kt,Ee),He.refreshMaterialUniforms(kt,H,se,de,M.state.transmissionRenderTarget[T.id]),Oe.needsLights&&Oe.lightProbeGrid){let Rt=Oe.lightProbeGrid;kt.probesSH.value=Rt.texture,kt.probesMin.value.copy(Rt.boundingBox.min),kt.probesMax.value.copy(Rt.boundingBox.max),kt.probesResolution.value.copy(Rt.resolution)}ea.upload(P,Ig(Oe),kt,$)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(ea.upload(P,Ig(Oe),kt,$),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Ct.setValue(P,"center",W.center),Ct.setValue(P,"modelViewMatrix",W.modelViewMatrix),Ct.setValue(P,"normalMatrix",W.normalMatrix),Ct.setValue(P,"modelMatrix",W.matrixWorld),H.uniformsGroups!==void 0){let Rt=H.uniformsGroups;for(let ds=0,Dr=Rt.length;ds<Dr;ds++){let Dg=Rt[ds];oe.update(Dg,Zn),oe.bind(Dg,Zn)}}return Zn}function py(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function my(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(T,B,Z){let H=z.get(T);H.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),z.get(T.texture).__webglTexture=B,z.get(T.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:Z,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,B){let Z=z.get(T);Z.__webglFramebuffer=B,Z.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,Z=0){K=T,k=B,G=Z;let H=null,W=!1,Ee=!1;if(T){let we=z.get(T);if(we.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(P.FRAMEBUFFER,we.__webglFramebuffer),le.copy(T.viewport),me.copy(T.scissor),tt=T.scissorTest,v.viewport(le),v.scissor(me),v.setScissorTest(tt),V=-1;return}else if(we.__webglFramebuffer===void 0)$.setupRenderTarget(T);else if(we.__hasExternalTextures)$.rebindTextures(T,z.get(T.texture).__webglTexture,z.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let lt=T.depthTexture;if(we.__boundDepthTexture!==lt){if(lt!==null&&z.has(lt)&&(T.width!==lt.image.width||T.height!==lt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(T)}}let Ge=T.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Ee=!0);let Xe=z.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Xe[B])?H=Xe[B][Z]:H=Xe[B],W=!0):T.samples>0&&$.useMultisampledRTT(T)===!1?H=z.get(T).__webglMultisampledFramebuffer:Array.isArray(Xe)?H=Xe[Z]:H=Xe,le.copy(T.viewport),me.copy(T.scissor),tt=T.scissorTest}else le.copy(Le).multiplyScalar(se).floor(),me.copy(De).multiplyScalar(se).floor(),tt=Me;if(Z!==0&&(H=q),v.bindFramebuffer(P.FRAMEBUFFER,H)&&v.drawBuffers(T,H),v.viewport(le),v.scissor(me),v.setScissorTest(tt),W){let we=z.get(T.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+B,we.__webglTexture,Z)}else if(Ee){let we=B;for(let Ge=0;Ge<T.textures.length;Ge++){let Xe=z.get(T.textures[Ge]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Ge,Xe.__webglTexture,Z,we)}}else if(T!==null&&Z!==0){let we=z.get(T.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,we.__webglTexture,Z)}V=-1},this.readRenderTargetPixels=function(T,B,Z,H,W,Ee,Fe,we=0){if(!(T&&T.isWebGLRenderTarget)){ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=z.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Fe!==void 0&&(Ge=Ge[Fe]),Ge){v.bindFramebuffer(P.FRAMEBUFFER,Ge);try{let Xe=T.textures[we],lt=Xe.format,dt=Xe.type;if(T.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+we),!E.textureFormatReadable(lt)){ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!E.textureTypeReadable(dt)){ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-H&&Z>=0&&Z<=T.height-W&&P.readPixels(B,Z,H,W,xe.convert(lt),xe.convert(dt),Ee)}finally{let Xe=K!==null?z.get(K).__webglFramebuffer:null;v.bindFramebuffer(P.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(T,B,Z,H,W,Ee,Fe,we=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=z.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Fe!==void 0&&(Ge=Ge[Fe]),Ge)if(B>=0&&B<=T.width-H&&Z>=0&&Z<=T.height-W){v.bindFramebuffer(P.FRAMEBUFFER,Ge);let Xe=T.textures[we],lt=Xe.format,dt=Xe.type;if(T.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+we),!E.textureFormatReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!E.textureTypeReadable(dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ye=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ye),P.bufferData(P.PIXEL_PACK_BUFFER,Ee.byteLength,P.STREAM_READ),P.readPixels(B,Z,H,W,xe.convert(lt),xe.convert(dt),0);let wt=K!==null?z.get(K).__webglFramebuffer:null;v.bindFramebuffer(P.FRAMEBUFFER,wt);let Vt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await G_(P,Vt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Ye),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,Ee),P.deleteBuffer(Ye),P.deleteSync(Vt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,B=null,Z=0){let H=Math.pow(2,-Z),W=Math.floor(T.image.width*H),Ee=Math.floor(T.image.height*H),Fe=B!==null?B.x:0,we=B!==null?B.y:0;$.setTexture2D(T,0),P.copyTexSubImage2D(P.TEXTURE_2D,Z,0,0,Fe,we,W,Ee),v.unbindTexture()},this.copyTextureToTexture=function(T,B,Z=null,H=null,W=0,Ee=0){let Fe,we,Ge,Xe,lt,dt,Ye,wt,Vt,Nt=T.isCompressedTexture?T.mipmaps[Ee]:T.image;if(Z!==null)Fe=Z.max.x-Z.min.x,we=Z.max.y-Z.min.y,Ge=Z.isBox3?Z.max.z-Z.min.z:1,Xe=Z.min.x,lt=Z.min.y,dt=Z.isBox3?Z.min.z:0;else{let kt=Math.pow(2,-W);Fe=Math.floor(Nt.width*kt),we=Math.floor(Nt.height*kt),T.isDataArrayTexture?Ge=Nt.depth:T.isData3DTexture?Ge=Math.floor(Nt.depth*kt):Ge=1,Xe=0,lt=0,dt=0}H!==null?(Ye=H.x,wt=H.y,Vt=H.z):(Ye=0,wt=0,Vt=0);let Et=xe.convert(B.format),dn=xe.convert(B.type),Oe;B.isData3DTexture?($.setTexture3D(B,0),Oe=P.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?($.setTexture2DArray(B,0),Oe=P.TEXTURE_2D_ARRAY):($.setTexture2D(B,0),Oe=P.TEXTURE_2D),v.activeTexture(P.TEXTURE0),v.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,B.flipY),v.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),v.pixelStorei(P.UNPACK_ALIGNMENT,B.unpackAlignment);let Fn=v.getParameter(P.UNPACK_ROW_LENGTH),_t=v.getParameter(P.UNPACK_IMAGE_HEIGHT),Zn=v.getParameter(P.UNPACK_SKIP_PIXELS),Ti=v.getParameter(P.UNPACK_SKIP_ROWS),hs=v.getParameter(P.UNPACK_SKIP_IMAGES);v.pixelStorei(P.UNPACK_ROW_LENGTH,Nt.width),v.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Nt.height),v.pixelStorei(P.UNPACK_SKIP_PIXELS,Xe),v.pixelStorei(P.UNPACK_SKIP_ROWS,lt),v.pixelStorei(P.UNPACK_SKIP_IMAGES,dt);let Pr=T.isDataArrayTexture||T.isData3DTexture,Ct=B.isDataArrayTexture||B.isData3DTexture;if(T.isDepthTexture){let kt=z.get(T),us=z.get(B),Rt=z.get(kt.__renderTarget),ds=z.get(us.__renderTarget);v.bindFramebuffer(P.READ_FRAMEBUFFER,Rt.__webglFramebuffer),v.bindFramebuffer(P.DRAW_FRAMEBUFFER,ds.__webglFramebuffer);for(let Dr=0;Dr<Ge;Dr++)Pr&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,z.get(T).__webglTexture,W,dt+Dr),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,z.get(B).__webglTexture,Ee,Vt+Dr)),P.blitFramebuffer(Xe,lt,Fe,we,Ye,wt,Fe,we,P.DEPTH_BUFFER_BIT,P.NEAREST);v.bindFramebuffer(P.READ_FRAMEBUFFER,null),v.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(W!==0||T.isRenderTargetTexture||z.has(T)){let kt=z.get(T),us=z.get(B);v.bindFramebuffer(P.READ_FRAMEBUFFER,Y),v.bindFramebuffer(P.DRAW_FRAMEBUFFER,U);for(let Rt=0;Rt<Ge;Rt++)Pr?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,kt.__webglTexture,W,dt+Rt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,kt.__webglTexture,W),Ct?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,us.__webglTexture,Ee,Vt+Rt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,us.__webglTexture,Ee),W!==0?P.blitFramebuffer(Xe,lt,Fe,we,Ye,wt,Fe,we,P.COLOR_BUFFER_BIT,P.NEAREST):Ct?P.copyTexSubImage3D(Oe,Ee,Ye,wt,Vt+Rt,Xe,lt,Fe,we):P.copyTexSubImage2D(Oe,Ee,Ye,wt,Xe,lt,Fe,we);v.bindFramebuffer(P.READ_FRAMEBUFFER,null),v.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Ct?T.isDataTexture||T.isData3DTexture?P.texSubImage3D(Oe,Ee,Ye,wt,Vt,Fe,we,Ge,Et,dn,Nt.data):B.isCompressedArrayTexture?P.compressedTexSubImage3D(Oe,Ee,Ye,wt,Vt,Fe,we,Ge,Et,Nt.data):P.texSubImage3D(Oe,Ee,Ye,wt,Vt,Fe,we,Ge,Et,dn,Nt):T.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,Ee,Ye,wt,Fe,we,Et,dn,Nt.data):T.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,Ee,Ye,wt,Nt.width,Nt.height,Et,Nt.data):P.texSubImage2D(P.TEXTURE_2D,Ee,Ye,wt,Fe,we,Et,dn,Nt);v.pixelStorei(P.UNPACK_ROW_LENGTH,Fn),v.pixelStorei(P.UNPACK_IMAGE_HEIGHT,_t),v.pixelStorei(P.UNPACK_SKIP_PIXELS,Zn),v.pixelStorei(P.UNPACK_SKIP_ROWS,Ti),v.pixelStorei(P.UNPACK_SKIP_IMAGES,hs),Ee===0&&B.generateMipmaps&&P.generateMipmap(Oe),v.unbindTexture()},this.initRenderTarget=function(T){z.get(T).__webglFramebuffer===void 0&&$.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?$.setTextureCube(T,0):T.isData3DTexture?$.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?$.setTexture2DArray(T,0):$.setTexture2D(T,0),v.unbindTexture()},this.resetState=function(){k=0,G=0,K=null,v.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=mt._getUnpackColorSpace()}};var na={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Mi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},KA=new Pi(-1,1,1,-1,0,1),zm=class extends it{constructor(){super(),this.setAttribute("position",new Pe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Pe([0,2,0,0,2,0],2))}},jA=new zm,ia=class{constructor(e){this._mesh=new Pt(jA,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,KA)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var sa=class extends Mi{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Lt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ns.clone(e.uniforms),this.material=new Lt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new ia(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Qc=class extends Mi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Wd=class extends Mi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Xd=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ne);this._width=n.width,this._height=n.height,t=new Bt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:cn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new sa(na),this.copyPass.material.blending=Hn,this.timer=new _r}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Qc!==void 0&&(o instanceof Qc?n=!0:o instanceof Wd&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ne);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var qd=class extends Mi{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new be}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var Ix={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new be(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var ra=class i extends Mi{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new ne(e.x,e.y):new ne(256,256),this.clearColor=new be(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Bt(r,o,{type:cn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new Bt(r,o,{type:cn});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new Bt(r,o,{type:cn});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),o=Math.round(o/2)}let a=Ix;this.highPassUniforms=Ns.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Lt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ne(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ns.clone(na.uniforms),this.blendMaterial=new Lt({uniforms:this.copyUniforms,vertexShader:na.vertexShader,fragmentShader:na.fragmentShader,premultipliedAlpha:!0,blending:ko,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new be,this._oldClearAlpha=1,this._basic=new kn,this._fsQuad=new ia(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ne(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let s=0;s<e;s++)t.push(.39894*Math.exp(-.5*s*s/(n*n))/n);return new Lt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ne(.5,.5)},direction:{value:new ne(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Lt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};ra.BlurDirectionX=new ne(1,0);ra.BlurDirectionY=new ne(0,1);var ei=typeof window<"u",Yd=ei?window:null,Os=ei?document:null,Tt={OBJECT:0,ATTRIBUTE:1,CSS:2,TRANSFORM:3,CSS_VAR:4},ot={NUMBER:0,UNIT:1,COLOR:2,COMPLEX:3},hn={NONE:0,AUTO:1,FORCE:2},zt={replace:0,none:1,blend:2},Vm=Symbol(),Ui=Symbol(),Zd=Symbol(),Fs=Symbol(),Px=Symbol(),ft=1e-11,eh=1e12,Oi=1e3,th=240,ti="",Dx="var(",nh=[],$d=(()=>{let i=new Map;return i.set("x","translateX"),i.set("y","translateY"),i.set("z","translateZ"),i})(),oa=["perspective","translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY"],Lx=oa.reduce((i,e)=>({...i,[e]:e+"("}),{}),$t=()=>{},Nx=i=>i,Ux=/\)\s*[-.\d]/,Ox=/(^#([\da-f]{3}){1,2}$)|(^#([\da-f]{4}){1,2}$)/i,Fx=/rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/i,Bx=/rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/i,zx=/hsl\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*\)/i,Vx=/hsla\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/i,km=/[-+]?\d*\.?\d+(?:e[-+]?\d)?/gi,Jd=/^([-+]?\d*\.?\d+(?:e[-+]?\d+)?)([a-z]+|%)$/i,kx=/([a-z])([A-Z])/g,Gx=/(\*=|\+=|-=)/,Hx=/var\(\s*(--[\w-]+)(?:\s*,\s*([^)]+))?\s*\)/;var aa={id:null,keyframes:null,playbackEase:null,playbackRate:1,frameRate:th,loop:0,reversed:!1,alternate:!1,autoplay:!0,persist:!1,duration:Oi,delay:0,loopDelay:0,ease:"out(2)",composition:zt.replace,modifier:Nx,onBegin:$t,onBeforeUpdate:$t,onUpdate:$t,onLoop:$t,onPause:$t,onComplete:$t,onRender:$t},ih={current:null,root:Os},bt={defaults:aa,precision:4,timeScale:1,tickThreshold:200,editor:null},Gm={version:"4.5.0",engine:null};ei&&(Yd.AnimeJS||(Yd.AnimeJS=[]),Yd.AnimeJS.push(Gm));var Wm=i=>i.replace(kx,"$1-$2").toLowerCase(),Xn=(i,e)=>i.indexOf(e)===0,os=Date.now,qn=Array.isArray,Kd=i=>i&&i.constructor===Object,ni=i=>typeof i=="number"&&!isNaN(i),ii=i=>typeof i=="string",Nn=i=>typeof i=="function",et=i=>typeof i>"u",Fi=i=>et(i)||i===null,jd=i=>ei&&i instanceof SVGElement,Xm=i=>Ox.test(i),qm=i=>Xn(i,"rgb"),Ym=i=>Xn(i,"hsl"),Wx=i=>Xm(i)||(qm(i)||Ym(i))&&(i[i.length-1]===")"||!Ux.test(i)),sh=i=>!bt.defaults.hasOwnProperty(i),QA=["opacity","rotate","overflow","color"],Xx=(i,e)=>{if(QA.includes(e))return!1;if(i.getAttribute(e)||e in i){if(e==="scale"){let t=i.parentNode;return t&&t.tagName==="filter"}return!0}},Qd=i=>ii(i)?parseFloat(i):i,wr=Math.pow,rh=Math.sqrt,qx=Math.sin,Yx=Math.cos,Ar=Math.abs;var Er=Math.floor,Zx=Math.asin;var oh=Math.PI,Hm=Math.round,yn=(i,e,t)=>i<e?e:i>t?t:i,gt=(i,e)=>{if(e<0)return i;if(!e)return Hm(i);let t=10**e;return Hm(i*t)/t},$x=(i,e)=>qn(e)?e.reduce((t,n)=>Ar(n-i)<Ar(t-i)?n:t):e?Hm(i/e)*e:i,as=(i,e,t)=>t===1?e:t===0?i:i+(e-i)*t,ah=i=>i===1/0?eh:i===-1/0?-eh:i,Cr=i=>i<=ft?ft:ah(gt(i,11)),Jt=i=>qn(i)?[...i]:i,Jx=(i,e)=>{let t={...i};for(let n in e){let s=i[n];t[n]=et(s)?e[n]:s}return t},At=(i,e,t,n="_prev",s="_next")=>{let r=i._head,o=s;for(t&&(r=i._tail,o=n);r;){let a=r[o];e(r),r=a}},Yn=(i,e,t="_prev",n="_next")=>{let s=e[t],r=e[n];s?s[n]=r:i._head=r,r?r[t]=s:i._tail=s,e[t]=null,e[n]=null},si=(i,e,t,n="_prev",s="_next")=>{let r=i._tail;for(;r&&t&&t(r,e);)r=r[n];let o=r?r[s]:i._head;r?r[s]=e:i._head=e,o?o[n]=e:i._tail=e,e[n]=r,e[s]=o};var Kx=(i,e,t)=>{let n=i.style.transform;if(n){let s=i[Fs],r=0,o=n.length,a;for(;r<o;){for(;r<o&&n.charCodeAt(r)===32;)r++;if(r>=o)break;let c=r;for(;r<o&&n.charCodeAt(r)!==40;)r++;if(r>=o)break;let h=n.substring(c,r),d=1,u=r+1,f=-1,p=-1;for(r++;r<o&&d>0;){let m=n.charCodeAt(r);m===40?d++:m===41?d--:m===44&&d===1&&(f===-1?f=r:p===-1&&(p=r)),r++}let _=r-1;h==="translate"||h==="translate3d"?(f===-1?s.translateX=n.substring(u,_).trim():(s.translateX=n.substring(u,f).trim(),p===-1?s.translateY=n.substring(f+1,_).trim():(s.translateY=n.substring(f+1,p).trim(),s.translateZ=n.substring(p+1,_).trim())),a=n.substring(u,_)):h==="scale"||h==="scale3d"?f===-1?s.scale=n.substring(u,_).trim():(s.scaleX=n.substring(u,f).trim(),p===-1?s.scaleY=n.substring(f+1,_).trim():(s.scaleY=n.substring(f+1,p).trim(),s.scaleZ=n.substring(p+1,_).trim())):s[h]=n.substring(u,_)}if(e==="translate3d"&&a)return t&&(t[e]=a),a;let l=s[e];if(!et(l))return t&&(t[e]=l),l}return e==="translate3d"?"0px, 0px, 0px":e==="rotate3d"?"0, 0, 0, 0deg":Xn(e,"scale")?"1":Xn(e,"rotate")||Xn(e,"skew")?"0deg":"0px"},ef=i=>{let e=ti;for(let t=0,n=oa.length;t<n;t++){let s=oa[t],r=i[s];if(r!==void 0){if(s==="translateX"){let o=i.translateY;if(o!==void 0){let a=i.translateZ;a!==void 0?(e+=`translate3d(${r},${o},${a}) `,t+=2):(e+=`translate(${r},${o}) `,t+=1);continue}}if(s==="scaleX"&&i.scale===void 0){let o=i.scaleY;if(o!==void 0){let a=i.scaleZ;a!==void 0?(e+=`scale3d(${r},${o},${a}) `,t+=2):(e+=`scale(${r},${o}) `,t+=1);continue}}e+=`${Lx[s]}${r}) `}s==="rotateZ"&&i.rotate3d!==void 0&&(e+=`rotate3d(${i.rotate3d}) `)}return i.matrix!==void 0&&(e+=`matrix(${i.matrix}) `),i.matrix3d!==void 0&&(e+=`matrix3d(${i.matrix3d}) `),e};var Zm=[];function tf(i,e){if(!i)return null;let t=Zm.length;e:for(let n=0;n<t;n++){let s=Zm[n];if(s.detect&&!s.detect(i))continue;let r=s.targetAdapters;for(let o=0,a=r.length;o<a;o++){let l=r[o];if(l.detect(i)){let c=l.props[e];if(c&&(!c.gate||c.gate(i)))return c;break e}}}for(let n=0;n<t;n++){let s=Zm[n];if(s.detect&&!s.detect(i))continue;let r=s.propertyResolvers;for(let o=0,a=r.length;o<a;o++){let l=r[o](i,e);if(l)return l}}return null}var ew=i=>{let e=Fx.exec(i)||Bx.exec(i),t=et(e[4])?1:+e[4];return[+e[1],+e[2],+e[3],t]},tw=i=>{let e=i.length,t=e===4||e===5;return[+("0x"+i[1]+i[t?1:2]),+("0x"+i[t?2:3]+i[t?2:4]),+("0x"+i[t?3:5]+i[t?3:6]),e===5||e===9?+(+("0x"+i[t?4:7]+i[t?4:8])/255).toFixed(3):1]},$m=(i,e,t)=>(t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*(2/3-t)*6:i),nw=i=>{let e=zx.exec(i)||Vx.exec(i),t=+e[1]/360,n=+e[2]/100,s=+e[3]/100,r=et(e[4])?1:+e[4],o,a,l;if(n===0)o=a=l=s;else{let c=s<.5?s*(1+n):s+n-s*n,h=2*s-c;o=gt($m(h,c,t+1/3)*255,0),a=gt($m(h,c,t)*255,0),l=gt($m(h,c,t-1/3)*255,0)}return[o,a,l,r]},jx=i=>qm(i)?ew(i):Xm(i)?tw(i):Ym(i)?nw(i):[0,0,0,1];var Ht=(i,e)=>et(i)?e:i,Qx=(i,e)=>{let t=i.match(Hx),n=e[Ui]?e:document.documentElement,s=getComputedStyle(n)?.getPropertyValue(t[1]);return(!s||s.trim()===ti)&&t[2]&&(s=t[2].trim()),s||0},Bi=(i,e,t,n,s,r)=>{if(Nn(i)){if(!s){let a=i(e,t,n,r);return isNaN(+a)?a||0:+a}let o=()=>{let a=i(e,t,n,r);return isNaN(+a)?a||0:+a};return s.func=o,o()}if(ii(i)&&Xn(i,Dx)){if(!s)return Qx(i,e);let o=()=>Qx(i,e);return s.func=o,o()}return i},lh=(i,e)=>i[Ui]?i[Zd]&&Xx(i,e)?Tt.ATTRIBUTE:oa.includes(e)||$d.get(e)?Tt.TRANSFORM:Xn(e,"--")?Tt.CSS_VAR:e in i.style?Tt.CSS:e in i?Tt.OBJECT:Tt.ATTRIBUTE:Tt.OBJECT,ev=(i,e,t)=>{let n=i.style[e];n&&t&&(t[e]=n);let s=n||getComputedStyle(i[Px]||i).getPropertyValue(e);return s==="auto"?"0":s},zi=(i,e,t,n)=>{let s=et(t)?lh(i,e):t,r=tf(i,e);if(r){let o=r.get(i);return o&&n&&(n[e]=o),o??0}if(s===Tt.OBJECT){let o=i[e];return o&&n&&(n[e]=o),o||0}if(s===Tt.ATTRIBUTE){let o=i.getAttribute(e);return o&&n&&(n[e]=o),o}return s===Tt.TRANSFORM?Kx(i,e,n):s===Tt.CSS_VAR?ev(i,e,n).trimStart():ev(i,e,n)},la=(i,e,t)=>t==="-"?i-e:t==="+"?i+e:i*e,nf=()=>({t:ot.NUMBER,n:0,u:null,o:null,d:null,s:null}),bn=(i,e)=>{if(e.t=ot.NUMBER,e.n=0,e.u=null,e.o=null,e.d=null,e.s=null,!i)return e;let t=+i;if(!isNaN(t))return e.n=t,e;let n=i;n[1]==="="&&(e.o=n[0],n=n.slice(2));let s=n.includes(" ")?!1:Jd.exec(n);if(s)return e.t=ot.UNIT,e.n=+s[1],e.u=s[2],e;if(e.o)return e.n=+n,e;if(Wx(n))return e.t=ot.COLOR,e.d=jx(n),e;{let r=n.match(km);return e.t=ot.COMPLEX,e.d=r?r.map(Number):[],e.s=n.split(km)||[],e}},Jm=(i,e)=>(e.t=i._valueType,e.n=i._toNumber,e.u=i._unit,e.o=null,e.d=Jt(i._toNumbers),e.s=Jt(i._strings),e),en=nf(),sf=(i,e,t)=>{let n=i._modifier,s=i._fromNumbers,r=i._toNumbers,o=i._strings,a=o[0];for(let l=0,c=r.length;l<c;l++){let h=n(gt(as(s[l],r[l],e),t)),d=o[l+1];a+=`${d?h+d:h}`,i._numbers[l]=h}return a};var ch=(i,e,t,n,s)=>{let r=i.parent,o=i.duration,a=i.completed,l=i.iterationDuration,c=i.iterationCount,h=i._currentIteration,d=i._loopDelay,u=i._reversed,f=i._alternate,p=i._hasChildren,_=i._delay,m=i._currentTime,g=_+l,b=e-_,S=yn(m,-_,o),x=yn(b,-_,o),A=b-m,M=x>0,C=x>=o,y=o<=ft,w=s===hn.FORCE,I=0,D=b,L=0;if(c>1){let G=l+(C?0:d),K=~~(x/G);i._currentIteration=yn(K,0,c),C&&i._currentIteration--,I=i._currentIteration%2,D=x-K*G||0}let q=u^(f&&I),Y=i._ease,U=C?q?0:o:q?l-D:D;Y&&(U=l*Y(U/l)||0);let k=(r?r.backwards:b<m)?!q:!!q;if(i._currentTime=b,i._iterationTime=U,i.backwards=k,M&&!i.began?(i.began=!0,!t&&!(r&&(k||!r.began))&&i.onBegin(i)):b<=0&&(i.began=!1),!t&&!p&&M&&i._currentIteration!==h&&i.onLoop(i),w||s===hn.AUTO&&(e>=(r&&_>0?0:_)&&e<=g||e<=_&&S>_||e>=g&&S!==o)||U>=g&&S!==o||U<=_&&S>0&&!C||e<=S&&S===o&&a||C&&!a&&y){if(M&&(i.computeDeltaTime(S),t||i.onBeforeUpdate(i)),!p){let G=w||(k?A*-1:A)>=bt.tickThreshold,K=gt(i._offset+(r?r._offset:0)+_+U,12),V=i._head,re,le,me,tt,pt=0;for(;V;){let je=V._composition,X=V._currentTime,de=V._changeDuration,se=V._absoluteStartTime+V._changeDuration,fe=V._nextRep,ze=V._prevRep,Le=je!==zt.none,De=ze?ze._absoluteStartTime+ze._changeDuration:0,Me=ze&&ze.parent!==V.parent,Q=!fe||fe._isOverridden?se:fe.parent===V.parent?se+fe._delay:fe._absoluteStartTime<fe._absoluteUpdateStartTime?fe._absoluteStartTime:fe._absoluteUpdateStartTime;if((G||(X!==de||K<=Q||ze&&!Me&&(!fe||fe.parent!==V.parent))&&(X!==0||K>=V._absoluteStartTime||Me&&!V._hasFromValue&&!ze._isOverridden&&K>=De||fe&&!fe._isOverridden&&fe.parent===V.parent&&fe._currentTime!==0&&U<fe._startTime))&&(!ze||Me||U>=V._startTime)&&(!Le||!V._isOverridden&&(!V._isOverlapped||K<=se)&&(!fe||fe._isOverridden||K<=Q)&&(!ze||ze._isOverridden||(Me?K>=V._absoluteStartTime||!V._hasFromValue&&K>=De:K>=De+V._delay)))){let ie=V._currentTime=yn(U-V._startTime,0,de),j=V._ease(ie/V._updateDuration),he=V._modifier,ue=V._valueType,Ce=V._tweenType,Re=Ce===Tt.OBJECT,Ne=ue===ot.NUMBER,Ve=Ne&&Re||j===0||j===1?-1:bt.precision,P,$e;if(Ne)P=$e=he(gt(as(V._fromNumber,V._toNumber,j),Ve));else if(ue===ot.UNIT)$e=he(gt(as(V._fromNumber,V._toNumber,j),Ve)),P=`${$e}${V._unit}`;else if(ue===ot.COLOR){let Ue=V._numbers,E=V._fromNumbers,v=V._toNumbers,O=1-j,z=E[0],$=E[1],ce=E[2],pe=v[0],J=v[1],ee=v[2];Ue[0]=he(Math.sqrt(z*z*O+pe*pe*j)),Ue[1]=he(Math.sqrt($*$*O+J*J*j)),Ue[2]=he(Math.sqrt(ce*ce*O+ee*ee*j)),Ue[3]=he(as(E[3],v[3],j)),(!V._setter||n)&&(P=`rgba(${gt(Ue[0],0)},${gt(Ue[1],0)},${gt(Ue[2],0)},${Ue[3]})`)}else ue===ot.COMPLEX&&(P=sf(V,j,Ve));if(Le&&(V._number=$e),!n&&je!==zt.blend){let Ue=V.property;re=V.target,V._setter?V._setter(re,$e,V):Re?re[Ue]=P:Ce===Tt.ATTRIBUTE?re.setAttribute(Ue,P):(le=re.style,Ce===Tt.TRANSFORM?(re!==me&&(me=re,tt=re[Fs]),tt[Ue]=P,pt=1):Ce===Tt.CSS?le[Ue]=P:Ce===Tt.CSS_VAR&&le.setProperty(Ue,P)),M&&(L=1)}else V._value=P}else X&&ze&&!Me&&U<V._startTime&&(V._currentTime=0);pt&&V._renderTransforms&&(le.transform=ef(tt),pt=0),V=V._next}!t&&L&&i.onRender(i)}!t&&M&&i.onUpdate(i)}return r&&y?!t&&(r.began&&!k&&b>0&&!a||k&&b<=ft&&a)&&(i.onComplete(i),i.completed=!k):M&&C?c===1/0?i._startTime+=i.duration:i._currentIteration>=c-1&&(i.paused=!0,!a&&!p&&(i.completed=!0,!t&&!(r&&(k||!r.began))&&(i.onComplete(i),i._resolve(i)))):i.completed=!1,L},Bs=(i,e,t,n,s)=>{let r=i._currentIteration;if(ch(i,e,t,n,s),i._hasChildren){let o=i,a=o.backwards,l=n?e:o._iterationTime,c=os(),h=0,d=!0;if(!n&&o._currentIteration!==r){let u=o.iterationDuration;At(o,f=>{if(!a)!f.completed&&!f.backwards&&f._currentTime<f.iterationDuration&&ch(f,u,t,1,hn.FORCE),f.began=!1,f.completed=!1;else{let p=f.duration,_=f._offset+f._delay,m=_+p;!t&&p<=ft&&(!_||m===u)&&f.onComplete(f)}}),t||o.onLoop(o)}At(o,u=>{let f=gt((l-u._offset)*u._speed,12);if(a&&f>u._delay+u.duration)return;let p=u._fps<o._fps?u.requestTick(c):s;h+=ch(u,f,t,n,p),!u.completed&&d&&(d=!1)},a),!t&&h&&o.onRender(o),(d||a)&&o._currentTime>=o.duration&&(o.paused=!0,o.completed||(o.completed=!0,t||(o.onComplete(o),o._resolve(o))))}};var tv={},ca=(i,e,t)=>{if(t===Tt.TRANSFORM){let n=$d.get(i);return n||i}else if(t===Tt.CSS||t===Tt.ATTRIBUTE&&jd(e)&&i in e.style){let n=tv[i];if(n)return n;{let s=i&&Wm(i);return tv[i]=s,s}}else return i},rf=(i,e=!1)=>{if(i._hasChildren)At(i,t=>rf(t,e),!0);else{let t=i;t.pause(),At(t,n=>{let s=n.property,r=n.target,o=n._tweenType,a=n._inlineValue,l=Fi(a)||a===ti;if(n._setter){if(!e&&!l){if(bn(a,en),en.d){let c=en.d,h=n._numbers;for(let d=0,u=c.length;d<u;d++)h[d]=c[d]}else n._number=en.n;n._setter(n.target,n._number,n)}}else if(o===Tt.OBJECT)!e&&!l&&(r[s]=a);else if(r[Ui])if(o===Tt.ATTRIBUTE)e||(l?r.removeAttribute(s):r.setAttribute(s,a));else{let c=r.style;if(o===Tt.TRANSFORM){let h=r[Fs];l?delete h[s]:h[s]=a,n._renderTransforms&&(Object.keys(h).length?c.transform=ef(h):c.removeProperty("transform"))}else l?c.removeProperty(Wm(s)):c[s]=a}r[Ui]&&t._tail===n&&t.targets.forEach(c=>{c.getAttribute&&c.getAttribute("style")===ti&&c.removeAttribute("style")})})}return i},nv=i=>rf(i,!0);var ha=class{constructor(e=0){this.deltaTime=0,this._currentTime=e,this._lastTickTime=e,this._startTime=e,this._lastTime=e,this._frameDuration=Oi/th,this._fps=th,this._speed=1,this._hasChildren=!1,this._head=null,this._tail=null}get fps(){return this._fps}set fps(e){let t=+e,n=t<ft?ft:t,s=Oi/n;n>aa.frameRate&&(aa.frameRate=n),this._fps=n,this._frameDuration=s}get speed(){return this._speed}set speed(e){let t=+e;this._speed=t<ft?ft:t}requestTick(e){let t=this._frameDuration,n=e-this._lastTickTime,s=t*.25,r=s<4?s:4;return n+r<t?hn.NONE:(this._lastTickTime=n>=t?e-n%t:e,hn.AUTO)}computeDeltaTime(e){let t=e-this._lastTime;return this.deltaTime=t,this._lastTime=e,t}};var ls={animation:null,update:$t},iv=i=>{let e=ls.animation;return e||(e={duration:ft,computeDeltaTime:$t,_offset:0,_delay:0,_head:null,_tail:null},ls.animation=e,ls.update=()=>{i.forEach(t=>{for(let n in t){let s=t[n],r=s._head;if(r){let o=r._valueType,a=o===ot.COMPLEX||o===ot.COLOR?Jt(r._fromNumbers):null,l=r._fromNumber,c=s._tail;for(;c&&c!==r;){if(a)for(let h=0,d=c._numbers.length;h<d;h++)a[h]+=c._numbers[h];else l+=c._number;c=c._prevAdd}r._toNumber=l,r._toNumbers=a}}}),ch(e,1,1,0,hn.FORCE)}),e};var sv=ei?requestAnimationFrame:setImmediate,iw=ei?cancelAnimationFrame:clearImmediate,Km=class extends ha{constructor(e){super(e),this.useDefaultMainLoop=!0,this.pauseOnDocumentHidden=!0,this.defaults=aa,this.paused=!0,this.reqId=0}update(){let e=this._currentTime=os();if(this.requestTick(e)){this.computeDeltaTime(e);let t=this._speed,n=this._fps,s=this._head;for(;s;){let r=s._next;s.paused?(Yn(this,s),this._hasChildren=!!this._tail,s._running=!1,s.completed&&!s._cancelled&&s.cancel()):Bs(s,(e-s._startTime)*s._speed*t,0,0,s._fps<n?s.requestTick(e):hn.AUTO),s=r}ls.update()}}wake(){return this.useDefaultMainLoop&&!this.reqId&&(this.requestTick(os()),this.reqId=sv(rv)),this}pause(){if(this.reqId)return this.paused=!0,sw()}resume(){if(this.paused)return this.paused=!1,At(this,e=>e.resetTime()),this.wake()}get speed(){return this._speed*(bt.timeScale===1?1:Oi)}set speed(e){let t=e*bt.timeScale;this._speed!==t&&(this._speed=t,At(this,n=>n.speed=n._speed))}get timeUnit(){return bt.timeScale===1?"ms":"s"}set timeUnit(e){let n=e==="s",s=n?.001:1;if(bt.timeScale!==s){bt.timeScale=s,bt.tickThreshold=200*s;let r=n?.001:Oi;this.defaults.duration*=r,this._speed*=r}}get precision(){return bt.precision}set precision(e){bt.precision=e}},tn=(()=>{let i=new Km(os());return ei&&(Gm.engine=i,Os.addEventListener("visibilitychange",()=>{i.pauseOnDocumentHidden&&(Os.hidden?i.pause():i.resume())})),i})(),rv=()=>{tn._head?(tn.reqId=sv(rv),tn.update()):tn.reqId=0},sw=()=>(iw(tn.reqId),tn.reqId=0,tn);var of={_rep:new WeakMap,_add:new Map},uh=(i,e,t="_rep")=>{let n=of[t],s=n.get(i);return s||(s={},n.set(i,s)),s[e]?s[e]:s[e]={_head:null,_tail:null}},rw=(i,e)=>i._isOverridden||i._absoluteStartTime>e._absoluteStartTime,hh=i=>{i._isOverlapped=1,i._isOverridden=1,i._changeDuration=ft,i._currentTime=ft},af=(i,e)=>{let t=i._composition;if(t===zt.replace){let n=i._absoluteStartTime;si(e,i,rw,"_prevRep","_nextRep");let s=i._prevRep;if(s){let r=s.parent,o=s._absoluteEndTime;if(i.parent.id!==r.id&&r.iterationCount>1&&o+(r.duration-r.iterationDuration)>n){hh(s);let c=s._prevRep;for(;c&&c.parent.id===r.id;)hh(c),c=c._prevRep}let a=i._absoluteUpdateStartTime;if(o>a){let c=s._startTime,h=o-(c+s._updateDuration),d=gt(a-h-c,12);s._changeDuration=d,s._currentTime=d,s._isOverlapped=1,d<ft&&hh(s)}let l=i.parent.parent;if(!l||l!==r.parent){let c=!0;if(At(r,h=>{h._isOverlapped||(c=!1)}),c){let h=r.parent;if(h){let d=!0;At(h,u=>{u!==r&&At(u,f=>{f._isOverlapped||(d=!1)})}),d&&h.cancel()}else r.cancel()}}}}else if(t===zt.blend){let n=uh(i.target,i.property,"_add"),s=iv(of._add),r=n._head;r||(r={...i},r._composition=zt.replace,r._updateDuration=ft,r._startTime=0,r._numbers=Jt(i._fromNumbers),r._number=0,r._next=null,r._prev=null,si(n,r),si(s,r));let o=i._toNumber;if(i._fromNumber=r._fromNumber-o,i._toNumber=0,i._numbers=Jt(i._fromNumbers),i._number=0,r._fromNumber=o,i._toNumbers.length){let a=Jt(i._toNumbers);a.forEach((l,c)=>{i._fromNumbers[c]=r._fromNumbers[c]-l,i._toNumbers[c]=0}),r._fromNumbers=a}si(n,i,null,"_prevAdd","_nextAdd")}return i},jm=i=>{let e=i._composition;if(e!==zt.none){let t=i.target,n=i.property,o=of._rep.get(t)[n];if(Yn(o,i,"_prevRep","_nextRep"),e===zt.blend){let a=of._add,l=a.get(t);if(!l)return;let c=l[n],h=ls.animation;Yn(c,i,"_prevAdd","_nextAdd");let d=c._head;if(d&&d===c._tail){Yn(c,d,"_prevAdd","_nextAdd"),Yn(h,d);let u=!0;for(let f in l)if(l[f]._head){u=!1;break}u&&a.delete(t)}}}return i},ov=(i,e,t)=>{let n=!1;return At(e,s=>{let r=s.target;if(i.includes(r)){let o=s.property,a=s._tweenType,l=ca(t,r,a);(!l||l&&l===o)&&(s.parent._tail===s&&s._tweenType===Tt.TRANSFORM&&s._prev&&s._prev._tweenType===Tt.TRANSFORM&&(s._prev._renderTransforms=1),Yn(e,s),jm(s),n=!0)}},!0),n},Qm=(i,e,t)=>{let n=e||tn,s;if(n._hasChildren){let r=0;At(n,o=>{if(!o._hasChildren)if(s=ov(i,o,t),s&&!o._head)o.cancel(),Yn(n,o);else{let l=o._offset+o._delay+o.duration;l>r&&(r=l)}o._head?Qm(i,o,t):o._hasChildren=!1},!0),et(n.iterationDuration)||(n.iterationDuration=r)}else s=ov(i,n,t);s&&!n._head&&(n._hasChildren=!1,n.cancel&&n.cancel())};var av=i=>(i.paused=!0,i.began=!1,i.completed=!1,i),eg=i=>(i._cancelled&&(i._hasChildren?At(i,eg):At(i,e=>{e._composition!==zt.none&&af(e,uh(e.target,e.property))}),i._cancelled=0),i),lv=0,ow=(i,e)=>i._priority>e._priority,ua=class extends ha{constructor(e={},t=null,n=0){super(0),++lv;let{id:s,delay:r,duration:o,reversed:a,alternate:l,loop:c,loopDelay:h,autoplay:d,frameRate:u,playbackRate:f,priority:p,onComplete:_,onLoop:m,onPause:g,onBegin:b,onBeforeUpdate:S,onUpdate:x}=e;ih.current&&ih.current.register(this);let A=t?0:tn._lastTickTime,M=t?t.defaults:bt.defaults,C=Nn(r)||et(r)?M.delay:+r,y=Nn(o)||et(o)?1/0:+o,w=Ht(c,M.loop),I=Ht(h,M.loopDelay),D=w===!0||w===1/0||w<0?1/0:w+1,L=0;t?L=n:(tn.reqId||tn.requestTick(os()),L=(tn._lastTickTime-tn._startTime)*bt.timeScale),this.id=et(s)?lv:s,this.parent=t,this.duration=ah((y+I)*D-I)||ft,this.backwards=!1,this.paused=!0,this.began=!1,this.completed=!1,this.onBegin=b||M.onBegin,this.onBeforeUpdate=S||M.onBeforeUpdate,this.onUpdate=x||M.onUpdate,this.onLoop=m||M.onLoop,this.onPause=g||M.onPause,this.onComplete=_||M.onComplete,this.iterationDuration=y,this.iterationCount=D,this._autoplay=t?!1:Ht(d,M.autoplay),this._offset=L,this._delay=C,this._loopDelay=I,this._iterationTime=0,this._currentIteration=0,this._resolve=$t,this._running=!1,this._reversed=+Ht(a,M.reversed),this._reverse=this._reversed,this._cancelled=0,this._alternate=Ht(l,M.alternate),this._prev=null,this._next=null,this._lastTickTime=A,this._startTime=A,this._lastTime=A,this._fps=Ht(u,M.frameRate),this._speed=Ht(f,M.playbackRate),this._priority=+Ht(p,1)}get cancelled(){return!!this._cancelled}set cancelled(e){e?this.cancel():this.reset(!0).play()}get currentTime(){return yn(gt(this._currentTime,bt.precision),-this._delay,this.duration)}set currentTime(e){let t=this.paused;this.pause().seek(+e),t||this.resume()}get iterationCurrentTime(){return yn(gt(this._iterationTime,bt.precision),0,this.iterationDuration)}set iterationCurrentTime(e){this.currentTime=this.iterationDuration*this._currentIteration+e}get progress(){return yn(gt(this._currentTime/this.duration,10),0,1)}set progress(e){this.currentTime=this.duration*e}get iterationProgress(){return yn(gt(this._iterationTime/this.iterationDuration,10),0,1)}set iterationProgress(e){let t=this.iterationDuration;this.currentTime=t*this._currentIteration+t*e}get currentIteration(){return this._currentIteration}set currentIteration(e){this.currentTime=this.iterationDuration*yn(+e,0,this.iterationCount-1)}get reversed(){return!!this._reversed}set reversed(e){e?this.reverse():this.play()}get speed(){return super.speed}set speed(e){super.speed=e,this.resetTime()}reset(e=!1){return eg(this),this._reversed&&!this._reverse&&(this.reversed=!1),this._iterationTime=this.iterationDuration,Bs(this,0,1,~~e,hn.FORCE),av(this),this._hasChildren&&At(this,av),this}init(e=!1){this.fps=this._fps,this.speed=this._speed,!e&&this._hasChildren&&Bs(this,this.duration,1,~~e,hn.FORCE),this.reset(e);let t=this._autoplay;return t===!0?this.resume():t&&!et(t.linked)&&t.link(this),this}resetTime(){let e=1/(this._speed*tn._speed);return this._startTime=os()-(this._currentTime+this._delay)*e,this}pause(){return this.paused?this:(this.paused=!0,this.onPause(this),this)}resume(){return this.paused?(this.paused=!1,this.duration<=ft&&!this._hasChildren?Bs(this,ft,0,0,hn.FORCE):(this._running||(si(tn,this,ow),tn._hasChildren=!0,this._running=!0),this.resetTime(),this._startTime-=12,tn.wake()),this):this}restart(){return this.reset().resume()}seek(e,t=0,n=0){eg(this),this.completed=!1;let s=this.paused;return this.paused=!0,Bs(this,e+this._delay,~~t,~~n,hn.AUTO),s?this:this.resume()}alternate(){let e=this._reversed,t=this.iterationCount,n=this.iterationDuration,s=t===1/0?Er(eh/n):t;return this._reversed=+(this._alternate&&!(s%2)?e:!e),t===1/0?this.iterationProgress=this._reversed?1-this.iterationProgress:this.iterationProgress:this.seek(n*s-this._currentTime),this.resetTime(),this}play(){return this._reversed&&this.alternate(),this.resume()}reverse(){return this._reversed||this.alternate(),this.resume()}cancel(){return this._hasChildren?At(this,e=>e.cancel(),!0):At(this,jm),this._cancelled=1,this.pause()}stretch(e){let t=this.duration,n=Cr(e);if(t===n)return this;let s=e/t,r=e<=ft;return this.duration=r?ft:n,this.iterationDuration=r?ft:Cr(this.iterationDuration*s),this._offset*=s,this._delay*=s,this._loopDelay*=s,this}revert(){Bs(this,0,1,0,hn.AUTO);let e=this._autoplay;return e&&e.linked&&e.linked===this&&e.revert(),this.cancel()}complete(e=0){return this.seek(this.duration,e).cancel()}then(e=$t){let t=this.then,n=()=>{this.then=null,e(this),this.then=t,this._resolve=$t};return new Promise(s=>(this._resolve=()=>s(n()),this.completed&&this._resolve(),this))}};function cv(i){let e=ii(i)?ih.root.querySelectorAll(i):i;if(e instanceof NodeList||e instanceof HTMLCollection)return e}function tg(i){if(Fi(i))return[];if(!ei)return qn(i)&&i.flat(1/0)||[i];if(qn(i)){let t=i.flat(1/0),n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];if(!Fi(o)){let a=cv(o);if(a)for(let l=0,c=a.length;l<c;l++){let h=a[l];if(!Fi(h)){let d=!1;for(let u=0,f=n.length;u<f;u++)if(n[u]===h){d=!0;break}d||n.push(h)}}else{let l=!1;for(let c=0,h=n.length;c<h;c++)if(n[c]===o){l=!0;break}l||n.push(o)}}}return n}let e=cv(i);return e?Array.from(e):[i]}function zs(i){let e=tg(i),t=e.length;for(let n=0;n<t;n++){let s=e[n];if(!s[Vm]){s[Vm]=!0;let r=jd(s);(s.nodeType||r)&&(s[Ui]=!0,s[Zd]=r,s[Fs]={})}}return e}var ng={deg:1,rad:180/oh,turn:360},hv={},dh=(i,e,t,n=!1)=>{let s=e.u,r=e.n;if(e.t===ot.UNIT&&s===t)return e;let o=r+s+t,a=hv[o];if(!et(a)&&!n)e.n=a;else{let l;if(s in ng)l=r*ng[s]/ng[t];else{let h=i.cloneNode(),d=i.parentNode,u=d&&d!==Os?d:Os.body;u.appendChild(h);let f=h.style;f.width=100+s;let p=h.offsetWidth||100;f.width=100+t;let _=h.offsetWidth||100,m=p/_;u.removeChild(h),l=m*r}e.n=l,hv[o]=l}return e.t,ot.UNIT,e.u=t,e};var cs=i=>i;var fh=(i=1.68)=>e=>wr(e,+i),sg={in:i=>e=>i(e),out:i=>e=>1-i(1-e),inOut:i=>e=>e<.5?i(e*2)/2:1-i(e*-2+2)/2,outIn:i=>e=>e<.5?(1-i(1-e*2))/2:(i(e*2-1)+1)/2},aw=oh/2,uv=oh*2,dv={[ti]:fh,Quad:fh(2),Cubic:fh(3),Quart:fh(4),Quint:fh(5),Sine:i=>1-Yx(i*aw),Circ:i=>1-rh(1-i*i),Expo:i=>i?wr(2,10*i-10):0,Bounce:i=>{let e,t=4;for(;i<((e=wr(2,--t))-1)/11;);return 1/wr(4,3-t)-7.5625*wr((e*3-2)/22-i,2)},Back:(i=1.7)=>e=>(+i+1)*e*e*e-+i*e*e,Elastic:(i=1,e=.3)=>{let t=yn(+i,1,10),n=yn(+e,ft,2),s=n/uv*Zx(1/t),r=uv/n;return o=>o===0||o===1?o:-t*wr(2,-10*(1-o))*qx((1-o-s)*r)}},ig=(()=>{let i={linear:cs,none:cs};for(let e in sg)for(let t in dv){let n=dv[t],s=sg[e];i[e+t]=t===ti||t==="Back"||t==="Elastic"?(r,o)=>s(n(r,o)):s(n)}return i})(),lf={linear:cs,none:cs},lw=i=>{if(lf[i])return lf[i];if(i.indexOf("(")<=-1){let t=sg[i]||i.includes("Back")||i.includes("Elastic")?ig[i]():ig[i];return t?lf[i]=t:cs}else{let e=i.slice(0,-1).split("("),t=ig[e[0]];return t?lf[i]=t(...e[1].split(",")):cs}},fv=["steps(","irregular(","linear(","cubicBezier("],ph=i=>{if(ii(i)){for(let t=0,n=fv.length;t<n;t++)if(Xn(i,fv[t]))return console.warn(`String syntax for \`ease: "${i}"\` has been removed from the core and replaced by importing and passing the easing function directly: \`ease: ${i}\``),cs}return Nn(i)?i:ii(i)?lw(i):cs};var st=nf(),ut=nf(),da={},cf={func:null},hf={func:null},uf=[null],fa=[null,null],df={to:null},cw=0,pv=0,Vs,Vi,hw=(i,e)=>{let t={};if(qn(i)){let n=[].concat(...i.map(s=>Object.keys(s))).filter(sh);for(let s=0,r=n.length;s<r;s++){let o=n[s],a=i.map(l=>{let c={};for(let h in l){let d=l[h];sh(h)?h===o&&(c.to=d):c[h]=d}return c});t[o]=a}}else{let n=Ht(e.duration,bt.defaults.duration);Object.keys(i).map(r=>({o:parseFloat(r)/100,p:i[r]})).sort((r,o)=>r.o-o.o).forEach(r=>{let o=r.o,a=r.p;for(let l in a)if(sh(l)){let c=t[l];c||(c=t[l]=[]);let h=o*n,d=c.length,u=c[d-1],f={to:a[l]},p=0;for(let _=0;_<d;_++)p+=c[_].duration;d===1&&(f.from=u.to),a.ease&&(f.ease=a.ease),f.duration=h-(d?p:0),c.push(f)}return r});for(let r in t){let o=t[r],a;for(let l=0,c=o.length;l<c;l++){let h=o[l],d=h.ease;h.ease=a||void 0,a=d}o[0].duration||o.shift()}}return t},pa=class extends ua{constructor(e,t,n,s,r=!1,o=0,a){super(t,n,s),this._head,this._tail,++pv;let l=zs(e),c=l.length,h=t.keyframes,d=h?Jx(hw(h,t),t):t,{id:u,delay:f,duration:p,ease:_,playbackEase:m,modifier:g,composition:b,onRender:S}=d,x=n?n.defaults:bt.defaults,A=Ht(_,x.ease),M=Ht(m,x.playbackEase),C=M?ph(M):null,y=!et(A.ease),w=y?A.ease:Ht(_,C?"linear":x.ease),I=y?A.settlingDuration:Ht(p,x.duration),D=Ht(f,x.delay),L=g||x.modifier,q=et(b)&&c>=Oi?zt.none:et(b)?x.composition:b,Y=this._offset+(n?n._offset:0);y&&(A.parent=this);let U=NaN,k=NaN,G=0,K=0;for(let V=0;V<c;V++){let re=l[V],le=o||V,me=a||l,tt=NaN,pt=NaN;for(let je in d)if(sh(je)){let X=lh(re,je),de=tf(re,je),se=ca(je,re,X),fe=d[je],ze=qn(fe);if(r&&!ze&&(fa[0]=fe,fa[1]=fe,fe=fa),ze){let j=fe.length,he=!Kd(fe[0]);j===2&&he?(df.to=fe,uf[0]=df,Vs=uf):j>2&&he?(Vs=[],fe.forEach((ue,Ce)=>{Ce?Ce===1?(fa[1]=ue,Vs.push(fa)):Vs.push(ue):fa[0]=ue})):Vs=fe}else uf[0]=fe,Vs=uf;let Le=null,De=null,Me=NaN,Q=0,ie=0;for(let j=Vs.length;ie<j;ie++){let he=Vs[ie];Kd(he)?Vi=he:(df.to=he,Vi=df),cf.func=null,hf.func=null;let ue=Bi(Ht(Vi.composition,q),re,le,me,null,null),Ce=ni(ue)?ue:zt[ue];!Le&&Ce!==zt.none&&(Le=uh(re,se));let Re=Le?Le._tail:null,Ne=n&&Re&&Re.parent.parent===n?Re:De,Ve=Bi(Vi.to,re,le,me,cf,Ne),P;Kd(Ve)&&!et(Ve.to)?(Vi=Ve,P=Ve.to):P=Ve;let $e=Bi(Vi.from,re,le,me,hf,Ne),Ue=Vi.ease||w,E=Bi(Ue,re,le,me,null,Ne),v=Nn(E)||ii(E)?E:Ue,O=!et(v)&&!et(v.ease),z=O?v.ease:v,$=O?v.settlingDuration:Bi(Ht(Vi.duration,j>1?Bi(I,re,le,me,null,Ne)/j:I),re,le,me,null,Ne),ce=Bi(Ht(Vi.delay,ie?0:D),re,le,me,null,Ne),pe=Vi.modifier||L,J=!et($e),ee=!et(P),ge=qn(P),He=ge||J&&ee,Se=De?Q:0,ye=De?Q+ce:ce,We=gt(Y+ye,12),Je=gt(Y+Se,12);!K&&(J||ge)&&(K=1);let Ze=De;if(Ce!==zt.none){let qe=Le._head;for(;qe&&qe._absoluteStartTime<=We;)if(qe._isOverridden||(Ze=qe),qe=qe._nextRep,qe&&qe._absoluteStartTime>=We)for(;qe;)hh(qe),qe=qe._nextRep}if(He){bn(ge?Bi(P[0],re,le,me,hf,Ne):$e,st),bn(ge?Bi(P[1],re,le,me,cf,Ne):P,ut);let qe=zi(re,se,X,da);st.t===ot.NUMBER&&(Ze?Ze._valueType===ot.UNIT&&(st.t=ot.UNIT,st.u=Ze._unit):(bn(qe,en),en.t===ot.UNIT&&(st.t=ot.UNIT,st.u=en.u)))}else ee?bn(P,ut):De?Jm(De,ut):bn(n&&Ze&&Ze.parent.parent===n?Ze._value:zi(re,se,X,da),ut),J?bn($e,st):De?Jm(De,st):bn(n&&Ze&&Ze.parent.parent===n?Ze._value:zi(re,se,X,da),st);if(st.o&&(st.n=la(Ze?Ze._toNumber:bn(zi(re,se,X,da),en).n,st.n,st.o)),ut.o&&(ut.n=la(st.n,ut.n,ut.o)),st.t!==ut.t){if(st.t===ot.COMPLEX||ut.t===ot.COMPLEX){let qe=st.t===ot.COMPLEX?st:ut,at=st.t===ot.COMPLEX?ut:st;at.t=ot.COMPLEX,at.s=Jt(qe.s),at.d=qe.d.map(()=>at.n)}else if(st.t===ot.UNIT||ut.t===ot.UNIT){let qe=st.t===ot.UNIT?st:ut,at=st.t===ot.UNIT?ut:st;at.t=ot.UNIT,at.u=qe.u}else if(st.t===ot.COLOR||ut.t===ot.COLOR){let qe=st.t===ot.COLOR?st:ut,at=st.t===ot.COLOR?ut:st;at.t=ot.COLOR,at.d=qe.d.map(()=>0)}}if(st.u!==ut.u){let qe=ut.u?st:ut;qe=dh(re,qe,ut.u?ut.u:st.u,!1)}if(ut.d&&st.d&&ut.d.length!==st.d.length){let qe=st.d.length>ut.d.length?st:ut,at=qe===st?ut:st;at.d=qe.d.map((li,On)=>et(at.d[On])?0:at.d[On]),at.s=Jt(qe.s)}let N=gt(+$||ft,12),_e=da[se];Fi(_e)||(da[se]=null);let te=de?de.set:null;Q=gt(ye+N,12);let xe=st.d,Ae=ut.d,oe=ut.s,Ie={parent:this,id:cw++,property:se,target:re,_value:null,_toFunc:cf.func,_fromFunc:hf.func,_ease:ph(z),_fromNumbers:xe?Jt(xe):nh,_toNumbers:Ae?Jt(Ae):nh,_strings:oe?Jt(oe):nh,_fromNumber:st.n,_toNumber:ut.n,_numbers:xe?Jt(xe):nh,_number:st.n,_unit:ut.u,_modifier:pe,_currentTime:0,_startTime:ye,_delay:+ce,_updateDuration:N,_changeDuration:N,_absoluteStartTime:We,_absoluteUpdateStartTime:Je,_absoluteEndTime:gt(Y+Q,12),_hasFromValue:J||ge?1:0,_tweenType:X,_setter:te,_valueType:ut.t,_composition:Ce,_isOverlapped:0,_isOverridden:0,_renderTransforms:0,_inlineValue:_e,_prevRep:null,_nextRep:null,_prevAdd:null,_nextAdd:null,_prev:null,_next:null};Ce!==zt.none&&af(Ie,Le);let Be=Ie._valueType;if(Be===ot.COMPLEX)Ie._value=sf(Ie,1,-1);else if(Be===ot.UNIT)Ie._value=`${pe(Ie._toNumber)}${Ie._unit}`;else if(Be===ot.COLOR){let qe=ut.d;Ie._value=`rgba(${gt(qe[0],0)},${gt(qe[1],0)},${gt(qe[2],0)},${qe[3]})`}else Ie._value=pe(Ie._toNumber);isNaN(Me)&&(Me=Ie._startTime),De=Ie,G++,si(this,Ie)}(isNaN(k)||Me<k)&&(k=Me),(isNaN(U)||Q>U)&&(U=Q),X===Tt.TRANSFORM&&(tt=G-ie,pt=G)}if(!isNaN(tt)){let je=0;At(this,X=>{je>=tt&&je<pt&&(X._renderTransforms=1,X._composition===zt.blend&&At(ls.animation,de=>{de.id===X.id&&(de._renderTransforms=1)})),je++})}}c||console.warn("No target found. Make sure the element you're trying to animate is accessible before creating your animation."),k?(At(this,V=>{V._startTime-V._delay||(V._delay-=k),V._startTime-=k}),U-=k):k=0,U||(U=ft,this.iterationCount=0),this.targets=l,this.id=et(u)?pv:u,this.duration=U===ft?ft:ah((U+this._loopDelay)*this.iterationCount-this._loopDelay)||ft,this.onRender=S||x.onRender,this._ease=C,this._delay=k,this.iterationDuration=U,!this._autoplay&&K&&this.onRender(this)}stretch(e){let t=this.duration;if(t===Cr(e))return this;let n=e/t;return At(this,s=>{s._updateDuration=Cr(s._updateDuration*n),s._changeDuration=Cr(s._changeDuration*n),s._currentTime*=n,s._delay*=n,s._startTime*=n,s._absoluteStartTime*=n,s._absoluteUpdateStartTime*=n,s._absoluteEndTime*=n}),super.stretch(e)}refresh(){return At(this,e=>{let t=e._toFunc,n=e._fromFunc;(t||n)&&(n?(bn(n(),st),st.u!==e._unit&&e.target[Ui]&&dh(e.target,st,e._unit,!0),e._fromNumbers=Jt(st.d),e._fromNumber=st.n):t&&(bn(zi(e.target,e.property,e._tweenType),en),e._fromNumbers=Jt(en.d),e._fromNumber=en.n),t&&(bn(t(),ut),e._toNumbers=Jt(ut.d),e._strings=Jt(ut.s),e._toNumber=ut.o?la(e._fromNumber,ut.n,ut.o):ut.n))}),this.duration===ft&&this.restart(),this}revert(){return super.revert(),rf(this)}then(e){return super.then(e)}},ff=(i,e)=>bt.editor?bt.editor.addAnimation(i,e):new pa(i,e,null,0,!1).init();var uw=(i,e)=>{if(Xn(e,"<")){let t=e[1]==="<",n=i._tail,s=n?n._offset+n._delay:0;return t?s:s+n.duration}},mv=(i,e)=>{let t=i.iterationDuration;if(t===ft&&(t=0),et(e))return t;if(ni(+e))return+e;let n=e,s=i?i.labels:null,r=!Fi(s),o=uw(i,n),a=!et(o),l=Gx.exec(n);if(l){let c=l[0],h=n.split(c),d=r&&h[0]?s[h[0]]:t,u=a?o:r?d:t,f=+h[1];return la(u,f,c[0])}else return a?o:r?et(s[n])?t:s[n]:t};var rg={};Df(rg,{clamp:()=>yn,damp:()=>vw,degToRad:()=>_w,lerp:()=>as,mapRange:()=>gw,padEnd:()=>pw,padStart:()=>fw,radToDeg:()=>xw,round:()=>gt,roundPad:()=>dw,snap:()=>$x,wrap:()=>mw});var dw=(i,e)=>(+i).toFixed(e),fw=(i,e,t)=>`${i}`.padStart(e,t),pw=(i,e,t)=>`${i}`.padEnd(e,t),mw=(i,e,t)=>((i-e)%(t-e)+(t-e))%(t-e)+e,gw=(i,e,t,n,s)=>n+(i-e)/(t-e)*(s-n),_w=i=>i*Math.PI/180,xw=i=>i*180/Math.PI,vw=(i,e,t,n)=>n?n===1?e:as(i,e,1-Math.exp(-n*t*.1)):i;var gv={_head:null,_tail:null},_v=(i,e,t)=>{let n=gv._head,s;for(;n;){let r=n._next,o=n.$el===i,a=!e||n.property===e,l=!t||n.parent===t;if(o&&a&&l){s=n.animation;try{s.commitStyles()}catch{}s.cancel(),Yn(gv,n);let c=n.parent;c&&(c._completed++,c.animations.length===c._completed&&(c.completed=!0,c.paused=!0,c.muteCallbacks||(c.onComplete(c),c._resolve(c))))}n=r}return s};function xv(i,e,t){let n=zs(i);if(!n.length)return;let[s]=n,r=lh(s,e),o=ca(e,s,r),a=zi(s,o);if(et(t))return a;if(bn(a,en),en.t===ot.NUMBER||en.t===ot.UNIT){if(t===!1)return en.n;{let l=dh(s,en,t,!1);return`${gt(l.n,bt.precision)}${l.u}`}}}var vv=(i,e)=>{if(!et(e))return bt.editor&&bt.editor.addSet?bt.editor.addSet(i,e):(e.duration=ft,e.composition=Ht(e.composition,zt.none),new pa(i,e,null,0,!0).resume())},yv=(i,e,t)=>{let n=tg(i);for(let s=0,r=n.length;s<r;s++)_v(n[s],t,e&&e.controlAnimation&&e);return Qm(n,e,t),n};var bv=(i=$t)=>new ua({duration:1*bt.timeScale,onComplete:i},null,0).resume(),Sv=i=>{let e;return((...t)=>{let n,s,r,o,a;e&&(n=e.currentIteration,s=e.iterationProgress,r=e.reversed,o=e._alternate,a=e._startTime,e.revert());let l=i(...t);return l&&!Nn(l)&&l.revert&&(e=l),et(s)||(e.currentIteration=n,e.iterationProgress=(o&&n%2?!r:r)?1-s:s,e._startTime=a),l||$t})};var mh={};Df(mh,{$:()=>zs,addChild:()=>si,clamp:()=>Dv,cleanInlineStyles:()=>nv,createSeededRandom:()=>mf,damp:()=>Uv,degToRad:()=>Rv,forEachChildren:()=>At,get:()=>xv,keepTime:()=>Sv,lerp:()=>Nv,mapRange:()=>Cv,padEnd:()=>wv,padStart:()=>Av,radToDeg:()=>Iv,random:()=>ma,randomPick:()=>Ov,remove:()=>yv,removeChild:()=>Yn,round:()=>Lv,roundPad:()=>Tv,set:()=>vv,shuffle:()=>gf,snap:()=>Pv,stagger:()=>ga,sync:()=>bv,wrap:()=>Ev});var ri=rg,pf={},yw=(i,e=0)=>(...t)=>e?n=>i(...t,n):n=>i(n,...t),Mv=i=>(...e)=>{let t=i(...e);return new Proxy($t,{apply:(n,s,[r])=>t(r),get:(n,s)=>{if(pf[s])return Mv((...r)=>{let o=pf[s](...r);return a=>o(t(a))})}})},oi=(i,e,t=0)=>{let n=(...s)=>(s.length<e.length?Mv(yw(e,t)):e)(...s);return pf[i]||(pf[i]=n),n},Tv=oi("roundPad",ri.roundPad),Av=oi("padStart",ri.padStart),wv=oi("padEnd",ri.padEnd),Ev=oi("wrap",ri.wrap),Cv=oi("mapRange",ri.mapRange),Rv=oi("degToRad",ri.degToRad),Iv=oi("radToDeg",ri.radToDeg),Pv=oi("snap",ri.snap),Dv=oi("clamp",ri.clamp),Lv=oi("round",ri.round),Nv=oi("lerp",ri.lerp,1),Uv=oi("damp",ri.damp,1);var ma=(i=0,e=1,t=0)=>{let n=10**t;return Math.floor((Math.random()*(e-i+1/n)+i)*n)/n},bw=0,mf=(i,e=0,t=1,n=0)=>{let s=i===void 0?bw++:i;return(r=e,o=t,a=n)=>{s+=1831565813,s=Math.imul(s^s>>>15,s|1),s^=s+Math.imul(s^s>>>7,s|61);let l=10**a;return Math.floor((((s^s>>>14)>>>0)/4294967296*(o-r+1/l)+r)*l)/l}},Ov=i=>i[ma(0,i.length-1)],gf=(i,e=ma)=>{let t=i.length,n,s;for(;t;)s=e(0,--t),n=i[t],i[t]=i[s],i[s]=n;return i};var ga=(i,e={})=>{let t=[],n=0,s,r=null,o=e.from,a=e.reversed,l=e.ease,c=!et(l),d=c&&!et(l.ease)?l.ease:c?ph(l):null,u=e.grid,f=u===!0,p=e.axis,_=e.total,m=et(o)||o===0||o==="first",g=o==="center",b=o==="last",S=o==="random",x=qn(o),A=qn(i),M=e.use,C=A?Qd(i[0]):Qd(i),y=A?Qd(i[1]):0,w=Jd.exec((A?i[1]:i)+ti),I=e.start||0+(A?C:0),D=e.seed,q=!et(D)&&D!==!1?mf(D===!0?0:D):ma,Y=e.jitter,U=!et(Y),k=qn(Y),G=k?Y[0]:Y||0,K=k?Y[1]:Y||0,V=m?0:ni(o)?o:0;return(re,le,me,tt,pt)=>{let[je]=zs(re),X=et(_)?me.length:_,de=et(M)?!1:Nn(M)?M(je,le,X):zi(je,M),se=ni(de)||ii(de)&&ni(+de)?+de:le,fe=se>=0&&se<X?se:le;if(g&&(V=(X-1)/2),b&&(V=X-1),!t.length){if(f){let De=!0,Me=!1,Q=1/0,ie=1/0,j=1/0,he=-1/0,ue=-1/0,Ce=-1/0,Re=[],Ne=[],Ve=[];for(let P=0;P<X;P++){let $e=me[P],Ue=0,E=0,v=0,O=!1;if($e&&Nn($e.getBoundingClientRect)){let z=$e.getBoundingClientRect();Ue=z.left+z.width/2,E=z.top+z.height/2,O=!0}else{let z=$e;z&&ni(z.x)&&ni(z.y)&&(Ue=z.x,E=z.y,ni(z.z)&&(v=z.z,Me=!0),O=!0)}if(!O){De=!1;break}Re.push(Ue),Ne.push(E),Ve.push(v),Ue<Q&&(Q=Ue),E<ie&&(ie=E),v<j&&(j=v),Ue>he&&(he=Ue),E>ue&&(ue=E),v>Ce&&(Ce=v)}if(De){let P=Re[0],$e=Ne[0],Ue=Ve[0];x?(P=Q+o[0]*(he-Q),$e=ie+o[1]*(ue-ie),Ue=Me?j+(o.length>=3?o[2]:.5)*(Ce-j):0):g?(P=(Q+he)/2,$e=(ie+ue)/2,Ue=(j+Ce)/2):b?(P=Re[X-1],$e=Ne[X-1],Ue=Ve[X-1]):ni(o)&&(P=Re[o],$e=Ne[o],Ue=Ve[o]);for(let v=0;v<X;v++){let O=P-Re[v],z=$e-Ne[v],$=Ue-Ve[v],ce=rh(O*O+z*z+(Me?$*$:0));p==="x"&&(ce=-O),p==="y"&&(ce=-z),p==="z"&&(ce=-$),t.push(ce)}let E=1/0;for(let v=0;v<X;v++){let O=Ar(t[v]);O>0&&O<E&&(E=O)}if(E>0&&E<1/0)for(let v=0;v<X;v++)t[v]=t[v]/E}else for(let P=0;P<X;P++)t.push(Ar(V-P))}else for(let De=0;De<X;De++)if(!u)t.push(Ar(V-De));else{let Me=u.length,Q=u[0]*u[1],ie,j,he;x?(ie=o[0]*(u[0]-1),j=o[1]*(u[1]-1),he=Me===3?(o.length>=3?o[2]:.5)*(u[2]-1):0):g?(ie=(u[0]-1)/2,j=(u[1]-1)/2,he=Me===3?(u[2]-1)/2:0):(ie=V%u[0],j=Er(V/u[0])%u[1],he=Me===3?Er(V/Q):0);let ue=De%u[0],Ce=Er(De/u[0])%u[1],Re=Me===3?Er(De/Q):0,Ne=ie-ue,Ve=j-Ce,P=he-Re,$e=rh(Ne*Ne+Ve*Ve+(Me===3?P*P:0));p==="x"&&($e=-Ne),p==="y"&&($e=-Ve),p==="z"&&($e=-P),t.push($e)}n=t[0];for(let De=1;De<X;De++)t[De]>n&&(n=t[De]);if(d||a)for(let De=0;De<X;De++){let Me=t[De];d&&(Me=d(Me/n)*n),a&&(Me=p?-Me:Ar(n-Me)),t[De]=Me}if(U){r=new Array(X);for(let De=0;De<X;De++)r[De]=q(-1,1,4)}S&&(t=gf(t,q))}let ze=A?(y-C)/n:C;et(s)&&(s=pt?mv(pt,et(e.start)?pt.iterationDuration:I):I);let Le=s+(ze*gt(t[fe],2)||0);if(U){let De=n?t[fe]/n:0,Me=G+(K-G)*De;Le=Le+r[fe]*Me}return e.modifier&&(Le=e.modifier(Le)),w&&(Le=`${Le}${w[2]}`),Le}};var _f=[{id:"overseer_prime",name:"OVERSEER PRIME",role:"Apex of the Parent \xB7 arena controller",echoes:["collective-ai"],loco:"colossus",seed:1001,cBot:"#3A2E12",cTop:"#D4A843",accent:"#FFE9B0",eye:"#050A18",scale:2.4,body:[1.1,1.6],head:.7,legs:1.4,arms:1.1,neck:.3,crown:!0,parent:!0,plates:!0,hpMult:8,segments:0,signature:"doctrine_nodes_and_stomp_rings"},{id:"synapse_swarm",name:"SYNAPSE SWARM",role:"Zenflow apex \xB7 core + independent drones",echoes:["zenflow"],loco:"swarm_host",seed:1002,cBot:"#2A1458",cTop:"#7C3AED",accent:"#3B82F6",eye:"#F5F5F5",scale:1.6,body:[.9,.85],head:.55,arms:.6,tendrils:6,wing:.8,hpMult:4,segments:6,signature:"detachable_drone_turrets"},{id:"revenue_colossus",name:"REVENUE COLOSSUS",role:"The Collective apex \xB7 economy siege engine",echoes:["the-collective"],loco:"colossus",seed:1003,cBot:"#032A21",cTop:"#067A56",accent:"#FEF3C7",eye:"#FEF3C7",scale:2.2,body:[1,1.5],head:.55,legs:1.2,arms:.9,neck:.2,ears:"point",belly:"#B45309",coin:!0,hpMult:7,segments:0,signature:"credit_siphon_on_contact"},{id:"tutor_wraith",name:"TUTOR WRAITH",role:"Hybrid Living apex \xB7 phase instructor",echoes:["hybrid-living"],loco:"phase",seed:1004,cBot:"#075985",cTop:"#0EA5E9",accent:"#FDE047",eye:"#050A18",scale:1.5,body:[.7,.9],head:.65,legs:.9,arms:.75,neck:.15,ears:"round",hpMult:3.5,segments:0,signature:"phase_dash_residual_fields"},{id:"narrative_lens",name:"NARRATIVE LENS",role:"Nexus Labs apex \xB7 team-wide mark battery",echoes:["nexus-labs"],loco:"orbital",seed:1005,cBot:"#5B0F0F",cTop:"#DC2626",accent:"#F87171",eye:"#F5F5F5",scale:1.7,body:[.85,.7],head:.85,arms:.5,lens:!0,hpMult:5,segments:4,signature:"team_damage_mark"},{id:"velocity_hound",name:"VELOCITY HOUND",role:"Kinetic + Signal apex \xB7 trail storm",echoes:["kinetic-edge","signal-velocity"],loco:"storm",seed:1006,cBot:"#14532D",cTop:"#F43F5E",accent:"#86EFAC",eye:"#F5F5F5",scale:1.8,body:[.6,1.4],head:.45,legs:1.3,neck:.4,ears:"point",tail:"spring",sprint:!0,hpMult:4,segments:0,signature:"wind_trails_deflect_projectiles"},{id:"ledger_orbital",name:"LEDGER ORBITAL",role:"Quantum Ledger apex \xB7 predictive battery",echoes:["quantum-ledger"],loco:"orbital",seed:1007,cBot:"#4C1D95",cTop:"#8B5CF6",accent:"#C4B5FD",eye:"#FDE047",scale:1.9,body:[1.1,.6],head:0,ears:"antenna",coin:!0,hpMult:5.5,segments:5,signature:"prediction_beams"},{id:"owl_of_judgment",name:"OWL OF JUDGMENT",role:"Juris Guard apex \xB7 ability-tax zone",echoes:["juris-guard"],loco:"anchor",seed:1008,cBot:"#4A3A16",cTop:"#C9A84C",accent:"#E8D9A8",eye:"#E8D9A8",scale:2,body:[.95,1],head:.75,arms:.6,wing:1.4,beak:!0,brows:!0,hpMult:6,segments:0,signature:"jurisdiction_ability_tax_circle"},{id:"cognara_mirror",name:"COGNARA MIRROR",role:"Cognara Mind apex \xB7 ability thief (last-used only)",echoes:["cognara"],loco:"mirror",seed:1009,cBot:"#6D1145",cTop:"#E0267E",accent:"#FF85C2",eye:"#F5F5F5",scale:1.7,body:[1,.85],head:.65,arms:.7,tendrils:5,wing:.6,brain:!0,hpMult:4.5,segments:0,signature:"copy_last_player_ability"},{id:"terra_siege",name:"TERRA SIEGE",role:"Terra Axis apex \xB7 mobile cover factory",echoes:["terra-axis"],loco:"colossus",seed:1010,cBot:"#450A0A",cTop:"#8C2B2B",accent:"#DC8484",eye:"#F5F5F5",scale:2.3,body:[1.2,1.5],head:.55,legs:1.1,neck:.25,ears:"round",plates:!0,hpMult:9,segments:0,signature:"deploy_and_bulldoze_cover"},{id:"loom_hydra",name:"LOOM HYDRA",role:"Binary Loom apex \xB7 vertical multi-head hybrid",echoes:["binary-loom"],loco:"helix_titan",hybrid:["swarm_host"],seed:1011,cBot:"#3F6212",cTop:"#A3E635",accent:"#F8FAFC",eye:"#050505",scale:2.1,body:[.9,1.8],head:.5,legs:.9,neck:.15,ears:"antenna",helix:!0,hpMult:6.5,segments:3,signature:"over_cover_coil_and_heads"},{id:"eon_anchor",name:"EON ANCHOR",role:"Eon Core apex \xB7 local time dilation",echoes:["eon-core"],loco:"anchor",seed:1012,cBot:"#C8BCA4",cTop:"#FFFBEB",accent:"#E8DCC8",eye:"#070C14",scale:2,body:[1,1.4],head:0,hourglass:!0,hpMult:7,segments:0,signature:"local_time_dilation_field"}],un=Object.fromEntries(_f.map(i=>[i.id,i])),Fv=["colossus","swarm_host","phase","orbital","anchor","storm","mirror","helix_titan"];function xf(i){if(!i)return[];let e=i.loco?[i.loco]:[],t=Array.isArray(i.hybrid)?i.hybrid:[];return[...new Set([...e,...t])]}function Un(i,e={}){let t=i.scale||1.5,n=i.segments||0;return{radius:Math.round(80+t*40),duration:+(2.4+t*.6).toFixed(1),count:n||Math.max(1,Math.round(t)),damage:Math.round(18+(i.hpMult||4)*3),telegraphMs:900,...e}}var og={overseer_prime:{primary:{id:"doctrine_nodes",name:"DOCTRINE NODES",tags:["zone","buff"],telegraph:"Gold rings plant on the lattice",params:Un(un.overseer_prime,{radius:120,duration:8,count:3}),onHit:[{type:"zone",effect:"bot_buff",amount:.15},{type:"zone",effect:"slow",amount:.25}],cooldown:14},secondary:{id:"stomp_rings",name:"STOMP RINGS",tags:["stomp","aoe"],telegraph:"Colossus raises a foot",params:Un(un.overseer_prime,{radius:160,count:3}),onHit:[{type:"stomp",effect:"damage",rings:3}],cooldown:9}},synapse_swarm:{primary:{id:"detach_drones",name:"DETACH DRONES",tags:["segment","swarm"],telegraph:"Tendrils split into independent turrets",params:Un(un.synapse_swarm,{count:6,duration:12}),onHit:[{type:"segment",effect:"spawn_turret",hpFrac:.12}],cooldown:16}},revenue_colossus:{primary:{id:"credit_siphon",name:"CREDIT SIPHON",tags:["zone","economy"],telegraph:"Coin-ring aura expands",params:Un(un.revenue_colossus,{radius:100,duration:5}),onHit:[{type:"zone",effect:"credit_steal",amount:80}],cooldown:12}},tutor_wraith:{primary:{id:"phase_dash",name:"PHASE DASH",tags:["phase","trail"],telegraph:"Silhouette flickers translucent",params:Un(un.tutor_wraith,{duration:1.2,radius:70}),onHit:[{type:"phase",effect:"intangible"},{type:"trail",effect:"residual_dot",duration:3}],cooldown:7}},narrative_lens:{primary:{id:"team_mark",name:"NARRATIVE FRAME",tags:["mark","team"],telegraph:"Lens plates lock onto one target",params:Un(un.narrative_lens,{duration:6}),onHit:[{type:"mark",effect:"team_damage_amp",amount:.3},{type:"mark",effect:"reveal"}],cooldown:11}},velocity_hound:{primary:{id:"wind_trails",name:"WIND TRAILS",tags:["trail","storm"],telegraph:"Sprint form blurs into corridors",params:Un(un.velocity_hound,{duration:4,count:3}),onHit:[{type:"trail",effect:"deflect_projectiles"},{type:"trail",effect:"speed_alter",amount:-.2}],cooldown:10}},ledger_orbital:{primary:{id:"prediction_beams",name:"PREDICTION BEAMS",tags:["orbital","predict"],telegraph:"Ledger rings align to future positions",params:Un(un.ledger_orbital,{count:5,damage:28}),onHit:[{type:"zone",effect:"predictive_hit",leadMs:400}],cooldown:8}},owl_of_judgment:{primary:{id:"jurisdiction",name:"JURISDICTION",tags:["zone","tax"],telegraph:"Owl roots; legal-seal eyes flare",params:Un(un.owl_of_judgment,{radius:140,duration:7}),onHit:[{type:"zone",effect:"ability_tax",cooldownMul:1.5}],cooldown:15}},cognara_mirror:{primary:{id:"mirror_last",name:"MIRROR LAST",tags:["copy","mirror"],telegraph:"Reflective shell records the last ability used",params:Un(un.cognara_mirror,{duration:5}),onHit:[{type:"copy",effect:"last_player_ability",source:"last_player_ability"}],cooldown:13}},terra_siege:{primary:{id:"cover_factory",name:"COVER FACTORY",tags:["zone","cover"],telegraph:"Siege beetle deploys plate stacks",params:Un(un.terra_siege,{count:2,duration:10}),onHit:[{type:"zone",effect:"deploy_cover",cells:3},{type:"zone",effect:"bulldoze",chance:.4}],cooldown:14}},loom_hydra:{primary:{id:"coil_strike",name:"COIL STRIKE",tags:["helix","reach"],telegraph:"Spiral torso uncoils over cover",params:Un(un.loom_hydra,{radius:180,duration:2}),onHit:[{type:"zone",effect:"over_cover_damage"}],cooldown:9},secondary:{id:"hydra_heads",name:"HYDRA HEADS",tags:["segment","swarm"],telegraph:"Three attack heads detach from the coil",params:Un(un.loom_hydra,{count:3,duration:8}),onHit:[{type:"segment",effect:"spawn_head",hpFrac:.18}],cooldown:18}},eon_anchor:{primary:{id:"time_dilation",name:"TIME DILATION",tags:["zone","time_scale"],telegraph:"Hourglass lobes rotate; local time stretches",params:Un(un.eon_anchor,{radius:130,duration:6}),onHit:[{type:"time_scale",effect:"slow_projectiles",amount:.45},{type:"time_scale",effect:"slow_movement",amount:.35}],cooldown:16}}};function Bv(i,e,t="primary"){let n=og[i.id];if(!n)return null;let s=n[t];if(!s)return null;let r=e.now||performance.now()/1e3;if(i.abilityCd&&i.abilityCd[t]>r)return null;let o={id:s.id,name:s.name,telegraph:s.telegraph,params:s.params,onHit:s.onHit,tags:s.tags};return i.abilityCd=i.abilityCd||{},i.abilityCd[t]=r+(s.cooldown||10),i.id==="cognara_mirror"&&s.id==="mirror_last"&&(o.copiedAbilityId=e.lastPlayerAbilityId||null,o.copiedAbilityId||(o.skipped=!0,o.reason="no_player_ability_recorded")),o}var ks=Math.PI*2;function Rr(i,e,{emissive:t=e,emissiveIntensity:n=.16,metalness:s=.45,roughness:r=.38,transparent:o=!1,opacity:a=1}={}){return new i.MeshStandardMaterial({color:e,emissive:t,emissiveIntensity:n,metalness:s,roughness:r,transparent:o,opacity:a})}function nn(i,e,t,n,s,{position:r=[0,0,0],scale:o=[1,1,1],rotation:a=[0,0,0],name:l=""}={}){let c=new i.Mesh(t,n);return c.name=l,c.position.set(...r),c.scale.set(...o),c.rotation.set(...a),c.castShadow=!0,c.receiveShadow=!0,e.add(c),s.push(c),c}function zv(i,e,t,n,s,{x:r,z:o,upperY:a,lowerY:l,scale:c,phase:h}){let d=new i.Group;d.position.set(r,a,o),e.add(d);let u=nn(i,d,new i.CapsuleGeometry(.12*c,.46*c,5,8),t,n,{position:[0,-.28*c,0],rotation:[0,0,r<0?-.08:.08]}),f=nn(i,d,new i.BoxGeometry(.28*c,.16*c,.5*c),t,n,{position:[0,l-a,.12*c]});s.push({pivot:d,upper:u,foot:f,phase:h,restY:f.position.y})}function Sw(i,e,t,n,s,r){let o=(t.body?.[0]||.9)*n,a=(t.body?.[1]||1.1)*n,l=nn(i,e,new i.SphereGeometry(1,22,16),s.skin,r,{position:[0,1.28*n,0],scale:[o,a*.72,o*.88],name:"apex-core"}),c=nn(i,e,new i.IcosahedronGeometry(1,1),s.armor,r,{position:[0,1.38*n,-.08*n],scale:[o*1.04,a*.34,o*.94],name:"apex-carapace"}),h=null;return(t.head||0)>0&&(h=nn(i,e,new i.SphereGeometry(1,18,12),s.skin,r,{position:[0,2.18*n,.12*n],scale:[t.head*n,t.head*n*.82,t.head*n],name:"apex-head"}),nn(i,h,new i.BoxGeometry(.72,.16,.12),s.eye,r,{position:[0,.04,.9],name:"apex-visor"})),{torso:l,armor:c,head:h}}function Mw(i,e,t){let{body:n,scale:s,parts:r,limbs:o}=e;for(let a of[-1,1])zv(i,n,t.armor,r,o,{x:a*.62*s,z:-.38*s,upperY:.96*s,lowerY:.13*s,scale:1.15*s,phase:a<0?0:Math.PI}),zv(i,n,t.armor,r,o,{x:a*.62*s,z:.4*s,upperY:.92*s,lowerY:.13*s,scale:s,phase:a<0?Math.PI:0});e.stompRing=nn(i,n,new i.TorusGeometry(1.15*s,.055*s,8,36),t.energy,r,{position:[0,.12,0],rotation:[Math.PI/2,0,0],name:"stomp-telegraph"})}function Tw(i,e,t,n=!1){let s=e.dna.segments||4;for(let r=0;r<s;r++){let o=new i.Group;e.body.add(o);let a=nn(i,o,n?new i.ConeGeometry(.24*e.scale,.72*e.scale,8):new i.OctahedronGeometry(.34*e.scale,1),r%2?t.accent:t.energy,e.parts,{rotation:n?[Math.PI/2,0,0]:[0,0,0],name:n?`hydra-head-${r+1}`:`swarm-drone-${r+1}`}),l=nn(i,a,new i.SphereGeometry(.09*e.scale,10,8),t.eye,e.parts,{position:[0,n?.22*e.scale:.08*e.scale,n?.34*e.scale:.3*e.scale]});e.segments.push({type:n?"head":"drone",index:r,alive:!0,hpFraction:n?.18:.12,anchor:o,mesh:a,eye:l,orbit:.86*e.scale+r*.07,phase:r/s*ks})}}function Aw(i,e,t){e.phaseShells=[];for(let n=0;n<3;n++){let s=nn(i,e.body,new i.IcosahedronGeometry(1,1),Rr(i,e.dna.accent,{transparent:!0,opacity:.13,metalness:.15,roughness:.2,emissiveIntensity:.8}),e.parts,{position:[0,1.36*e.scale,0],scale:[1.05+n*.13,1.25+n*.16,.82+n*.12].map(r=>r*e.scale),name:`phase-echo-${n+1}`});e.phaseShells.push(s)}}function ww(i,e,t){let n=e.dna.segments||4;for(let s=0;s<n;s++){let r=new i.Group;e.body.add(r);let o=nn(i,r,new i.TorusGeometry(.34*e.scale,.08*e.scale,8,24),s%2?t.accent:t.energy,e.parts,{rotation:[Math.PI/2,s*.37,0],name:`orbital-segment-${s+1}`});e.segments.push({type:"ring",index:s,alive:!0,hpFraction:.14,anchor:r,mesh:o,orbit:.75*e.scale+s%2*.32*e.scale,phase:s/n*ks})}}function Ew(i,e,t){e.roots=[];for(let n=0;n<8;n++){let s=nn(i,e.body,new i.ConeGeometry(.13*e.scale,1.08*e.scale,7),n%2?t.armor:t.accent,e.parts,{position:[Math.cos(n/8*ks)*.54*e.scale,.34*e.scale,Math.sin(n/8*ks)*.54*e.scale],rotation:[0,0,Math.PI*.43],name:`anchor-root-${n+1}`});s.rotation.y=-n/8*ks,e.roots.push(s)}}function Cw(i,e,t){e.wings=[];for(let n of[-1,1]){let s=new i.Group;s.position.set(n*.54*e.scale,1.55*e.scale,-.12*e.scale),e.body.add(s);for(let r=0;r<3;r++)nn(i,s,new i.ConeGeometry(.16*e.scale,(.86-r*.12)*e.scale,6),r%2?t.energy:t.accent,e.parts,{position:[n*r*.16*e.scale,0,-r*.22*e.scale],rotation:[Math.PI/2,0,n*(Math.PI/2+.25)],name:`storm-vane-${n}-${r}`});e.wings.push({wing:s,side:n})}}function Rw(i,e,t){e.mirrorShell=nn(i,e.body,new i.DodecahedronGeometry(1.15*e.scale,0),Rr(i,e.dna.accent,{transparent:!0,opacity:.34,metalness:.95,roughness:.08,emissiveIntensity:.34}),e.parts,{position:[0,1.38*e.scale,0],scale:[1,.86,1],name:"mirror-shell"}),e.tendrils=[];for(let n=0;n<(e.dna.tendrils||5);n++){let s=nn(i,e.body,new i.TorusKnotGeometry(.18*e.scale,.035*e.scale,32,6,2,3),n%2?t.accent:t.energy,e.parts,{position:[Math.cos(n/5*ks)*.68*e.scale,.72*e.scale,Math.sin(n/5*ks)*.68*e.scale],scale:[.7,.7,.7],name:`mirror-tendril-${n+1}`});e.tendrils.push(s)}}function Iw(i,e,t){e.coil=[];let n=12;for(let s=0;s<n;s++){let r=s/(n-1),o=r*ks*1.75,a=nn(i,e.body,new i.SphereGeometry((.31-r*.09)*e.scale,14,10),s%2?t.accent:t.skin,e.parts,{position:[Math.cos(o)*.42*e.scale,(.44+r*2.5)*e.scale,Math.sin(o)*.42*e.scale],name:`helix-bead-${s+1}`});a.userData.helixT=r,a.userData.helixPhase=o,e.coil.push(a)}}function Pw(i,e,t){if(e.dna.crown){e.crown=new i.Group,e.crown.position.y=2.82*e.scale,e.body.add(e.crown);for(let n=0;n<5;n++)nn(i,e.crown,new i.ConeGeometry(.11*e.scale,.5*e.scale,6),t.energy,e.parts,{position:[(n-2)*.22*e.scale,0,Math.abs(n-2)*.06],name:`crown-spire-${n+1}`})}(e.dna.coin||e.dna.hourglass)&&(e.motif=nn(i,e.body,e.dna.coin?new i.TorusGeometry(.62*e.scale,.1*e.scale,10,32):new i.OctahedronGeometry(.62*e.scale,0),t.energy,e.parts,{position:[0,1.48*e.scale,.84*e.scale],rotation:[Math.PI/2,0,0],name:e.dna.coin?"ledger-motif":"hourglass-motif"}))}function Vv(i,e={}){let t=i.dna||i,n=xf(t),s=t.scale||1.8;if(!e.THREE)return{root:null,body:null,locos:n,hybrid:n.length>1,segments:[],parts:[],limbs:[],dna:t,scale:s,stub:!0,signature:t.signature,hitProxy:{radius:Math.round(22+s*18)}};let{THREE:r,scene:o,S:a=.1}=e,l=new r.Group;l.name=`boss-${t.id||"apex"}`,l.position.set((i.x||0)*a,0,(i.y||0)*a),o&&o.add(l);let c=new r.Group;l.add(c);let h={skin:Rr(r,t.cTop||"#888888",{emissiveIntensity:.12,roughness:.5}),armor:Rr(r,t.cBot||"#151923",{emissive:t.cTop||"#333333",emissiveIntensity:.08,metalness:.72}),accent:Rr(r,t.accent||"#ffffff",{emissiveIntensity:.38,metalness:.62,roughness:.24}),energy:Rr(r,t.accent||"#ffffff",{emissiveIntensity:1.25,metalness:.2,roughness:.16}),eye:Rr(r,t.eye||"#ffffff",{emissiveIntensity:1.8,metalness:.05,roughness:.12})},d={root:l,body:c,locos:n,hybrid:n.length>1,segments:[],parts:[],limbs:[],dna:t,scale:s,stub:!1,signature:t.signature,topY:3.2*s,hitProxy:{radius:Math.round(22+s*18)},phase:0,materials:h};Object.assign(d,Sw(r,c,t,s,h,d.parts)),n.includes("colossus")&&Mw(r,d,h),n.includes("phase")&&Aw(r,d,h),n.includes("orbital")&&ww(r,d,h),n.includes("anchor")&&Ew(r,d,h),n.includes("storm")&&Cw(r,d,h),n.includes("mirror")&&Rw(r,d,h),n.includes("helix_titan")&&Iw(r,d,h),n.includes("swarm_host")&&Tw(r,d,h,n.includes("helix_titan")),Pw(r,d,h);let u=nn(r,l,new r.CircleGeometry(d.hitProxy.radius*a,32),new r.MeshBasicMaterial({color:0,transparent:!0,opacity:.38,depthWrite:!1}),d.parts,{position:[0,.025,0],rotation:[-Math.PI/2,0,0],name:"boss-shadow"});return d.shadow=u,d}function kv(i,e,t,n={}){if(!i||i.stub||!i.root)return;i.phase+=e*(.8+Math.min(2.4,(n.speed||0)/90));let s=Math.min(1,(n.speed||0)/160),r=i.phase*(2.2+s*3.8),o=Math.max(0,n.hit||0);Number.isFinite(n.angle)&&(i.root.rotation.y=Math.PI/2-n.angle),i.body.position.y=Math.sin(r*.5)*.035*i.scale*(.35+s),i.body.scale.setScalar(1+o*.06);for(let a of i.limbs){let l=Math.sin(r+a.phase)*(.2+s*.48);a.pivot.rotation.x=l,a.foot.position.y=a.restY+Math.max(0,-Math.sin(r+a.phase))*.16*i.scale}for(let a of i.segments){if(!a.alive){a.anchor.visible=!1;continue}a.anchor.visible=!0;let l=t*(a.type==="head"?.85:1.25)+a.phase;a.anchor.position.set(Math.cos(l)*a.orbit,(a.type==="head"?2.25:1.75)*i.scale+Math.sin(l*1.7)*.22*i.scale,Math.sin(l)*a.orbit),a.anchor.rotation.y=-l+Math.PI/2,a.mesh.rotation.z+=e*(a.type==="ring"?2.2:.9)}if(i.phaseShells&&i.phaseShells.forEach((a,l)=>{let c=1+Math.sin(t*5+l*1.8)*.07;a.scale.multiplyScalar(c/(a.userData.lastPulse||1)),a.userData.lastPulse=c,a.material.opacity=.08+.12*(.5+.5*Math.sin(t*8+l)),a.rotation.y+=e*(.3+l*.17)}),i.roots&&i.roots.forEach((a,l)=>{a.scale.y=.86+Math.sin(t*2.3+l)*.14}),i.wings&&i.wings.forEach(({wing:a,side:l})=>{a.rotation.z=l*(.2+Math.sin(t*8.5)*.42),a.rotation.x=Math.sin(t*4.2+l)*.12}),i.mirrorShell&&(i.mirrorShell.rotation.y+=e*.7,i.mirrorShell.rotation.x=Math.sin(t*.9)*.18),i.tendrils&&i.tendrils.forEach((a,l)=>{a.rotation.y=t*(l%2?-.8:.8),a.rotation.z=Math.sin(t*2.2+l)*.28}),i.coil){let a=n.telegraph?.72:.18+s*.12;for(let l of i.coil){let c=l.userData.helixT,h=l.userData.helixPhase+t*.85,d=(.38+a*c)*i.scale;l.position.set(Math.cos(h)*d,(.44+c*(2.45+a))*i.scale,Math.sin(h)*d)}}if(i.crown&&(i.crown.rotation.y+=e*.28),i.motif&&(i.motif.rotation.z+=e*.7),i.stompRing){let a=n.telegraph?1:0;i.stompRing.material.emissiveIntensity=.6+a*1.8,i.stompRing.scale.setScalar(1+a*(.15+.1*Math.sin(t*14)))}}var ag=Object.freeze({standard:Object.freeze({id:"standard",name:"TACTICAL",description:"Classic first-to-six spike match, followed by an Apex Challenge for the winning squad.",squadSize:5,apexAfterMatch:!0,totalWaves:0}),boss:Object.freeze({id:"boss",name:"BOSS MODE",description:"Deploy a five-operator squad against one random Apex boss and its reinforcements.",squadSize:5,apexAfterMatch:!1,totalWaves:1}),wave:Object.freeze({id:"wave",name:"WAVE MODE",description:"Choose five operators, clear every unselected division, then defeat a random Apex boss.",squadSize:5,apexAfterMatch:!1,totalWaves:5})});function Gv(i,e,t,n=5){let s=new Set(e),r=[],o=a=>{s.has(a)&&!r.includes(a)&&r.length<n&&r.push(a)};o(t);for(let a of i||[])o(a);return r}function Dw(i,e){let t=[...i];for(let n=t.length-1;n>0;n--){let s=Math.max(0,Math.min(n,Math.floor(e()*(n+1))));[t[n],t[s]]=[t[s],t[n]]}return t}function Hv(i,e=Math.random,t=null){if(!i?.length)return null;let n=i.length>1&&t?i.filter(r=>r!==t):[...i],s=Math.max(0,Math.min(n.length-1,Math.floor(e()*n.length)));return n[s]||null}function Wv({operatorIds:i,squadIds:e,bossId:t,rng:n=Math.random,characterWaveCount:s=ag.wave.totalWaves-1}){let r=new Set(e),o=Dw(i.filter(d=>!r.has(d)),n),a=[],l=Math.floor(o.length/s),c=o.length%s,h=0;for(let d=0;d<s;d++){let u=l+(c-- >0?1:0);a.push({index:d+1,kind:"operators",operatorIds:o.slice(h,h+u),healthScale:+(1+d*.12).toFixed(2),damageScale:+(1+d*.08).toFixed(2)}),h+=u}return a.push({index:s+1,kind:"boss",bossId:t,operatorIds:[],healthScale:1,damageScale:1}),a}function lg({x:i,y:e,radius:t,tile:n,mapW:s,mapH:r}){let o=Math.max(0,Math.floor((i-t)/n)),a=Math.min(s-1,Math.floor((i+t)/n)),l=Math.max(0,Math.floor((e-t)/n)),c=Math.min(r-1,Math.floor((e+t)/n)),h=[];for(let d=l;d<=c;d++)for(let u=o;u<=a;u++){let f=Math.max(u*n,Math.min(i,(u+1)*n)),p=Math.max(d*n,Math.min(e,(d+1)*n)),_=i-f,m=e-p;_*_+m*m<=t*t&&h.push({x:u,y:d})}return h}function cg({x:i,y:e,radius:t,tile:n,grid:s,occupied:r=[]}){if(!s?.length||!s[0]?.length)return!1;let o=lg({x:i,y:e,radius:t,tile:n,mapW:s[0].length,mapH:s.length});return!o.length||o.some(a=>s[a.y]?.[a.x]===1)?!1:!r.some(a=>{if(!a||a.alive===!1)return!1;let l=a.radius||0;return Math.hypot(i-a.x,e-a.y)<t+l})}function Xv({zone:i,tile:e,radius:t,grid:n,players:s=[],minPlayerDistance:r=e*4,rng:o=Math.random,attempts:a=80}){let l=i.x*e+t,c=(i.x+i.w)*e-t,h=i.y*e+t,d=(i.y+i.h)*e-t;if(c<l||d<h)return null;for(let u=0;u<a;u++){let f={x:l+(c-l)*o(),y:h+(d-h)*o()};if(!cg({...f,radius:t,tile:e,grid:n}))continue;if(!s.some(_=>_.alive!==!1&&Math.hypot(f.x-_.x,f.y-_.y)<r))return f}return null}function qv({playlistId:i,scoreATK:e,scoreDEF:t,firstTo:n,apexComplete:s}){return i!=="standard"||s?null:e>=n?"ATK":t>=n?"DEF":null}var vf=Object.freeze({width:36,height:26,tile:40}),F=(i,e,t,n,s={})=>Object.freeze({x:i,y:e,w:t,h:n,...s}),Ke=(i,e,t,n,s,r={})=>Object.freeze({id:i,...F(e,t,n,s),...r}),ki=({accent:i,secondary:e,fog:t,fogDensity:n,background:s,floorTint:r,wall:o,outer:a,trim:l=i,particle:c=e,roughness:h=.66,metalness:d=.22,sky:u="enclosed",landmark:f})=>Object.freeze({accent:i,secondary:e,fog:t,fogDensity:n,background:s,floorTint:r,wall:o,outer:a,trim:l,particle:c,floorRoughness:h,floorMetalness:d,sky:u,landmark:f}),dg=Object.freeze({forge:Object.freeze({identity:Object.freeze({id:"forge",name:"NEON FOUNDRY",biome:"Vertical industrial furnace",recommendedMode:"TACTICAL",silhouette:"stepped cruciform refinery",tacticalSummary:"Own the furnace ring, climb the offset catwalk routes, or ride the conveyors through the dark perimeter before steam closes a sightline."}),topology:Object.freeze({floorZones:[F(1,1,34,24),F(0,10,36,6)],voids:[F(1,1,5,4),F(30,1,5,4),F(1,21,5,4),F(30,21,5,4)],blocks:[F(14,9,8,7,{kind:"furnace"}),F(7,5,3,5),F(26,16,3,5),F(3,12,4,2),F(29,12,4,2)],platforms:[F(2,6,9,3,{elevation:2.4}),F(25,17,9,3,{elevation:2.4}),F(11,6,4,2,{elevation:1.2}),F(21,18,4,2,{elevation:1.2})],ramps:[F(9,7,4,2,{from:0,to:2.4}),F(23,18,4,2,{from:0,to:2.4})],landmark:Object.freeze({type:"furnace-reactor",x:18,y:12.5,scale:2.8}),boundary:"armored heat shield and grated service edge"}),traversal:Object.freeze({mechanics:["elevated-catwalk","conveyor-push","under-furnace-flank"],routes:["west sniper gantry","furnace ring","east service conveyor","dark perimeter"]}),combat:Object.freeze({sites:[Ke("A",3,6,6,4),Ke("B",27,16,6,4)],spawns:Object.freeze({ATK:F(3,16,5,4),DEF:F(28,6,5,4)}),subspaces:["furnace control ring","west gantry","east conveyor","perimeter service trench"],coverDensity:"medium",sightlineProfile:"vertical crossfire with protected under-routes"}),hazards:[Ke("steam-west",10,9,3,5,{type:"steam",telegraph:1.2,active:3.2,cooldown:9,effect:"slow",strength:.45}),Ke("steam-east",23,12,3,5,{type:"steam",telegraph:1.2,active:3.2,cooldown:9,offset:4.5,effect:"slow",strength:.45}),Ke("furnace-heat",13,8,10,9,{type:"heat",telegraph:1.5,active:2.4,cooldown:12,effect:"damage",damagePerSecond:8,inset:1})],interactables:[Ke("conveyor-north",10,5,15,2,{type:"conveyor",vector:[1,0],strength:42}),Ke("conveyor-south",11,19,15,2,{type:"conveyor",vector:[-1,0],strength:42})],visuals:ki({accent:16742936,secondary:16317180,fog:1181702,fogDensity:.0046,background:197639,floorTint:7162170,wall:3422530,outer:131588,particle:16757339,roughness:.48,metalness:.56,sky:"smoke-stack",landmark:"white-hot furnace core"}),audio:Object.freeze({musicTier:"combat_4",ambience:["furnace-roar","chain-rattle","pressure-release"]}),runtimeModifiers:Object.freeze({cameraHeight:46,cameraLead:.08,ambientEvent:"steam-cycle",elevationScale:1}),bossCompatibility:Object.freeze({safeSpawnZones:[F(2,10,10,5),F(24,10,10,5)],minimumClearance:2,disabledHazardsDuringSpawn:!0})}),abyss:Object.freeze({identity:Object.freeze({id:"abyss",name:"SUNKEN ARCHIVE",biome:"Flooded mnemonic ruins",recommendedMode:"BOSS MODE",silhouette:"broken crescent around a raised sanctum",tacticalSummary:"The dry sanctum controls the map, but flooded flanks and collapsed stacks let squads fracture long sightlines and surface behind it."}),topology:Object.freeze({floorZones:[F(2,2,32,22),F(0,8,5,10),F(31,5,5,15)],voids:[F(2,2,7,3),F(27,21,7,3),F(1,18,6,5),F(30,2,5,5)],blocks:[F(16,11,4,3,{kind:"sanctum-core"}),F(6,7,2,6),F(9,16,6,2),F(24,5,2,7),F(27,14,5,2),F(4,13,3,2)],platforms:[F(13,8,10,9,{elevation:1.4})],ramps:[F(11,11,3,3,{from:0,to:1.4}),F(22,12,3,3,{from:1.4,to:0})],landmark:Object.freeze({type:"archive-sanctum",x:18,y:12.5,scale:2.5}),boundary:"collapsed seawall and black flooded depth"}),traversal:Object.freeze({mechanics:["shallow-water-slow","raised-sanctum","collapsed-stack-slalom"],routes:["raised sanctum","west flooded stacks","east moon pool","southern ruin breach"]}),combat:Object.freeze({sites:[Ke("A",14,9,8,7),Ke("B",26,16,5,4)],spawns:Object.freeze({ATK:F(4,5,5,3),DEF:F(27,18,5,3)}),subspaces:["central sanctum","flooded west archive","moon-pool flank","collapsed reading hall"],coverDensity:"high layered",sightlineProfile:"broken mid-range lanes with reflective low routes"}),hazards:[Ke("memory-surge",3,9,9,8,{type:"surge",telegraph:1.8,active:4,cooldown:13,effect:"slow",strength:.35}),Ke("mist-beat",23,7,10,10,{type:"mist",telegraph:1.4,active:4.5,cooldown:14,offset:6,effect:"visibility"})],interactables:[Ke("flooded-west",3,9,9,8,{type:"water",movementMultiplier:.86}),Ke("flooded-east",24,7,8,10,{type:"water",movementMultiplier:.88})],visuals:ki({accent:9684477,secondary:12891645,fog:463649,fogDensity:.0071,background:66826,floorTint:5073016,wall:5859444,outer:66569,particle:14412542,roughness:.72,metalness:.08,sky:"moonlit-ruin",landmark:"raised memory sanctum"}),audio:Object.freeze({musicTier:"combat_2",ambience:["distant-water","stone-groan","whispered-index"]}),runtimeModifiers:Object.freeze({cameraHeight:44,cameraLead:.06,ambientEvent:"water-surge",elevationScale:1}),bossCompatibility:Object.freeze({safeSpawnZones:[F(14,17,8,5),F(24,8,7,7)],minimumClearance:2,disabledHazardsDuringSpawn:!0})}),tempest:Object.freeze({identity:Object.freeze({id:"tempest",name:"SKYGRAVE BASTION",biome:"Stormborne aerial fortress",recommendedMode:"WAVE MODE",silhouette:"three offset battlements on narrow bridges",tacticalSummary:"The tower owns distance; two lower bridge systems and sheltered crenellation runs provide counterplay without forcing a lethal crossing."}),topology:Object.freeze({floorZones:[F(15,1,6,24),F(2,4,11,8),F(6,17,9,5),F(23,14,11,8),F(13,7,2,3),F(13,18,2,3),F(21,17,2,3)],voids:[],blocks:[F(16,8,4,6,{kind:"high-tower"}),F(4,6,2,3),F(9,8,3,2),F(26,16,2,4),F(30,18,2,2),F(8,18,3,2)],platforms:[F(15,4,6,12,{elevation:3.2}),F(2,4,11,8,{elevation:1.1}),F(23,14,11,8,{elevation:1.1})],ramps:[F(13,7,4,3,{from:1.1,to:3.2}),F(19,15,4,3,{from:3.2,to:1.1})],landmark:Object.freeze({type:"grave-tower",x:18,y:11,scale:3.4}),boundary:"waist-high crenellations with storm recovery field"}),traversal:Object.freeze({mechanics:["bridge-crossing","wind-lane","tower-ramp"],routes:["dominant grave tower","west battlement","east counter-battery","lower banner bridge"]}),combat:Object.freeze({sites:[Ke("A",3,5,7,5),Ke("B",25,15,7,5)],spawns:Object.freeze({ATK:F(16,20,4,4),DEF:F(16,2,4,4)}),subspaces:["grave tower","west battlement","east counter-battery","lower bridge network"],coverDensity:"low-medium",sightlineProfile:"long exposed lanes broken by crenellations and hanging masonry"}),hazards:[Ke("crosswind-west",12,6,4,6,{type:"wind",telegraph:1.4,active:3.2,cooldown:10,effect:"push",vector:[0,1],strength:28}),Ke("crosswind-east",20,14,4,7,{type:"wind",telegraph:1.4,active:3.2,cooldown:10,offset:5,effect:"push",vector:[0,-1],strength:28})],interactables:[Ke("recovery-west",12,6,3,6,{type:"recovery-field"}),Ke("recovery-east",21,15,3,6,{type:"recovery-field"})],visuals:ki({accent:12043996,secondary:9684477,fog:9016488,fogDensity:.0026,background:2108741,floorTint:8028041,wall:5857649,outer:1120295,particle:14870768,roughness:.84,metalness:.05,sky:"moving-cloud-sea",landmark:"dominant grave tower"}),audio:Object.freeze({musicTier:"combat_3",ambience:["high-wind","banner-snap","distant-thunder"]}),runtimeModifiers:Object.freeze({cameraHeight:49,cameraLead:.1,ambientEvent:"wind-gust",elevationScale:1}),bossCompatibility:Object.freeze({safeSpawnZones:[F(15,14,6,5),F(3,5,9,6),F(24,15,9,6)],minimumClearance:2,disabledHazardsDuringSpawn:!0})}),verdant:Object.freeze({identity:Object.freeze({id:"verdant",name:"VERDANT OVERRUN",biome:"Biomechanical research overgrowth",recommendedMode:"BOSS MODE",silhouette:"root-lobed facility with a severed glass spine",tacticalSummary:"Dense root pockets reward ambushes while the exposed lab spine and two cleared service lanes keep objective rotations readable."}),topology:Object.freeze({floorZones:[F(2,3,32,20),F(0,9,7,8),F(29,6,7,13)],voids:[F(2,3,6,3),F(28,20,6,3)],blocks:[F(15,4,6,5,{kind:"broken-lab"}),F(12,12,3,7),F(21,10,3,8),F(5,14,5,3),F(27,7,4,3),F(7,6,2,4)],platforms:[F(15,9,6,4,{elevation:.8})],ramps:[F(13,9,3,3,{from:0,to:.8})],landmark:Object.freeze({type:"biomech-heart",x:18,y:7,scale:2.6}),boundary:"root wall, shattered glass and containment fencing"}),traversal:Object.freeze({mechanics:["root-tunnel","bramble-slow","cleared-lab-lane"],routes:["biomech heart","west root tunnel","east clean lane","spore nursery"]}),combat:Object.freeze({sites:[Ke("A",4,5,6,5),Ke("B",26,15,6,5)],spawns:Object.freeze({ATK:F(4,18,5,3),DEF:F(27,4,5,3)}),subspaces:["heart chamber","root tunnel","cleared lab spine","spore nursery"],coverDensity:"high pockets / low lanes",sightlineProfile:"ambush pockets separated by two crisp traversal lanes"}),hazards:[Ke("bramble-nest",8,11,5,6,{type:"bramble",telegraph:.8,active:6,cooldown:12,effect:"slow",strength:.5}),Ke("burst-pods",24,10,5,6,{type:"spores",telegraph:1.5,active:3.6,cooldown:11,offset:5,effect:"visibility"})],interactables:[Ke("root-tunnel",2,10,8,3,{type:"covered-route",movementMultiplier:1.04}),Ke("reactive-flora",24,10,5,6,{type:"proximity-pulse"})],visuals:ki({accent:4379538,secondary:3003583,fog:463886,fogDensity:.0056,background:133382,floorTint:4941650,wall:4347977,outer:67075,particle:11006928,roughness:.86,metalness:.04,sky:"broken-greenhouse",landmark:"pulsing biomechanical heart"}),audio:Object.freeze({musicTier:"combat_1",ambience:["wet-growth","glass-creak","pod-click"]}),runtimeModifiers:Object.freeze({cameraHeight:43,cameraLead:.05,ambientEvent:"spore-bloom",elevationScale:1}),bossCompatibility:Object.freeze({safeSpawnZones:[F(14,14,7,7),F(24,5,8,6)],minimumClearance:2,disabledHazardsDuringSpawn:!0})}),cryo:Object.freeze({identity:Object.freeze({id:"cryo",name:"CRYO RIFT",biome:"Fractured polar machinery",recommendedMode:"TACTICAL",silhouette:"split ice shelf stitched by three crossings",tacticalSummary:"Watch the rift telegraph, rotate through ice-cave cover, and use the stable central machinery bridge when outer shelves begin to crack."}),topology:Object.freeze({floorZones:[F(1,2,34,22)],voids:[F(16,2,4,7),F(16,11,4,5),F(16,18,4,6),F(1,2,5,4),F(30,20,5,4)],blocks:[F(7,6,5,2),F(5,15,3,6),F(24,5,3,6),F(27,16,5,2),F(13,12,3,2),F(20,17,3,2)],platforms:[F(2,3,13,5,{elevation:1.2}),F(21,18,13,5,{elevation:1.2})],ramps:[F(12,6,4,3,{from:1.2,to:0}),F(20,17,4,3,{from:0,to:1.2})],landmark:Object.freeze({type:"rift-chasm",x:18,y:13,scale:3.2}),boundary:"snow berm and crystalline safety pylons"}),traversal:Object.freeze({mechanics:["cracking-route","readable-ice-slide","cavern-shortcut"],routes:["north ice shelf","central machinery bridge","south ridge","west ice cavern"]}),combat:Object.freeze({sites:[Ke("A",3,7,6,5),Ke("B",27,14,6,5)],spawns:Object.freeze({ATK:F(3,18,5,4),DEF:F(28,4,5,4)}),subspaces:["rift overlook","ice cavern","machinery bridge","exposed outer shelf"],coverDensity:"medium asymmetric",sightlineProfile:"exposed shelves contrasted with tight ice corridors"}),hazards:[Ke("cracking-north",12,8,8,3,{type:"cracking-ice",telegraph:2.2,active:3,cooldown:13,effect:"damage",damagePerSecond:7}),Ke("cracking-south",16,16,8,3,{type:"cracking-ice",telegraph:2.2,active:3,cooldown:13,offset:6.5,effect:"damage",damagePerSecond:7})],interactables:[Ke("slide-west",8,13,6,2,{type:"ice-slide",vector:[1,0],strength:22}),Ke("slide-east",22,11,6,2,{type:"ice-slide",vector:[-1,0],strength:22})],visuals:ki({accent:10414079,secondary:16317180,fog:727594,fogDensity:.0062,background:133138,floorTint:12179944,wall:8232111,outer:66827,particle:14742270,roughness:.28,metalness:.12,sky:"polar-night",landmark:"luminous depth rift"}),audio:Object.freeze({musicTier:"combat_3",ambience:["ice-groan","polar-wind","deep-rift"]}),runtimeModifiers:Object.freeze({cameraHeight:45,cameraLead:.07,ambientEvent:"ice-fracture",elevationScale:1}),bossCompatibility:Object.freeze({safeSpawnZones:[F(7,9,8,6),F(21,11,8,6)],minimumClearance:2,disabledHazardsDuringSpawn:!0})}),mirage:Object.freeze({identity:Object.freeze({id:"mirage",name:"NULL CATHEDRAL",biome:"Alien ritual megastructure",recommendedMode:"WAVE MODE",silhouette:"asymmetrical nave with offset transepts",tacticalSummary:"The nave is decisive but exposed. Side chapels, elevated galleries, and telegraphed phase barriers let squads rotate around the ritual machine."}),topology:Object.freeze({floorZones:[F(12,1,12,24),F(2,4,10,7),F(4,15,8,7),F(24,7,10,12),F(10,7,4,3),F(10,17,4,3)],voids:[],blocks:[F(16,9,5,7,{kind:"monolith"}),F(5,6,4,2),F(6,17,3,3),F(27,9,3,2),F(29,14,3,3),F(13,4,2,4)],platforms:[F(12,2,4,8,{elevation:2.3}),F(22,16,2,7,{elevation:2.3})],ramps:[F(10,7,4,3,{from:0,to:2.3}),F(22,15,4,3,{from:2.3,to:0})],landmark:Object.freeze({type:"null-monolith",x:18.5,y:12.5,scale:3.5}),boundary:"black-stone buttress and luminous void curb"}),traversal:Object.freeze({mechanics:["phase-barrier","gallery-ramp","off-axis-chapel"],routes:["monumental nave","west reliquary","east ritual chamber","upper galleries"]}),combat:Object.freeze({sites:[Ke("A",3,5,7,5),Ke("B",26,12,6,5)],spawns:Object.freeze({ATK:F(6,18,5,3),DEF:F(15,2,6,3)}),subspaces:["great nave","west reliquary","east ritual chamber","elevated galleries"],coverDensity:"low nave / high chambers",sightlineProfile:"one commanding axial lane with off-axis counterplay"}),hazards:[Ke("null-pulse",13,8,10,10,{type:"null-pulse",telegraph:2,active:2.8,cooldown:14,effect:"slow",strength:.4})],interactables:[Ke("phase-gate-west",11,8,2,2,{type:"phase-barrier",telegraph:2.5,active:4,cooldown:12}),Ke("phase-gate-east",23,16,2,2,{type:"phase-barrier",telegraph:2.5,active:4,cooldown:12,offset:6})],visuals:ki({accent:10980346,secondary:15324671,fog:591889,fogDensity:.0048,background:65795,floorTint:2696753,wall:1512733,outer:1,particle:12891645,roughness:.72,metalness:.18,sky:"void-aperture",landmark:"rotating ritual monolith"}),audio:Object.freeze({musicTier:"combat_4",ambience:["sub-bass-choir","stone-resonance","ring-hum"]}),runtimeModifiers:Object.freeze({cameraHeight:47,cameraLead:.06,ambientEvent:"ritual-phase",elevationScale:1}),bossCompatibility:Object.freeze({safeSpawnZones:[F(13,17,10,6),F(24,8,8,9)],minimumClearance:2,disabledHazardsDuringSpawn:!0})}),neon:Object.freeze({identity:Object.freeze({id:"neon",name:"NEON CANOPY",biome:"Megacity rooftop exchange",recommendedMode:"WAVE MODE",silhouette:"offset rooftop diamonds around a transit spine",tacticalSummary:"Fast transit lanes connect four unequal rooftops while holographic screens interrupt otherwise dangerous skyline sightlines."}),topology:Object.freeze({floorZones:[F(3,3,12,8),F(21,3,12,8),F(4,16,10,7),F(22,15,11,8),F(14,6,8,3),F(12,18,11,3),F(17,8,3,11)],voids:[],blocks:[F(6,5,3,3),F(26,6,4,2),F(7,18,2,3),F(27,17,3,3),F(17,6,2,2)],platforms:[F(21,3,12,8,{elevation:1.6}),F(4,16,10,7,{elevation:.8})],ramps:[F(19,6,4,3,{from:0,to:1.6}),F(12,18,4,3,{from:.8,to:0})],landmark:Object.freeze({type:"transit-holo",x:18,y:7,scale:2.2}),boundary:"lit parapet and city-depth curb"}),traversal:Object.freeze({mechanics:["transit-boost","roof-ramp"],routes:["north transit spine","west data roof","east tower roof","south maintenance bridge"]}),combat:Object.freeze({sites:[Ke("A",4,4,6,5),Ke("B",25,16,6,5)],spawns:Object.freeze({ATK:F(5,18,5,3),DEF:F(27,4,5,3)}),subspaces:["transit spine","data roof","tower roof","maintenance bridge"],coverDensity:"medium-low",sightlineProfile:"roof-to-roof long lanes with billboard cuts"}),hazards:[Ke("train-wake",14,6,8,3,{type:"transit-wake",telegraph:1.4,active:2,cooldown:9,effect:"push",vector:[1,0],strength:24})],interactables:[Ke("boost-rail",13,18,10,3,{type:"conveyor",vector:[1,0],strength:34})],visuals:ki({accent:16020150,secondary:2282478,fog:656920,fogDensity:.0044,background:327951,floorTint:9141175,wall:4798575,outer:196874,particle:16361684,roughness:.4,metalness:.52,sky:"rain-city",landmark:"suspended transit hologram"}),audio:Object.freeze({musicTier:"combat_2",ambience:["rain","maglev-pass","city-hum"]}),runtimeModifiers:Object.freeze({cameraHeight:45,cameraLead:.09,ambientEvent:"transit-pass",elevationScale:1}),bossCompatibility:Object.freeze({safeSpawnZones:[F(4,4,9,6),F(23,15,9,7)],minimumClearance:2,disabledHazardsDuringSpawn:!0})}),solar:Object.freeze({identity:Object.freeze({id:"solar",name:"SOLAR BASTION",biome:"Heliostat desert fortress",recommendedMode:"TACTICAL",silhouette:"sunburst courts around a shaded diagonal",tacticalSummary:"Cross exposed reflector courts quickly or rotate through the shaded diagonal cooling trench."}),topology:Object.freeze({floorZones:[F(2,2,32,22)],voids:[F(2,2,7,5),F(27,19,7,5)],blocks:[F(15,9,6,8),F(5,8,5,2),F(26,7,4,2),F(7,17,3,3),F(25,17,5,2)],platforms:[F(3,14,9,7,{elevation:1})],ramps:[F(10,15,4,3,{from:1,to:0})],landmark:Object.freeze({type:"solar-crown",x:18,y:12.5,scale:2.7}),boundary:"sandstone curtain wall"}),traversal:Object.freeze({mechanics:["shade-lane","reflector-cycle"],routes:["solar court","cooling trench","west battery","east collector"]}),combat:Object.freeze({sites:[Ke("A",4,14,6,5),Ke("B",26,4,6,5)],spawns:Object.freeze({ATK:F(27,17,5,3),DEF:F(4,5,5,3)}),subspaces:["solar court","cooling trench","west battery","east collector"],coverDensity:"low exposed",sightlineProfile:"hard long-range courts and shaded close trench"}),hazards:[Ke("solar-flare",11,4,14,5,{type:"heat",telegraph:2,active:2.5,cooldown:13,effect:"damage",damagePerSecond:6})],interactables:[Ke("shade-trench",8,17,18,3,{type:"covered-route",movementMultiplier:1.06})],visuals:ki({accent:16498468,secondary:16478597,fog:2758152,fogDensity:.0037,background:1444612,floorTint:13081187,wall:10186822,outer:1181956,particle:16767370,roughness:.78,metalness:.16,sky:"sun-haze",landmark:"heliostat crown"}),audio:Object.freeze({musicTier:"combat_1",ambience:["dry-wind","mirror-servo"]}),runtimeModifiers:Object.freeze({cameraHeight:44,cameraLead:.08,ambientEvent:"reflector-sweep",elevationScale:1}),bossCompatibility:Object.freeze({safeSpawnZones:[F(10,10,7,6),F(21,10,7,6)],minimumClearance:2,disabledHazardsDuringSpawn:!0})}),lunar:Object.freeze({identity:Object.freeze({id:"lunar",name:"LUNAR EXCAVATION",biome:"Low-gravity moon quarry",recommendedMode:"TACTICAL",silhouette:"terraced quarry bowl with a broken rim road",tacticalSummary:"The excavation bowl favors short fights while the incomplete rim road creates a dangerous long rotation."}),topology:Object.freeze({floorZones:[F(2,2,32,22)],voids:[F(2,2,9,4),F(25,20,9,4),F(15,10,6,6)],blocks:[F(6,8,4,3),F(26,6,3,5),F(8,18,5,2),F(24,17,5,2)],platforms:[F(11,5,14,4,{elevation:1.8}),F(4,14,8,7,{elevation:.9})],ramps:[F(10,7,4,3,{from:0,to:1.8}),F(10,16,4,3,{from:.9,to:0})],landmark:Object.freeze({type:"quarry-crater",x:18,y:13,scale:3}),boundary:"regolith berm and beacon poles"}),traversal:Object.freeze({mechanics:["quarry-ramp","rim-road"],routes:["quarry bowl","north rim","west crawler cut","east drill lane"]}),combat:Object.freeze({sites:[Ke("A",4,14,6,5),Ke("B",26,5,6,5)],spawns:Object.freeze({ATK:F(27,17,5,3),DEF:F(4,6,5,3)}),subspaces:["quarry bowl","north rim","crawler cut","drill lane"],coverDensity:"medium sparse",sightlineProfile:"rim long-range / bowl close-range"}),hazards:[Ke("regolith-blast",12,16,12,4,{type:"dust",telegraph:1.8,active:3.5,cooldown:13,effect:"visibility"})],interactables:[Ke("crawler-track",11,5,14,3,{type:"conveyor",vector:[1,0],strength:20})],visuals:ki({accent:14870768,secondary:2282478,fog:592658,fogDensity:.0028,background:66053,floorTint:10133933,wall:7502214,outer:197639,particle:14412542,roughness:.9,metalness:.08,sky:"starfield",landmark:"excavation crater"}),audio:Object.freeze({musicTier:"combat_2",ambience:["radio-static","drill-thrum"]}),runtimeModifiers:Object.freeze({cameraHeight:46,cameraLead:.07,ambientEvent:"regolith-blast",elevationScale:1}),bossCompatibility:Object.freeze({safeSpawnZones:[F(11,5,14,4),F(12,17,12,5)],minimumClearance:2,disabledHazardsDuringSpawn:!0})}),caldera:Object.freeze({identity:Object.freeze({id:"caldera",name:"EMBER CALDERA",biome:"Basalt geothermal shrine",recommendedMode:"BOSS MODE",silhouette:"horseshoe basalt terraces around a lava throat",tacticalSummary:"Control the horseshoe rim, then decide between the hot throat shortcut and the safer shrine corridors."}),topology:Object.freeze({floorZones:[F(2,2,32,22)],voids:[F(13,7,10,12),F(2,2,6,5),F(28,19,6,5)],blocks:[F(7,8,4,3),F(25,7,4,3),F(6,17,5,2),F(25,16,5,2)],platforms:[F(3,10,9,6,{elevation:1.3}),F(24,10,9,6,{elevation:1.3})],ramps:[F(10,11,4,3,{from:1.3,to:0}),F(22,11,4,3,{from:0,to:1.3})],landmark:Object.freeze({type:"lava-throat",x:18,y:13,scale:3.2}),boundary:"obsidian rim and magma trench"}),traversal:Object.freeze({mechanics:["heat-shortcut","terrace-ramp"],routes:["horseshoe rim","west shrine","east vent hall","hot throat shortcut"]}),combat:Object.freeze({sites:[Ke("A",4,10,6,5),Ke("B",26,10,6,5)],spawns:Object.freeze({ATK:F(4,18,5,3),DEF:F(27,4,5,3)}),subspaces:["lava throat","west shrine","east vent hall","horseshoe rim"],coverDensity:"medium",sightlineProfile:"curved rim lanes around a denied center"}),hazards:[Ke("magma-breath",12,9,12,8,{type:"heat",telegraph:2,active:3,cooldown:12,effect:"damage",damagePerSecond:9})],interactables:[Ke("vent-boost",10,19,16,2,{type:"conveyor",vector:[1,0],strength:24})],visuals:ki({accent:16347926,secondary:15680580,fog:2164486,fogDensity:.0064,background:852482,floorTint:6243653,wall:5849413,outer:786946,particle:16628340,roughness:.86,metalness:.12,sky:"ash-column",landmark:"open lava throat"}),audio:Object.freeze({musicTier:"combat_4",ambience:["lava-roar","rockfall"]}),runtimeModifiers:Object.freeze({cameraHeight:45,cameraLead:.08,ambientEvent:"magma-breath",elevationScale:1}),bossCompatibility:Object.freeze({safeSpawnZones:[F(3,10,9,6),F(24,10,9,6)],minimumClearance:2,disabledHazardsDuringSpawn:!0})})}),fg=Object.freeze(["forge","abyss","tempest","verdant","cryo","mirage","neon","solar","lunar","caldera"]);function Yv(i=1){let e=(Number(i)||1)>>>0;return()=>{e+=1831565813;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function Gs(i,e,t){return i>=t.x&&e>=t.y&&i<t.x+t.w&&e<t.y+t.h}function hg(i,e,t){let n=Math.max(0,Math.floor(e.x)),s=Math.min(i[0].length,Math.ceil(e.x+e.w)),r=Math.max(0,Math.floor(e.y)),o=Math.min(i.length,Math.ceil(e.y+e.h));for(let a=r;a<o;a++)for(let l=n;l<s;l++)i[a][l]=t}function yf(i,e=vf.width,t=vf.height){let n=Array.from({length:t},()=>Array(e).fill(1));for(let s of i.topology.floorZones)hg(n,s,0);for(let s of i.topology.voids||[])hg(n,s,1);for(let s of i.topology.blocks||[])hg(n,s,1);return n}function gh(i,e,t){let n=0;for(let s of i.topology.platforms||[])Gs(e,t,s)&&(n=Math.max(n,s.elevation||0));for(let s of i.topology.ramps||[]){if(!Gs(e,t,s))continue;let r=s.w>=s.h?(e-s.x)/s.w:(t-s.y)/s.h;n=Math.max(n,(s.from||0)+((s.to||0)-(s.from||0))*Math.max(0,Math.min(1,r)))}return n}function ug(i,e,t=0){for(let n=Math.ceil(e.y+t);n<Math.floor(e.y+e.h-t);n++)for(let s=Math.ceil(e.x+t);s<Math.floor(e.x+e.w-t);s++)if(i[n]?.[s]===0)return!0;return!1}function Lw(i,e){return i.x<e.x+e.w&&i.x+i.w>e.x&&i.y<e.y+e.h&&i.y+i.h>e.y}function pg(i){return yf(i).map(e=>e.join("")).join("|")}function mg(i){let e=[];for(let n of["identity","topology","traversal","combat","hazards","interactables","visuals","audio","runtimeModifiers","bossCompatibility"])i?.[n]==null&&e.push(`missing ${n}`);if(e.length)return e;let t=yf(i);for(let[n,s]of Object.entries(i.combat.spawns||{})){ug(t,s)||e.push(`${n} spawn has no open cell`);for(let r of i.hazards)Lw(s,r)&&e.push(`${n} spawn overlaps hazard ${r.id}`)}for(let n of i.combat.sites||[])ug(t,n)||e.push(`site ${n.id} has no open cell`);return(i.combat.subspaces||[]).length<3&&e.push("fewer than three combat subspaces"),i.topology.landmark?.type||e.push("missing landmark"),(i.traversal.mechanics||[]).length||e.push("missing traversal mechanic"),i.hazards.length||e.push("missing hazard"),(i.bossCompatibility.safeSpawnZones||[]).some(n=>ug(t,n,i.bossCompatibility.minimumClearance||0))||e.push("no boss-safe spawn zone"),e}function Zv(i=dg,e=fg){let t=[],n=new Map;for(let s of e){let r=i[s];if(!r){t.push(`${s}: missing definition`);continue}for(let a of mg(r))t.push(`${s}: ${a}`);let o=pg(r);n.has(o)&&t.push(`${s}: topology duplicates ${n.get(o)}`),n.set(o,s)}return t}var $v=1e-6;function gg(i){return Number.isFinite(i?.collisionHeight)?Math.max(0,i.collisionHeight):i?.kind==="high-tower"?8:["monolith","furnace-core","broken-lab"].includes(i?.kind)||String(i?.kind||"").includes("core")?4.5:2.65+Math.abs((i?.x||0)*73856093^(i?.y||0)*19349663^(i?.w||0)*83492791)%151/100}function bf(i,e,t,n=1.55){return gh(i,e.x/t,e.y/t)+(e.isBoss?Math.max(1.8,Math.min(3.4,(e.radius||45)/24)):n)}function _g(i,e,t,n,s={}){let r=Math.floor(t),o=Math.floor(n);if(r<0||o<0||o>=e.length||r>=(e[0]?.length||0))return{height:1/0,reason:"boundary"};let a=-1/0;for(let l of i.topology.blocks||[])Gs(t,n,l)&&(a=Math.max(a,gg(l)));if(Number.isFinite(a))return{height:a,reason:"cover"};for(let l of i.topology.voids||[])if(Gs(t,n,l))return{height:-1/0,reason:"void"};return e[o]?.[r]===1?(i.topology.floorZones||[]).some(c=>Gs(t,n,c))?{height:s.dynamicBarrierHeight??3.8,reason:"dynamic-barrier"}:{height:-1/0,reason:"open-depth"}:{height:-1/0,reason:"clear"}}function xg({definition:i,grid:e,start:t,end:n,tileSize:s=1,step:r=s*.18,clearance:o=.06,ignoreObstacles:a=!1,dynamicBarrierHeight:l=3.8}){let c=n.x-t.x,h=n.y-t.y,d=n.z-t.z,u=Math.hypot(c,h);if(u<$v||a)return{clear:!0,distance:u,fraction:1,point:{...n},reason:"clear",obstacleHeight:-1/0};let f=Math.max(2,Math.ceil(u/Math.max(r,$v)));for(let p=1;p<=f;p++){let _=p/f,m=t.x+c*_,g=t.y+h*_,b=t.z+d*_,S=m/s,x=g/s,A=gh(i,S,x);if(b<=A+o)return{clear:!1,distance:u*_,fraction:_,point:{x:m,y:g,z:A+o},reason:"terrain",obstacleHeight:A};let M=_g(i,e,S,x,{dynamicBarrierHeight:l});if(b<=M.height+o)return{clear:!1,distance:u*_,fraction:_,point:{x:m,y:g,z:Number.isFinite(M.height)?M.height:b},reason:M.reason,obstacleHeight:M.height}}return{clear:!0,distance:u,fraction:1,point:{...n},reason:"clear",obstacleHeight:-1/0}}function Jv({definition:i,grid:e,tileSize:t,from:n,to:s,fromHeight:r,toHeight:o,ignoreObstacles:a=!1}){let l={x:n.x,y:n.y,z:r??bf(i,n,t)},c={x:s.x,y:s.y,z:o??bf(i,s,t,1.3)};return xg({definition:i,grid:e,tileSize:t,start:l,end:c,ignoreObstacles:a}).clear}var vg=Object.freeze({LOADING:"loading",MENU:"menu",MODE_SELECT:"mode-select",OPERATOR_SELECT:"operator-select",SQUAD_SELECT:"squad-select",ARENA_SELECT:"arena-select",DEPLOYMENT:"deployment",BUY:"buy",LIVE:"live",PLANT:"plant-defuse",SPECTATING:"spectating",ROUND_END:"round-end",BOSS_INTRO:"boss-intro",WAVE_TRANSITION:"wave-transition",MATCH_END:"match-end",RESULTS:"results",PAUSED:"paused",CONTEXT_LOST:"context-lost"}),ae=vg,Kv=Object.freeze({[ae.LOADING]:[ae.MENU,ae.CONTEXT_LOST],[ae.MENU]:[ae.MODE_SELECT,ae.OPERATOR_SELECT,ae.CONTEXT_LOST],[ae.MODE_SELECT]:[ae.MENU,ae.OPERATOR_SELECT,ae.SQUAD_SELECT],[ae.OPERATOR_SELECT]:[ae.MENU,ae.MODE_SELECT,ae.SQUAD_SELECT,ae.ARENA_SELECT],[ae.SQUAD_SELECT]:[ae.MODE_SELECT,ae.OPERATOR_SELECT,ae.ARENA_SELECT],[ae.ARENA_SELECT]:[ae.OPERATOR_SELECT,ae.DEPLOYMENT,ae.CONTEXT_LOST],[ae.DEPLOYMENT]:[ae.ARENA_SELECT,ae.BUY,ae.BOSS_INTRO,ae.WAVE_TRANSITION,ae.CONTEXT_LOST],[ae.BUY]:[ae.LIVE,ae.PAUSED,ae.MENU,ae.CONTEXT_LOST],[ae.LIVE]:[ae.PLANT,ae.SPECTATING,ae.ROUND_END,ae.BOSS_INTRO,ae.WAVE_TRANSITION,ae.MATCH_END,ae.PAUSED,ae.MENU,ae.CONTEXT_LOST],[ae.PLANT]:[ae.LIVE,ae.SPECTATING,ae.ROUND_END,ae.PAUSED,ae.CONTEXT_LOST],[ae.SPECTATING]:[ae.LIVE,ae.ROUND_END,ae.MATCH_END,ae.PAUSED,ae.CONTEXT_LOST],[ae.ROUND_END]:[ae.BUY,ae.BOSS_INTRO,ae.WAVE_TRANSITION,ae.MATCH_END,ae.RESULTS,ae.MENU,ae.CONTEXT_LOST],[ae.BOSS_INTRO]:[ae.BUY,ae.LIVE,ae.MATCH_END,ae.PAUSED,ae.CONTEXT_LOST],[ae.WAVE_TRANSITION]:[ae.BUY,ae.BOSS_INTRO,ae.MATCH_END,ae.PAUSED,ae.CONTEXT_LOST],[ae.MATCH_END]:[ae.RESULTS,ae.MENU,ae.CONTEXT_LOST],[ae.RESULTS]:[ae.DEPLOYMENT,ae.MENU,ae.CONTEXT_LOST],[ae.PAUSED]:[ae.MENU,ae.CONTEXT_LOST],[ae.CONTEXT_LOST]:[ae.MENU,ae.DEPLOYMENT]});function jv(i=ae.LOADING,e=null){if(!Object.values(ae).includes(i))throw new Error(`Unknown game state: ${i}`);let t=i,n=null,s=[{from:null,to:i,reason:"initial"}],r=(o,a="runtime",l=!1)=>{let c=t;return c===o?{ok:!0,from:c,to:o,reason:"unchanged"}:Object.values(ae).includes(o)?!l&&!(Kv[c]||[]).includes(o)?{ok:!1,from:c,to:o,reason:"illegal-transition"}:(t=o,s.push({from:c,to:o,reason:a}),e?.({from:c,to:o,reason:a}),{ok:!0,from:c,to:o,reason:a}):{ok:!1,from:c,to:o,reason:"unknown-state"}};return{get state(){return t},get history(){return s.slice()},can(o){return t===o||(Kv[t]||[]).includes(o)},transition(o,a){return r(o,a)},recover(o=ae.MENU,a="recovery"){return n=null,r(o,a,!0)},pause(){return[ae.BUY,ae.LIVE,ae.PLANT,ae.SPECTATING,ae.BOSS_INTRO,ae.WAVE_TRANSITION].includes(t)?(n=t,r(ae.PAUSED,"pause")):{ok:!1,from:t,to:ae.PAUSED,reason:"not-pausable"}},resume(){if(t!==ae.PAUSED||!n)return{ok:!1,from:t,to:n,reason:"not-paused"};let o=n;return n=null,r(o,"resume",!0)}}}var _a,Af,an,Sf=class{constructor(){ya(this,_a,0);ya(this,Af,1);ya(this,an,[])}get size(){return Wt(this,an).length}schedule(e,t=0,n="match"){if(typeof e!="function")throw new TypeError("Scheduled callback must be a function");let s={id:Ug(this,Af)._++,at:Wt(this,_a)+Math.max(0,Number(t)||0),callback:e,tag:n};return Wt(this,an).push(s),Wt(this,an).sort((r,o)=>r.at-o.at||r.id-o.id),s.id}cancel(e){let t=Wt(this,an).length;return Lr(this,an,Wt(this,an).filter(n=>n.id!==e)),t!==Wt(this,an).length}cancelTag(e){let t=Wt(this,an).length;return Lr(this,an,Wt(this,an).filter(n=>n.tag!==e)),t-Wt(this,an).length}clear(){let e=Wt(this,an).length;return Lr(this,an,[]),e}tick(e){Lr(this,_a,Wt(this,_a)+Math.max(0,Number(e)||0));let t=[];for(;Wt(this,an)[0]?.at<=Wt(this,_a);)t.push(Wt(this,an).shift());for(let n of t)n.callback();return t.length}};_a=new WeakMap,Af=new WeakMap,an=new WeakMap;var xa,Mf=class{constructor(){ya(this,xa,[])}add(e,t="disposers"){if(typeof e!="function")throw new TypeError("Lifecycle disposer must be a function");return Wt(this,xa).push({dispose:e,type:t,active:!0}),e}listen(e,t,n,s){return e.addEventListener(t,n,s),this.add(()=>e.removeEventListener(t,n,s),"listeners"),n}counts(){return Wt(this,xa).reduce((e,t)=>(t.active&&(e[t.type]=(e[t.type]||0)+1),e),{listeners:0,disposers:0})}teardown(){let e=0;for(let t of Wt(this,xa).splice(0).reverse())t.active&&(t.active=!1,t.dispose(),e++);return e}};xa=new WeakMap;var yg=Object.freeze({low:Object.freeze({id:"low",pixelRatio:.8,shadows:!1,shadowSize:512,particles:.38,bloom:!1,fog:.72,waterSegments:8}),medium:Object.freeze({id:"medium",pixelRatio:1,shadows:!0,shadowSize:1024,particles:.65,bloom:!1,fog:.86,waterSegments:12}),high:Object.freeze({id:"high",pixelRatio:1.5,shadows:!0,shadowSize:2048,particles:1,bloom:!0,fog:1,waterSegments:18})}),Tf=class{constructor({initial:e="high",downgradeSamples:t=8,upgradeSamples:n=28,slowFrameMs:s=21,fastFrameMs:r=15.5}={}){this.order=["low","medium","high"],this.profile=this.order.includes(e)?e:"high",this.downgradeSamples=t,this.upgradeSamples=n,this.slowFrameMs=s,this.fastFrameMs=r,this.slow=0,this.fast=0}sample(e){e>this.slowFrameMs?(this.slow++,this.fast=0):e<this.fastFrameMs?(this.fast++,this.slow=0):(this.slow=0,this.fast=0);let t=this.order.indexOf(this.profile);return this.slow>=this.downgradeSamples&&t>0?(this.profile=this.order[t-1],this.slow=this.fast=0):this.fast>=this.upgradeSamples&&t<this.order.length-1&&(this.profile=this.order[t+1],this.slow=this.fast=0),this.profile}set(e){if(!this.order.includes(e))throw new Error(`Unknown quality profile: ${e}`);return this.profile=e,this.slow=this.fast=0,yg[e]}};function Qv({actor:i,goal:e,findPath:t,fallbackGoals:n=[]}){let s=t(e,i)||[];if(s.length)return{path:s,goal:e,recovered:!1};let r=n.map(o=>({goal:o,path:t(o,i)||[],distance:Math.hypot(o.x-i.x,o.y-i.y)})).filter(o=>o.path.length).sort((o,a)=>o.distance-a.distance);return r.length?{path:r[0].path,goal:r[0].goal,recovered:!0}:{path:[],goal:null,recovered:!0}}var bg=Object.freeze(["moveUp","moveDown","moveLeft","moveRight","aim","fire","reload","interact","ability","doctrine","weapon1","weapon2","weapon3","weapon4","weapon5","weapon6","pause","confirm","cancel","scoreboard","spectateNext","spectatePrevious","armory"]),Sg=Object.freeze({KeyW:"moveUp",ArrowUp:"moveUp",KeyS:"moveDown",ArrowDown:"moveDown",KeyA:"moveLeft",ArrowLeft:"moveLeft",KeyD:"moveRight",ArrowRight:"moveRight",Mouse0:"fire",KeyR:"reload",KeyF:"interact",KeyE:"ability",KeyQ:"doctrine",Digit1:"weapon1",Digit2:"weapon2",Digit3:"weapon3",Digit4:"weapon4",Digit5:"weapon5",Digit6:"weapon6",Escape:"pause",Enter:"confirm",Space:"confirm",Backspace:"cancel",Tab:"scoreboard",BracketRight:"spectateNext",BracketLeft:"spectatePrevious",KeyB:"armory"}),ey=Object.freeze({0:"confirm",1:"cancel",2:"interact",3:"reload",4:"spectatePrevious",5:"spectateNext",6:"ability",7:"fire",8:"scoreboard",9:"pause",10:"doctrine",11:"armory",12:"weapon1",13:"weapon2",14:"weapon5",15:"weapon6"});function ty(i,e=.18){let t=Math.abs(Number(i)||0);return t<=e?0:Math.sign(i)*Math.min(1,(t-e)/(1-e))}function ny({keyboard:i=Sg}={}){let e=new Set,t=new Set,n=new Map,s="keyboard",r=(o,a,l=s)=>bg.includes(o)?(a?(s=l,e.has(o)||t.add(o),e.add(o)):e.delete(o),!0):!1;return{get mode(){return s},get gamepads(){return[...n.values()].sort((o,a)=>o.index-a.index)},setMode(o){return["keyboard","touch","gamepad"].includes(o)&&(s=o),s},setAction:r,handleKey(o,a){let l=i[o];return l?(r(l,a,"keyboard"),l):null},isDown(o){return e.has(o)},consume(o){let a=t.has(o);return t.delete(o),a},releaseAll(){e.clear(),t.clear()},connectGamepad(o){n.set(o.index,{index:o.index,id:o.id||"Standard Gamepad"}),s="gamepad"},disconnectGamepad(o){n.delete(o)},movement(){return{x:Number(e.has("moveRight"))-Number(e.has("moveLeft")),y:Number(e.has("moveDown"))-Number(e.has("moveUp"))}}}}var _h="cs3d.settings.v2",xh="cs3d.career.v2",ai=Object.freeze({version:2,master:.8,music:.42,effects:1,shake:1,bloom:!0,aimAssist:.45,sensitivity:1,touchLeftHanded:!1,colorblind:"symbols",uiScale:1,reducedMotion:!1,quality:"auto",tutorialCompleted:!1,inputPreference:"auto"}),Ef=Object.freeze({version:2,matches:0,wins:0,kills:0,deaths:0,xp:0,bestStreak:0,mastery:{},arenaWins:{}}),iy=i=>structuredClone(i),Ir=(i,e,t=0,n=1)=>Number.isFinite(Number(i))?Math.max(t,Math.min(n,Number(i))):e,va=(i,e=0)=>Number.isFinite(Number(i))?Math.max(0,Math.floor(Number(i))):e;function wf(i,e,t){let n=i?.getItem?.(e);if(n==null)return t;try{return JSON.parse(n)}catch{try{i.setItem(`${e}.corrupt`,n)}catch{}return t}}function sy(i={},e={}){let t={...ai,...i,version:2};return t.master=Ir(t.master,ai.master),t.music=Ir(t.music,ai.music),t.effects=Ir(i.effects??i.sfx,ai.effects),t.shake=Ir(t.shake,ai.shake),t.aimAssist=Ir(t.aimAssist,ai.aimAssist),t.sensitivity=Ir(t.sensitivity,ai.sensitivity,.25,2.5),t.uiScale=Ir(t.uiScale,ai.uiScale,.8,1.35),t.bloom=typeof t.bloom=="number"?t.bloom>0:!!t.bloom,t.touchLeftHanded=!!t.touchLeftHanded,t.tutorialCompleted=!!t.tutorialCompleted,t.reducedMotion=!!(i.reducedMotion??e.reducedMotion??ai.reducedMotion),["auto","low","medium","high"].includes(t.quality)||(t.quality="auto"),["auto","keyboard","touch","gamepad"].includes(t.inputPreference)||(t.inputPreference="auto"),["symbols","deuteranopia","protanopia","tritanopia"].includes(t.colorblind)||(t.colorblind="symbols"),delete t.sfx,t}function Nw(i={}){return{...Ef,...i,version:2,matches:va(i.matches),wins:va(i.wins),kills:va(i.kills),deaths:va(i.deaths),xp:va(i.xp),bestStreak:va(i.bestStreak),mastery:{...i.mastery||{}},arenaWins:{...i.arenaWins||{}}}}function Cf(i,e){let t=sy(e);return i?.setItem?.(_h,JSON.stringify(t)),t}function Rf(i,e){let t=Nw(e);return i?.setItem?.(xh,JSON.stringify(t)),t}function ry(i=globalThis.localStorage,e={}){let t=wf(i,_h,null);return t||(t=wf(i,"cs3d_cfg",{})),Cf(i,sy(t,e))}function oy(i=globalThis.localStorage){let e=wf(i,xh,null);return e||(e=wf(i,"cs3d_career",{})),Rf(i,e)}function ay(i=globalThis.localStorage){return i?.removeItem?.(_h),i?.removeItem?.("cs3d_cfg"),i?.removeItem?.("cs3d_difficulty"),Cf(i,iy(ai))}function ly(i=globalThis.localStorage){return i?.removeItem?.(xh),i?.removeItem?.("cs3d_career"),Rf(i,iy(Ef))}function Mg(i){if(!i||!i.targets)return null;let{targets:e,delay:t,duration:n,easing:s,complete:r,update:o,...a}=i,l={...a,duration:n??1e3,ease:s||"outQuad",delay:typeof t=="function"?t:t??0,onComplete:r,onUpdate:o};return ff(e,l)}Mg.stagger=ga;Mg.remove=i=>mh.remove(i);window.THREE=Object.freeze({...Bm,EffectComposer:Xd,RenderPass:qd,ShaderPass:sa,UnrealBloomPass:ra});window.anime=Mg;window.animejs={animate:ff,stagger:ga,utils:mh};window.CS3D_VENDOR={three:"185",anime:"4.5.0"};window.CS3D_BOSS=Object.freeze({BOSS_DNA:_f,BOSS_BY_ID:un,BOSS_LOCO_CLASSES:Fv,BOSS_ABILITIES:og,PLAYLISTS:ag,resolveBossLocos:xf,runBossAbility:Bv,makeBossRig:Vv,updateBossRig:kv,buildWavePlan:Wv,canOccupyCircle:cg,cellsForCircle:lg,chooseRandomBoss:Hv,findBossSpawn:Xv,normalizeSquad:Gv,shouldStartApexChallenge:qv});window.CS3D_ARENA_SYSTEM=Object.freeze({ARENA_DEFINITIONS:dg,ARENA_ORDER:fg,ARENA_SIZE:vf,arenaActorHeight:bf,arenaBlockHeight:gg,arenaElevationAt:gh,arenaLineClear:Jv,arenaObstacleAt:_g,createArenaGrid:yf,createSeededRandom:Yv,pointInZone:Gs,topologySignature:pg,traceArenaSegment:xg,validateArenaDefinition:mg,validateArenaRegistry:Zv});window.CS3D_RUNTIME=Object.freeze({GAME_STATES:vg,GameScheduler:Sf,LifecycleRegistry:Mf,QUALITY_PROFILES:yg,QualityController:Tf,createGameStateMachine:jv,recoverNavigationPath:Qv});window.CS3D_INPUT=Object.freeze({ACTIONS:bg,DEFAULT_KEY_BINDINGS:Sg,GAMEPAD_BINDINGS:ey,createActionInput:ny,normalizeAxis:ty});window.CS3D_PERSISTENCE=Object.freeze({CAREER_KEY:xh,DEFAULT_CAREER:Ef,DEFAULT_SETTINGS:ai,SAVE_VERSION:2,SETTINGS_KEY:_h,loadCareer:oy,loadSettings:ry,resetCareer:ly,resetSettings:ay,saveCareer:Rf,saveSettings:Cf});})();
