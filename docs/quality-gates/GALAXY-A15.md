# Galaxy A15 physical-device validation

Open the new PR's Vercel preview and append `?benchmark=1` to the game URL.
This is an opt-in capture of the shipping game, not a reduced benchmark scene.
The precise A15 variant, Android release and Chrome version must be recorded on
the device; this documentation does not assume the handset's GPU or RAM.

1. Set graphics to **Low** in the existing settings. Use landscape orientation,
   keep battery saver off, unplug charging and record your battery percentage.
2. Deploy an operator into Forge / Standard. Tap **DEVICE TEST**, enter the device,
   Android and browser versions, and tap **Record combat**. It resumes the match.
3. Play normally: move, aim, fire, reload, use ability and doctrine. The first 15
   seconds warm up; the next 120 seconds of active combat are captured. Buy phases
   and spectating are excluded. Pausing, backgrounding, resizing, opening the
   armory/menu, a context loss, an error or changing scenario interrupts a run.
   Interrupted runs remain in the export; retry them, never relabel them passed.
4. After **COMPLETE**, open Device Test and **Download results**. Export after each
   run for safety. The tab accumulates runs in memory until reloaded or closed.
5. Repeat for all ten arenas: Forge, Sanctum, Cryo, Verdant, Abyss, Neon, Mirage,
   Tempest, Lunar and Caldera. Also record Boss and Wave combat. Keep playing
   at least 15 minutes without cooling the phone before the final captures to
   expose thermal slowdown. Test the heaviest arena again after that soak.
6. Separately verify touch controls, audio, pause/resume, rotate/reflow, app
   background/resume, rematch, weapon swapping and career loading. Check the
   physical-device and controls/audio boxes only for checks you actually made.
7. Send the downloaded JSON files plus notes on heat, battery percentage,
   crashes, stuck controls or audio issues. A short screen recording is useful
   for visual problems; do a separate timing run without screen recording.

## Acceptance protocol v1

For each required scenario on the same build: 120 seconds of active samples after
15 seconds warmup; average frame delivery at least 30 FPS, p95 at most 50 ms, p99
at most 100 ms, and at most 1% frames above 100 ms. These are explicit new handset
targets, not claims that prior work established these thresholds. A failed run
requires profiling and fixes, then a fresh run. Medium/High are optional additional
profiles and do not substitute for missing Low coverage.

Reports include uncapped frame intervals, CPU loop duration, effective graphics
profile and pixel ratio, draw/triangle counts, resource counts, build hash, browser
identity, reported hardware renderer when exposed, and explicit self-attestation.
Browser frame delivery is not GPU execution time. A user-agent string or checked
box alone cannot prove hardware execution. Review exported evidence and the
tester account together. Software-renderer results cannot close this gate.

No career payload, credentials or save contents are exported. No telemetry is
uploaded automatically. Exported results remain `pending-review`; timing-pass is
only one subcheck. Galaxy A15 results do not establish iOS performance or store
certification.
