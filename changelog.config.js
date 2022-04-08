module.exports = {
  disableEmoji: false,
  format: '{type}{scope}: {emoji}{subject}',
  list: ['test', 'feat', 'fix', 'chore', 'docs', 'refactor', 'style', 'ci', 'perf'],
  maxMessageLength: 64,
  minMessageLength: 3,
  questions: ['type', 'scope', 'subject', 'body', 'breaking', 'issues', 'lerna'],
  scopes: [],
  types: {
    chore: {
      description: 'Processo de build ou alterações em ferramentas auxiliares',
      emoji: '🤖',
      value: 'chore'
    },
    ci: {
      description: 'Alterações relacionadas ao CI',
      emoji: '🎡',
      value: 'ci'
    },
    docs: {
      description: 'Apenas modificações na documentação do projeto',
      emoji: '✏️',
      value: 'docs'
    },
    feat: {
      description: 'Um novo recurso',
      emoji: '🎸',
      value: 'feat'
    },
    fix: {
      description: 'Uma correção de bug',
      emoji: '🐛',
      value: 'fix'
    },
    perf: {
      description: 'Uma alteração de código que melhora o desempenho',
      emoji: '⚡️',
      value: 'perf'
    },
    refactor: {
      description: 'Uma alteração de código que não corrige um bug ou adiciona um recurso',
      emoji: '💡',
      value: 'refactor'
    },
    release: {
      description: 'Criar um commit de lançamento (release)',
      emoji: '🏹',
      value: 'release'
    },
    style: {
      description: 'Correção no markup, espaço em branco, formatação, ponto e vírgula ausente...',
      emoji: '💄',
      value: 'style'
    },
    test: {
      description: 'Adicionando testes ausentes',
      emoji: '💍',
      value: 'test'
    }
  }
};