import heroRefinerySunset from '../assets/photos/adw-hero-refinery-sunset.jpg'
import pumpjackMain from '../assets/photos/adw-pumpjack-main.jpg'
import pumpjackAlt from '../assets/photos/adw-pumpjack-alt.jpg'
import refineryA from '../assets/photos/adw-refinery-a.jpg'
import refineryB from '../assets/photos/adw-refinery-b.jpg'
import storageTanks from '../assets/photos/adw-storage-tanks.jpg'
import pipelineDesert from '../assets/photos/adw-pipeline-desert.jpg'
import drillingRig from '../assets/photos/adw-drilling-rig.jpg'
import ppeWorkers from '../assets/photos/adw-ppe-workers.jpg'
import construction from '../assets/photos/adw-construction.jpg'
import compressorStation from '../assets/photos/adw-compressor-station.jpg'

// Real, land-based (onshore) Oil & Gas / industrial photography — sourced from
// Wikimedia Commons (public domain / freely licensed). No offshore or marine
// imagery is used anywhere on the site, per the ADW brand brief.
export const photos = {
  heroRefinerySunset,
  pumpjackMain,
  pumpjackAlt,
  refineryA,
  refineryB,
  storageTanks,
  pipelineDesert,
  drillingRig,
  ppeWorkers,
  construction,
  compressorStation,
}

export type PhotoKey = keyof typeof photos

export default function PhotoImage({
  photo,
  alt,
  className = '',
}: {
  photo: PhotoKey
  alt: string
  className?: string
}) {
  return <img src={photos[photo]} alt={alt} loading="lazy" className={`photo-grade ${className}`} />
}
