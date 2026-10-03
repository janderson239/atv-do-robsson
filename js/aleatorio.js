const nomes = ["Jogador", "Gamer", "Player 1", "Viajante", "Aventureiro"];

export function aleatorio(lista) {
    const posicao = Math.floor(Math.random() * lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes);