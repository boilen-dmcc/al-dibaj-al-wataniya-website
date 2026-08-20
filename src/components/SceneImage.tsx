import { PumpjackFieldScene, RefineryScene, DesertRigScene, PipelineScene, PPEWorkersScene } from './illustrations/Scenes'

const map = {
  pumpjack: PumpjackFieldScene,
  refinery: RefineryScene,
  desert: DesertRigScene,
  pipeline: PipelineScene,
  ppe: PPEWorkersScene,
}

export type SceneKey = keyof typeof map

export default function SceneImage({ scene, className = '' }: { scene: SceneKey; className?: string }) {
  const Comp = map[scene]
  return <Comp className={className} />
}
