import axios from "axios";
import { baseUrl } from './constants';

export const publicRequest = axios.create({
  baseURL: baseUrl,
});
