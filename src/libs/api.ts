const BASE_URL = "http://localhost:3000";

export interface Painting {}

const get = async <T>(url: string) => {};

const post = async <T>(url: string, data: T) => {};

export const getPaintings = async () =>
  get<Painting[]>(`${BASE_URL}/paintings`);

export const addPainting = async (data: Painting) =>
  post<Painting>(`${BASE_URL}/paintings`, data);
