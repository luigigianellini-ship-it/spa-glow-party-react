export interface SiteConfig {
  meta: {
    titulo_site: string;
    descricao_site: string;
    palavras_chave: string;
    url_base: string;
    imagem_og: string;
  };
  instituicao: {
    nome: string;
    sigla: string;
    slogan: string;
    ano_fundacao: string;
    data_fundacao: string;
    cnpj: string;
    registro_osc: string;
    utilidade_publica: string;
  };
  hero: {
    badge: string;
    titulo_destaque: string;
    subtitulo: string;
    foto_url: string;
    foto_legenda: string;
    video_url?: string;
    campanha_urgente: {
      ativa: boolean;
      titulo: string;
      texto: string;
      link_acao: string;
    };
  };
  quem_somos: {
    titulo: string;
    subtitulo: string;
    historia: string;
    data_fundacao?: string;
    ano_fundacao?: string;
    missao: string;
    visao: string;
    valores: Array<{
      titulo: string;
      descricao: string;
    }>;
    equipe: Array<{
      nome: string;
      cargo: string;
      foto: string;
      bio: string;
    }>;
  };
  o_que_fazemos: {
    titulo: string;
    subtitulo: string;
    publico_alvo: string;
    regiao_atuacao: string;
    projetos: Array<{
      id: string;
      titulo: string;
      categoria: string;
      faixa_etaria: string;
      horario: string;
      foto: string;
      video_url?: string;
      descricao: string;
      icone: string;
    }>;
  };
  impacto: {
    titulo: string;
    subtitulo: string;
    metricas: Array<{
      valor: string;
      label: string;
      detalhe: string;
    }>;
    depoimentos: Array<{
      nome: string;
      cargo: string;
      foto: string;
      texto: string;
      autorizacao: string;
      video_url?: string;
    }>;
    galeria: Array<{
      titulo: string;
      categoria: string;
      url: string;
      video_url?: string;
    }>;
  };
  como_ajudar: {
    titulo: string;
    subtitulo: string;
    pix: {
      chave: string;
      tipo_chave: string;
      favorecido: string;
      banco: string;
      cnpj: string;
    };
    dados_bancarios: {
      banco: string;
      agencia: string;
      conta_corrente: string;
      titular: string;
      cnpj: string;
    };
    valores_sugeridos: Array<{
      valor: string;
      impacto: string;
    }>;
    doacao_itens: {
      titulo: string;
      descricao: string;
      itens: Array<{
        item: string;
        status: string;
        cor: string;
      }>;
    };
    voluntariado: {
      titulo: string;
      descricao: string;
      areas: string[];
      link_formulario: string;
      link_embed?: string;
    };
    parcerias_empresas: {
      titulo: string;
      descricao: string;
      beneficios: string[];
    };
  };
  transparencia: {
    titulo: string;
    subtitulo: string;
    documentos_legais: Array<{
      nome: string;
      descricao: string;
      arquivo: string;
    }>;
    relatorios_atividades: Array<{
      ano: string;
      titulo: string;
      status: string;
      link: string;
    }>;
    destinacao_recursos: {
      descricao: string;
      distribuicao: Array<{
        categoria: string;
        percentual: number;
        cor: string;
      }>;
    };
  };
  noticias_blog: {
    titulo: string;
    subtitulo: string;
    artigos: Array<{
      id: string;
      titulo: string;
      data: string;
      categoria: string;
      foto: string;
      resumo: string;
      conteudo_completo: string;
    }>;
  };
  contato: {
    titulo: string;
    subtitulo: string;
    endereco: {
      logradouro: string;
      bairro: string;
      cidade: string;
      estado: string;
      cep: string;
      referencia: string;
    };
    telefones: {
      principal: string;
      whatsapp: string;
      whatsapp_link: string;
    };
    emails: {
      geral: string;
      voluntariado: string;
      parcerias: string;
    };
    horario_atendimento: string;
    redes_sociais: {
      instagram: string;
      facebook: string;
      youtube: string;
      linkedin: string;
    };
    mapa_embed_url: string;
  };
}
