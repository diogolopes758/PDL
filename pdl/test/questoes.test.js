import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { carregarQuestoes, normalizarQuestoes, URL_REMOTA } from '../src/services/questoes.js';

const local = JSON.parse(await readFile(new URL('../public/questoes.json', import.meta.url)));
const remoto = [
  { id: 1, ano: 2022, area: 'Matemática', pergunta: 'Quanto é 2x + 6 = 14?', alternativas: ['2', '3', '4', '5', '8'], correta: 2 },
  { id: 2, ano: 2022, area: 'Biologia', pergunta: 'Qual a função da mitocôndria?', alternativas: ['DNA', 'Respiração', 'Anticorpos', 'Proteínas', 'Divisão'], correta: 1 },
];

test('normaliza o banco real e os formatos de gabarito', () => {
  const resultado = normalizarQuestoes(local, 'local');
  assert.equal(resultado.length, 65);
  assert.equal(resultado[0].correta, 3);
  assert.equal(resultado.find(q => q.id === 'local:4').correta, 3);
  assert.equal(resultado.find(q => q.id === 'local:5').correta, 5);
  assert.equal(resultado.find(q => q.id === 'local:6').correta, 1);
});

test('normaliza as questões remotas e não colide com IDs locais', () => {
  const resultado = normalizarQuestoes(remoto, 'remoto');
  assert.deepEqual(resultado.map(q => [q.id, q.materia, q.correta]), [['remoto:1', 'matematica', 3], ['remoto:2', 'biologia', 2]]);
  assert.notEqual(resultado[0].id, normalizarQuestoes(local, 'local')[0].id);
});

test('rejeita conteúdo inválido, gabaritos fora da faixa e IDs repetidos', () => {
  assert.throws(() => normalizarQuestoes({}, 'remoto'));
  assert.throws(() => normalizarQuestoes([{ ...remoto[0], correta: 5 }], 'remoto'));
  assert.throws(() => normalizarQuestoes([remoto[0], remoto[0]], 'remoto'));
});

test('combina as fontes e preserva o banco local quando o remoto falha', async () => {
  const anterior = globalThis.fetch;
  try {
    globalThis.fetch = async (url) => ({ ok: true, json: async () => url === URL_REMOTA ? remoto : local });
    let resultado = await carregarQuestoes();
    assert.equal(resultado.questoes.length, 67);
    assert.deepEqual(resultado.falhas, []);
    globalThis.fetch = async (url) => url === URL_REMOTA ? { ok: false, status: 503 } : { ok: true, json: async () => local };
    resultado = await carregarQuestoes();
    assert.equal(resultado.questoes.length, 65);
    assert.deepEqual(resultado.falhas, ['remoto']);
  } finally { globalThis.fetch = anterior; }
});
