import {Image ,View , StyleSheet, ScrollView, Text, TouchableOpacity, Linking, Modal} from "react-native";
import { Inter_300Light, Inter_400Regular, Inter_600SemiBold, Inter_800ExtraBold, useFonts } from "@expo-google-fonts/inter"
import { useNavigation } from '@react-navigation/native';
import React, { useState } from "react";




export default function Cursos(){

   
    const navigation = useNavigation();
  
    const [fontsLoaded] = useFonts({
      Inter_600SemiBold,
      Inter_300Light,
      Inter_800ExtraBold,
      Inter_400Regular,
  

    });
  
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState({});
  

   if(!fontsLoaded){
    return null;
   }
  
   const openWhatsApp = () => {
    const phoneNumber = '5592993519434';
    const message = 'Olá, gostaria de saber mais sobre os cursos.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    Linking.openURL(url).catch((err) => console.error('Erro ao tentar abrir o WhatsApp: ', err));
  };
  const openModal = (course) => {
    setSelectedCourse(course);
    setModalVisible(true);
};

const closeModal = () => {
    setModalVisible(false);
};

  

    return (

    <ScrollView style={styles.container}>
      
      
      <View>
         
          <View style={styles.box3}>

             <View style={styles.lista}>
            
                 <Text style={styles.categorias}>Em Destaque</Text>

                  <ScrollView horizontal showsHorizontalScrollIndicator={false}>



                  <View style={styles.box}>

                  <TouchableOpacity onPress={() => openModal({
                   name: 'Lingua Portuguesa',
                   duration: '4 meses',
                   content: [
                    'Revisão de Gramática e Normas da Língua Portuguesa',
                    'Análise Sintática: Sujeito, Predicado e Complementos',
                    'Concordância Nominal e Verbal',
                    'Regência Verbal e Nominal',
                    'Ortografia e Acentuação',
                    'Pontuação e Uso Adequado de Vírgulas',
                    'Interpretação de Textos e Gêneros Textuais',
                    'Produção Textual: Coesão e Coerência',
                    'Revisão para Concursos e Provas',
                    'Análise Crítica de Textos Jornalísticos',
                            ]
                    })}>
                    <Image source={require('../imagens/1.png')} style={styles.image} />
                  </TouchableOpacity>

                        
                        <View style={styles.descricao}>
                            <Text style={styles.cursos}>Lingua Portuguesa</Text>
                            <Text style={styles.duracao}>4 meses</Text>
                        </View>
                  </View>
                  
                  <View style={styles.box}>
                      
                  <TouchableOpacity onPress={() => openModal({
                   name: 'Inglês Módulo II',
                   duration: '5 meses',
                   content: [
                     'Revisão de Gramática Básica',
                     'Verbos Modais e Suas Aplicações',
                     'Tempos Verbais: Simple Past, Past Continuous e Present Perfect',
                     'Construções de Sentenças e Estrutura de Perguntas',
                     'Conversação em Inglês Intermediário',
                     'Vocabulário e Expressões Idiomáticas Comuns',
                     'Compreensão de Textos Escritos e Oratórios',
                     'Prática de Listening e Pronúncia',
                     'Simulações e Role-playing',
                     'Avaliação de Fluência e Feedback',
                            ]
                    })}>
                    <Image source={require('../imagens/2.png')} style={styles.image} />
                  </TouchableOpacity>

                       <View style={styles.descricao}>
                            <Text style={styles.cursos}>Inglês Módulo II</Text>
                            <Text style={styles.duracao}>5 meses</Text>
                       </View>
                  </View>

                  <View style={styles.box}>

                  <TouchableOpacity onPress={() => openModal({
                   name: 'Redação',
                   duration: '4 meses',
                   content: [
                      'Estrutura da Redação Dissertativa-Argumentativa',
                      'Análise de Temas e Estruturas Comuns no ENEM',
                      'Coesão, Coerência e Organização de Ideias',
                      'Uso de Recursos Linguísticos e Argumentativos',
                      'Técnicas de Introdução e Conclusão',
                      'Exemplos de Textos Nota Máxima',
                      'Exercícios de Produção Textual e Correção Coletiva',
                      'Revisão de Ortografia e Gramática para o ENEM',
                      'Treinamento de Redação sob Pressão de Tempo',
                      'Simulado de Redação com Avaliação e Feedback',
                            ]
                    })}>
                    <Image source={require('../imagens/3.png')} style={styles.image} />
                   </TouchableOpacity>

                       <View style={styles.descricao}>
                            <Text style={styles.cursos}>Redação para o ENEM</Text>
                            <Text style={styles.duracao}>4 meses</Text>
                       </View>
                  </View>

                  <View style={styles.box}>

                  <TouchableOpacity onPress={() => openModal({
                   name: 'Google ADS',
                   duration: '3 meses',
                   content: [
                      'Introdução ao Google Ads e Marketing Digital',
                      'Criação de Campanhas: Redes de Pesquisa e Display',
                      'Pesquisa de Palavras-chave e Estrutura de Anúncios',
                      'Segmentação de Audiência e Personalização',
                      'Configuração de Orçamentos e Lances',
                      'Métricas e KPI’s: CPC, CTR, CPA',
                      'Testes A/B e Análise de Desempenho',
                      'Remarketing e Campanhas de Retargeting',
                      'Análise de Resultados e Relatórios',
                      'Uso do Google Analytics Integrado',
                      'Tendências e Práticas Avançadas em Google Ads',
                      'Criação e Execução de Estratégias de Conversão',
                            ]
                    })}>
                    <Image source={require('../imagens/5.png')} style={styles.image} />
                   </TouchableOpacity>

                       <View style={styles.descricao}>
                            <Text style={styles.cursos}>Google ADS</Text>
                            <Text style={styles.duracao}>3 meses</Text>
                       </View>
                  </View>

                  <View style={styles.box}>

                      <TouchableOpacity onPress={() => openModal({
                       name: 'File Transfer Protocol',
                       duration: '2 meses',
                       content: [
                          'Introdução ao FTP e Protocolos de Transferência de Arquivos',
                          'Configuração de Servidores e Clientes FTP',
                          'Tipos de FTP: SFTP, FTPS, e TFTP',
                          'Transferência de Arquivos entre Computadores e Servidores',
                          'Segurança em FTP e Criptografia',
                          'Comandos Básicos e Avançados do FTP',
                          'Automação de Tarefas com FTP',
                          'Gerenciamento de Permissões e Acesso',
                          'Ferramentas de FTP: FileZilla, WinSCP, e Outros',
                          'Resolução de Problemas e Práticas de Backup',
                            ]
                       })}>
                       <Image source={require('../imagens/4.png')} style={styles.image} />
                      </TouchableOpacity>

                      <View style={styles.descricao}>
                           <Text style={styles.cursos}>File Transfer Protocol</Text>
                           <Text style={styles.duracao}>2 meses</Text>
                      </View>
                  </View>

                  <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={closeModal}
                     >
                     <View style={styles.modalOverlay}>
                       <View style={styles.modalContent}>
                          <Text style={styles.modalTitle}>{selectedCourse.name}</Text>
                          <Text style={styles.modalDuration}>{selectedCourse.duration}</Text>

                        <ScrollView style={styles.contentScroll}>
                            {selectedCourse.content?.map((item, index) => (
                                <Text key={index} style={styles.modalContentText}>• {item}</Text>
                            ))}
                        </ScrollView>

                        <TouchableOpacity style={styles.button} onPress={openWhatsApp}>
                            <Text style={styles.buttonText}>Entrar em contato via WhatsApp</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                            <Text style={styles.closeButtonText}>Fechar</Text>
                        </TouchableOpacity>
                      </View>
                   </View>
                 </Modal>

                 </ScrollView>
            
             </View>

         </View>

     </View>


     <View>
         
         <View style={styles.box3}>

            <View style={styles.lista}>
           
                <Text style={styles.categorias}>Informática</Text>

                 <ScrollView horizontal showsHorizontalScrollIndicator={false}>



                 <View style={styles.box}>

                  <TouchableOpacity onPress={() => openModal({
                   name: 'Marketing Digital',
                   duration: '3 meses',
                   content: [
                    'Conceitos e Estratégias de Marketing Digital',
                    'SEO e Otimização para Mecanismos de Busca',
                    'Redes Sociais: Estratégias e Gerenciamento',
                    'Google Analytics e Monitoramento de Resultados',
                    'E-mail Marketing e Automação',
                    'Publicidade em Redes Sociais (Facebook, Instagram, etc.)',
                    'Marketing de Conteúdo e Copywriting',
                    'Funil de Vendas e Geração de Leads',
                    'Estratégias de Retargeting e Remarketing',
                    'Criação e Análise de Campanhas Integradas',
                            ]
                    })}>
                    <Image source={require('../imagens/7.png')} style={styles.image} />
                   </TouchableOpacity>
                       
                       <View style={styles.descricao}>
                           <Text style={styles.cursos}>Marketing Digital</Text>
                           <Text style={styles.duracao}>3 meses</Text>
                       </View>
                 </View>
                 
                 <View style={styles.box}>
                     
                 <TouchableOpacity onPress={() => openModal({
                   name: 'Wordpress',
                   duration: '4 meses',
                   content: [
                      'Introdução ao Wordpress e Instalação',
                      'Configuração de Temas e Personalização',
                      'Plugins Essenciais e Funcionalidades Extras',
                      'Estrutura de Páginas, Posts e Categorias',
                      'SEO para Wordpress e Otimização de Imagens',
                      'Configuração de Plugins de Segurança e Backup',
                      'Design Responsivo e Personalização de Layouts',
                      'E-commerce com WooCommerce',
                      'Manutenção, Atualização e Backup do Site',
                      'Publicação e Gerenciamento de Conteúdo',
                            ]
                    })}>
                    <Image source={require('../imagens/8.png')} style={styles.image} />
                   </TouchableOpacity>

                      <View style={styles.descricao}>
                           <Text style={styles.cursos}>Wordpress</Text>
                           <Text style={styles.duracao}>4 meses</Text>
                      </View>
                 </View>

                 <View style={styles.box}>

                  <TouchableOpacity onPress={() => openModal({
                   name: 'Javascript',
                   duration: '6 meses',
                   content: [
                      'Introdução ao Javascript e Linguagens de Programação',
                      'Sintaxe e Variáveis no Javascript',
                      'Estruturas de Controle e Funções',
                      'Manipulação do DOM e Eventos',
                      'Arrays, Objetos e Iterações',
                      'Programação Assíncrona e Promises',
                      'Debugging e Tratamento de Erros',
                      'Frameworks Populares: Vue.js, React, e Angular',
                      'Aplicações para Web Interativas',
                      'Práticas e Exercícios para Desenvolvimento Real',
                            ]
                    })}>
                    <Image source={require('../imagens/9.png')} style={styles.image} />
                   </TouchableOpacity>

                      <View style={styles.descricao}>
                           <Text style={styles.cursos}>Javascript</Text>
                           <Text style={styles.duracao}>6 meses</Text>
                      </View>
                 </View>

                 <View style={styles.box}>

                 <TouchableOpacity onPress={() => openModal({
                   name: 'Desenvolvimento Web',
                   duration: '6 meses',
                   content: [,
                        'Introdução ao Desenvolvimento Web e Tecnologias',
                        'Estrutura de um Site: HTML, CSS, e JavaScript',
                        'Fundamentos de HTML5 e Boas Práticas',
                        'Estilização e Design com CSS3',
                        'Programação com JavaScript: Básico e Intermediário',
                        'Introdução a Bibliotecas: Bootstrap e jQuery',
                        'Desenvolvimento Frontend com React e Vue.js',
                        'Fundamentos do Backend: PHP e MySQL',
                        'Integração de APIs e Comunicação com Servidores',
                        'Segurança e Acessibilidade Web',
                        'Publicação de Sites e Gerenciamento de Domínios',
                            ]
                    })}>
                    <Image source={require('../imagens/10.png')} style={styles.image} />
                   </TouchableOpacity>

                      <View style={styles.descricao}>
                           <Text style={styles.cursos}>Desenvolvimento Web</Text>
                           <Text style={styles.duracao}>6 meses</Text>
                      </View>
                 </View>

                 <View style={styles.box}>

                 <TouchableOpacity onPress={() => openModal({
                   name: 'Criptomoedas',
                   duration: '2 meses',
                   content: [
                      'Introdução às Criptomoedas e Blockchain',
                      'Bitcoin: História e Funcionamento',
                      'Altcoins: Ethereum, Litecoin, Ripple, e Outras',
                      'Mineração e Blockchain',
                      'Carteiras Digitais e Segurança em Criptoativos',
                      'Funcionamento de Exchanges e Como Operar',
                      'Compra e Venda de Criptomoedas',
                      'Trading: Análise Técnica e Fundamentalista',
                      'Estratégias de Investimento em Criptoativos',
                      'Aspectos Legais e Tributação de Criptomoedas',
                      'Desafios e Riscos do Mercado de Criptoativos',
                      'Ferramentas e Plataformas para Trading',
                      'Staking, Lending, e Outras Formas de Renda Passiva',
                      'Criptoativos em Contexto Global e Regulamentação',
                      'Futuro das Criptomoedas: Tendências e Inovações',
                            ]
                    })}>
                    <Image source={require('../imagens/11.png')} style={styles.image} />
                   </TouchableOpacity>

                     <View style={styles.descricao}>
                          <Text style={styles.cursos}>Criptomoedas</Text>
                          <Text style={styles.duracao}>2 meses</Text>
                     </View>
                 </View>

                 

                </ScrollView>
           
            </View>

        </View>

    </View>

      <View style={styles.imagecenter}>
        <Image style={styles.imgcenter}source={require('../imagens/baner.png')}/>
      </View>




      <View>
         
         <View style={styles.box3}>

            <View style={styles.lista}>
           
                <Text style={styles.categorias}>Design</Text>

                 <ScrollView horizontal showsHorizontalScrollIndicator={false}>



                 <View style={styles.box}>

                    <TouchableOpacity onPress={() => openModal({ 
                         name: 'Corel Draw', 
                         duration: '4 meses',
                         content: [
                              'Introdução ao Corel Draw e Ferramentas Básicas',
                              'Edição de Imagens e Manipulação de Vetores',
                              'Criação de Formas e Efeitos Visuais',
                              'Tipografia e Criação de Textos Artísticos',
                              'Estrutura de Layouts e Composição',
                              'Design de Logotipos e Identidade Visual',
                              'Criação de Ilustrações e Ícones',
                              'Exportação e Configuração para Impressão',
                              'Design para Materiais Publicitários e Marketing',
                              'Técnicas Avançadas e Filtros',
                              'Preparação para Mídia Digital e Impressa',
                              'Exercícios e Projetos de Aplicação Prática',
                              'Projeto Final: Criação de Material Publicitário Completo',
                                  ]
                            })}>
                            <Image source={require('../imagens/12.png')} style={styles.image} />
                     </TouchableOpacity>
                       
                       <View style={styles.descricao}>
                           <Text style={styles.cursos}>Corel Draw</Text>
                           <Text style={styles.duracao}>4 meses</Text>
                       </View>
                 </View>
                 
                 <View style={styles.box}>
                     
                 <TouchableOpacity onPress={() => openModal({
                   name: 'Photoshop',
                   duration: '5 meses',
                   content: [
                      'Interface do Photoshop e Configurações Básicas',
                      'Ferramentas de Seleção e Edição de Imagem',
                      'Camadas e Máscaras de Camada',
                      'Correção de Cores e Filtros',
                      'Edição Avançada com Ferramentas de Retoque',
                      'Design de Layouts e Composição Visual',
                      'Criação de Efeitos Visuais e Ajustes de Luz',
                      'Ferramentas de Texto e Tipografia',
                      'Exportação e Preparação para Web e Impressão',
                      'Projeto Prático: Criação de Artes Digitais',
                           ]
                    })}>
                    <Image source={require('../imagens/13.png')} style={styles.image} />
                   </TouchableOpacity>

                      <View style={styles.descricao}>
                           <Text style={styles.cursos}>Photoshop</Text>
                           <Text style={styles.duracao}>5 meses</Text>
                      </View>
                 </View>

                 <View style={styles.box}>

                 <TouchableOpacity onPress={() => openModal({
                   name: 'Adobe Illustrator',
                   duration: '4 meses',
                   content: [
                        'Introdução ao Illustrator e Conceitos de Vetores',
                        'Ferramentas de Desenho e Manipulação de Formas',
                        'Criação de Ilustrações e Personagens',
                        'Efeitos e Gradientes Avançados',
                        'Trabalhando com Tipografia e Textos Artísticos',
                        'Organização de Camadas e Grupos',
                        'Criação de Logotipos e Identidade Visual',
                        'Estrutura de Layouts para Impressão',
                        'Desenvolvimento de Ilustrações para Web',
                        'Exportação e Configuração para Impressão',
                        'Integração com Outros Softwares Adobe',
                        'Uso de Ferramentas para Vetorização Automática',
                        'Práticas de Análise e Correção de Arte',
                        'Exercícios para Desenvolvimento Criativo',
                        'Projeto Prático: Desenvolvimento Completo de uma Arte para Publicação',
                            ]
                    })}>
                    <Image source={require('../imagens/14.png')} style={styles.image} />
                   </TouchableOpacity>

                      <View style={styles.descricao}>
                           <Text style={styles.cursos}>Adobe Ilustrator</Text>
                           <Text style={styles.duracao}>4 meses</Text>
                      </View>
                 </View>

                 <View style={styles.box}>

                     <TouchableOpacity onPress={() => openModal({ 
                      name: 'Canva', 
                      duration: '384 horas',
                      content: [
                        'Introdução ao Canva e Criação de Conta',
                        'Navegação e Exploração da Interface',
                        'Tipos de Projetos: Redes Sociais, Presentações, Cartazes e Mais',
                        'Escolha de Modelos Prontos e Customização',
                        'Ferramentas de Edição e Personalização de Layouts',
                        'Adição e Edição de Imagens, Formas e Ícones',
                        'Criação e Edição de Textos com Tipografias Criativas',
                        'Uso de Paletas de Cores e Harmonização Visual',
                        'Ferramentas de Efeitos: Sombras, Gradientes e Transparências',
                        'Upload de Imagens e Logos para Identidade Visual',
                        'Animações para Vídeos e Apresentações Interativas',
                        'Compartilhamento e Colaboração em Projetos',
                        'Exportação de Projetos para Web e Impressão',
                        'Projeto Final: Criação de um Material Completo para Redes Sociais e Marketing',
                             ]

                       })}>
                            <Image source={require('../imagens/15.png')} style={styles.image} />
                     </TouchableOpacity>

                      <View style={styles.descricao}>
                           <Text style={styles.cursos}>Canva</Text>
                           <Text style={styles.duracao}>384 horas</Text>
                      </View>
                 </View>

                 <View style={styles.box}>
                     
                 <TouchableOpacity onPress={() => openModal({
                   name: 'Design com I.A',
                   duration: '5 meses',
                   content: [
                      'Introdução à Inteligência Artificial em Design',
                      'Ferramentas de IA para Design Gráfico',
                      'Automação de Tarefas de Edição de Imagem',
                      'Criação de Arte Gerada por IA',
                      'Personalização e Aprendizado de Máquina para Design',
                      'Aplicações de IA em UX/UI',
                      'Ética e Limitações da IA em Design',
                      'Ferramentas Populares: DALL-E, Midjourney, e Stable Diffusion',
                      'Otimização de Trabalho Criativo com IA',
                      'Projeto Prático: Criação de Arte Gerada por IA',
                            ]
                    })}>
                    <Image source={require('../imagens/16.png')} style={styles.image} />
                   </TouchableOpacity>

                     <View style={styles.descricao}>
                          <Text style={styles.cursos}>Desing com I.A</Text>
                          <Text style={styles.duracao}>4 meses</Text>
                     </View>
                 </View>

                 

                </ScrollView>
           
            </View>

        </View>

    </View>
        
    <View>
         
         <View style={styles.box3}>

            <View style={styles.lista}>
           
                <Text style={styles.categorias}>Diversos</Text>

                 <ScrollView horizontal showsHorizontalScrollIndicator={false}>



                 <View style={styles.box}>

                 <TouchableOpacity onPress={() => openModal({
                   name: 'Inglês Avançado',
                   duration: '12 meses',
                   content: [
                        'Revisão de Gramática Avançada',
                        'Construção de Frases Complexas e Estruturas Avançadas',
                        'Vocabulário Técnico e Idiomático',
                        'Expressões e Gírias',
                        'Leitura e Interpretação de Textos Complexos',
                        'Prática de Pronúncia e Redução de Acento',
                        'Simulações de Conversações Complexas',
                        'Escrita Avançada e Artigos Acadêmicos',
                        'Exercícios para Fluência Completa',
                        'Avaliação de Proficiência Avançada',
                            ]
                    })}>
                    <Image source={require('../imagens/17.png')} style={styles.image} />
                   </TouchableOpacity>
                       
                       <View style={styles.descricao}>
                           <Text style={styles.cursos}>Inglês Avançado</Text>
                           <Text style={styles.duracao}>12 meses</Text>
                       </View>
                 </View>
                 
                 <View style={styles.box}>
                     
                 <TouchableOpacity onPress={() => openModal({
                   name: 'Manutenção de Computadores',
                   duration: '6 meses',
                   content: [
                       'Identificação e Funções dos Componentes',
                       'Ferramentas e Equipamentos de Manutenção',
                       'Diagnóstico de Problemas Comuns de Hardware',
                       'Montagem e Desmontagem de Computadores',
                       'Instalação de Sistemas Operacionais e Configurações',
                       'Atualizações de Drivers e Firmware',
                       'Configuração de BIOS e UEFI',
                       'Manutenção Preventiva e Cuidados com o Equipamento',
                       'Solução de Problemas de Conexão e Rede',
                       'Noções de Backup e Recuperação de Dados',
                       'Projeto Final: Manutenção e Diagnóstico Completo',
                            ]
                    })}>
                    <Image source={require('../imagens/18.png')} style={styles.image} />
                   </TouchableOpacity>

                      <View style={styles.descricao}>
                           <Text style={styles.cursos}>Manutenção de Computadores</Text>
                           <Text style={styles.duracao}>6 meses</Text>
                      </View>
                 </View>

                 <View style={styles.box}>

                 <TouchableOpacity onPress={() => openModal({
                   name: 'Libras',
                   duration: '4 meses',
                   content: [
                        'Introdução à Língua Brasileira de Sinais (LIBRAS)',
                        'Alfabeto Manual e Numerais',
                        'Comunicação no Cotidiano',
                        'Estrutura Gramatical de LIBRAS',
                        'Prática de Diálogos e Compreensão',
                        'Expressões Faciais e Corporais',
                        'Vocabulário para Contextos Diversos',
                        'Interpretação e Tradução de Textos',
                        'Conversação em LIBRAS',
                            ]
                    })}>
                    <Image source={require('../imagens/19.png')} style={styles.image} />
                   </TouchableOpacity>

                      <View style={styles.descricao}>
                           <Text style={styles.cursos}>Libras</Text>
                           <Text style={styles.duracao}>4 meses</Text>
                      </View>
                 </View>

                 <View style={styles.box}>

                 <TouchableOpacity onPress={() => openModal({
                   name: 'Inglês para Hotelaria',
                   duration: '5 meses',
                   content: [
                      'Vocabulário Específico de Hotelaria',
                      'Atendimento ao Cliente e Check-in/Check-out',
                      'Compreensão e Uso de Frases Comuns',
                      'Prática de Conversação para Hospitalidade',
                      'Vocabulário de Alimentação e Serviços de Quarto',
                      'Expressões para Situações de Emergência',
                      'Prática de Listening com Foco em Hotelaria',
                      'Simulação de Atendimentos e Reclamações',
                      'Escrita de E-mails e Comunicações Formais',
                      'Avaliação de Atendimento e Feedback',
                            ]
                    })}>
                    <Image source={require('../imagens/20.png')} style={styles.image} />
                   </TouchableOpacity>

                      <View style={styles.descricao}>
                           <Text style={styles.cursos}>Inglês para Hotelaria</Text>
                           <Text style={styles.duracao}>5 meses</Text>
                      </View>
                 </View>

                 <View style={styles.box}>

                     <TouchableOpacity onPress={() => openModal({
                     name: 'Introdução à Inteligência Artificial',
                     duration: '3 meses',
                     content: [
                         'Introdução à Inteligência Artificial e Histórico',
                         'Conceitos de Machine Learning e Deep Learning',
                         'Redes Neurais e Algoritmos de IA',
                         'Processamento de Linguagem Natural',
                         'IA para Visão Computacional',
                         'Ética e Impactos da IA na Sociedade',
                         'Ferramentas de IA: TensorFlow, PyTorch, e Outros',
                         'Introdução a Chatbots e Assistentes Virtuais',
                         'Aplicações Práticas de IA no Mercado',
                         'Projeto Prático de Aplicação de IA',
                            ]
                      })}>
                      <Image source={require('../imagens/21.png')} style={styles.image} />
                     </TouchableOpacity>

                     <View style={styles.descricao}>
                          <Text style={styles.cursos}>Inteligência Artificial</Text>
                          <Text style={styles.duracao}>3 meses</Text>
                     </View>
                 </View>

                

                </ScrollView>
           
            </View>

        </View>

    </View>

    <View style={styles.imagecenter}>
        <View>
           <Text style={styles.certificado}>Nosso certificado é valido em todo Brasil e está dentro das normas do   MEC na categoria de cursos livres</Text>
        </View>
          <Image style={styles.imgcenter}source={require('../imagens/certificado.png')}></Image>
        </View>
          
            
        <View style={styles.box7}>
              <TouchableOpacity style={styles.button} onPress={openWhatsApp}>
                  <Text style={styles.buttonText}>Entrar em contato via WhatsApp</Text>
              </TouchableOpacity>
        </View>

           <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Image source={require('../imagens/voltar.png')} style={styles.icon}/>
                <Text style={styles.backButtonText}>voltar</Text>
            </TouchableOpacity>

            
            
  
        
  </ScrollView>
    );
}
const styles = StyleSheet.create({
    
    categorias:{
     fontSize:30,
     fontFamily:'Inter_800ExtraBold',
     alignSelf:'flex-start',
     margin:7,
     marginTop:20,
      
    },
    box:{
      flexDirection:'column',
      alignItems:'center',
    
    },
    descricao:{
     flexDirection:'column',
     alignItems:'center',
     marginTop: -35,

    },

    image: {
        width: 400,
        height: 300, 
        marginRight: 20, 
        resizeMode:'contain',
     
    },
    cursos:{
    
      color: '#1466c3',
      fontSize: 20,
      fontFamily:'Inter_800ExtraBold',

    
    },
    duracao:{
      
      fontSize: 15,
      fontFamily:'Inter_600SemiBold',
    
    },
    
    box3:{
     width:'100%',
     height:400,
     marginTop :20,
     marginLeft:5,
     flexDirection:'column',
     
     
     
    },
    box7: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 20,
      marginBottom: 30,
  },
  button: {
      backgroundColor: '#25D366',
      paddingVertical: 15,
      paddingHorizontal: 30,
      borderRadius: 10,
      alignItems: 'center',
      marginTop:100,
  },
  buttonText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',

  },
  box6:{
    height:50,
    margin:10,
  },
  imagecenter:{
    width:'100%',
    height:300,
    marginTop:80,
    marginBottom:80,
  },
  imgcenter:{
    height:300,
    width: '100%',
    
  },
  certificado:{
    fontFamily:'Inter_600SemiBold',
    fontSize: 20,
    marginBottom:15,
    marginTop:20,
    margin:30,
    
    
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
},
modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    height:700,
    gap:20,
},
modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
},
modalDuration: {
    fontSize: 18,
    marginBottom: 20,
},
closeButton: {
    marginTop: 15,
},
closeButtonText: {
    color: 'blue',
    fontSize:20,
    fontFamily:'Inter_400Regular',

       
},
modalContentText: {
    fontSize: 20,
    marginVertical: 5,
    fontFamily:'Inter_400Regular',
},
contentScroll: {
    maxHeight: 700,
    marginBottom: 0,
},
backButton: {
  
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#1466c3',
  padding: 10,
  borderRadius: 20,
  width:100,
  left:60,
  marginTop:40,
  marginBottom:30,

},
icon: {
  marginRight: 5,
  width:20,
  height:20,
},
backButtonText: {
  color: 'white',
  fontSize: 16,
  fontWeight: 'bold',
},
text: {
  fontSize: 18,
},

});