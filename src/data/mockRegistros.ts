import { RegistroIndustrial } from "../types/RegistroIndustrial";

export const mockRegistros: RegistroIndustrial[] = [
  {
    id: 1,
    nome: "Sensor de Temperatura",
    descricao: "Temperatura acima do normal",
    status: "alerta",
    data: "10/06/2026"
  },
  {
    id: 2,
    nome: "Motor Principal",
    descricao: "Funcionamento normal",
    status: "normal",
    data: "10/06/2026"
  }
];