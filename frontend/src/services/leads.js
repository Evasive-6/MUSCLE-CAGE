import api from "@/services/api";

export async function submitLead(endpoint, payload) {
  const response = await api.post(endpoint, payload);
  return response.data;
}