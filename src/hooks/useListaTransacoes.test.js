import { act, renderHook } from '@testing-library/react';
import { buscaTransacoes } from '../services/transacoes';
import useListaTransacoes from './useListaTransacoes';

jest.mock('../services/transacoes');

const mockTransacao = [
  {
    id: 1,
    transacao: 'Depósito',
    valor: '100',
    data: '08/06/2024',
    mes: 'Junho',
  },
];

describe('hook/useListaTransacoes.js', () => {
  test('deve retornar uma lista de transações e uma função que a atualiza', async () => {
    buscaTransacoes.mockImplementation(() => mockTransacao);
    const { result } = renderHook(() => useListaTransacoes());
    expect(result.current[0]).toEqual([]);
    await act(async () => {
      result.current[1]();
    });
    expect(result.current[0]).toEqual(mockTransacao);
  });
});
