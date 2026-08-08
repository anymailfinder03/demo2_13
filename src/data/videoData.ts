export interface VideoItem {
  id: number;
  title: string;
  subtitle: string;
  src: string;
  poster: string;
}

const VIDEO_BASE = 'https://res.cloudinary.com/ll6thxdy/video/upload';
const VIDEO_TX = 'f_mp4,q_auto:eco,w_640';
const POSTER_TX = 'so_0,f_auto,q_auto,w_640';

export const videos: VideoItem[] = [
  {
    id: 2,
    title: '',
    subtitle: '',
    src: `${VIDEO_BASE}/${VIDEO_TX}/v1786149760/1_8_hnkxo3.mp4`,
    poster: `${VIDEO_BASE}/${POSTER_TX}/v1786149760/1_8_hnkxo3.jpg`,
  },
  {
    id: 5,
    title: '',
    subtitle: '',
    src: `${VIDEO_BASE}/${VIDEO_TX}/v1786149755/1_9_lcvp2y.mp4`,
    poster: `${VIDEO_BASE}/${POSTER_TX}/v1786149755/1_9_lcvp2y.jpg`,
  },
  {
    id: 1,
    title: '',
    subtitle: '',
    src: `${VIDEO_BASE}/${VIDEO_TX}/v1786149755/1_4_c38hqf.mp4`,
    poster: `${VIDEO_BASE}/${POSTER_TX}/v1786149755/1_4_c38hqf.jpg`,
  },
  {
    id: 7,
    title: '',
    subtitle: '',
    src: `${VIDEO_BASE}/${VIDEO_TX}/v1786149759/1_2_yxhvqw.mp4`,
    poster: `${VIDEO_BASE}/${POSTER_TX}/v1786149759/1_2_yxhvqw.jpg`,
  },
  {
    id: 4,
    title: '',
    subtitle: '',
    src: `${VIDEO_BASE}/${VIDEO_TX}/v1786149755/1_12_ki6vht.mp4`,
    poster: `${VIDEO_BASE}/${POSTER_TX}/v1786149755/1_12_ki6vht.jpg`,
  },
  {
    id: 9,
    title: '',
    subtitle: '',
    src: `${VIDEO_BASE}/${VIDEO_TX}/v1786149757/1_6_mklb5f.mp4`,
    poster: `${VIDEO_BASE}/${POSTER_TX}/v1786149757/1_6_mklb5f.jpg`,
  },
  {
    id: 3,
    title: '',
    subtitle: '',
    src: `${VIDEO_BASE}/${VIDEO_TX}/v1786149765/1_14_xoja9h.mp4`,
    poster: `${VIDEO_BASE}/${POSTER_TX}/v1786149765/1_14_xoja9h.jpg`,
  },
  {
    id: 8,
    title: '',
    subtitle: '',
    src: `${VIDEO_BASE}/${VIDEO_TX}/v1786149757/1_15_jex709.mp4`,
    poster: `${VIDEO_BASE}/${POSTER_TX}/v1786149757/1_15_jex709.jpg`,
  },
  {
    id: 6,
    title: '',
    subtitle: '',
    src: `${VIDEO_BASE}/${VIDEO_TX}/v1786149755/1_13_dmhivo.mp4`,
    poster: `${VIDEO_BASE}/${POSTER_TX}/v1786149755/1_13_dmhivo.jpg`,
  },
  {
    id: 10,
    title: '',
    subtitle: '',
    src: `${VIDEO_BASE}/${VIDEO_TX}/v1786149757/1_1_ubtnjq.mp4`,
    poster: `${VIDEO_BASE}/${POSTER_TX}/v1786149757/1_1_ubtnjq.jpg`,
  },
];
