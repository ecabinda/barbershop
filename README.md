# Style Place Barbershop — Premium Website

Website oficial de alto padrão desenvolvido para a **Style Place Barbershop**, barbearia de referência situada nas Caldas da Rainha, Portugal.

Classificada com **5.0 estrelas no Google** com mais de **1.134 avaliações reais**, este projeto foi concebido para transmitir exclusividade, rigor técnico, hospitalidade e elegância editorial.

---

## 🌟 Principais Destaques e Experiência do Utilizador

1. **Identidade Visual & Direção Editorial:**
   - Paleta de cores sofisticada: Fundo escuro profundo (`#111111`), superfícies texturadas (`#1C1C1C`), tipografia marfim (`#F5F1E8`) e detalhes dourados champanhe (`#C5A572`).
   - Tipografia de luxo com serifa editorial (*Playfair Display*) e legibilidade contemporânea (*Inter*).
   - Efeitos visuais inspirados no repositório de animações fluidas [Não Codei / Free Code](https://naocodei.com/free-code/).

2. **Efeitos & Microinterações:**
   - **Spotlight Cards (`SpotlightCard.tsx`)**: Efeito dinâmico onde a iluminação dourada e os contornos seguem a posição do rato com física suave.
   - **Slider Interativo Antes/Depois (`BeforeAfterSlider.tsx`)**: Comparação arrastável em tempo real utilizando as fotografias autênticas de corte e perfil da barbearia.
   - **Galeria com Lightbox Fluido (`Gallery.tsx`)**: Apresentação das fotografias reais do espaço (Loja 17), da profissional Clara, do interior com iluminação hexagonal de estúdio e dos acabamentos de corte, com ampliação e navegação por teclado.

3. **Área de Agendamento Interativa (`BookingModal.tsx` & `BookingSection.tsx`):**
   - **Passo 1**: Seleção do Serviço (Corte de Cabelo Personalizado, Tratamento & Aparar de Barba, Corte + Barba Signature, Acabamentos & Contornos).
   - **Passo 2**: Seleção de Especialista (Clara — com destaque para a sua fluência em Inglês e especialização em visagismo — ou Barbeiro Style Place, ou Primeiro Disponível).
   - **Passo 3**: Escolha de dia e seleção de horários disponíveis.
   - **Passo 4**: Dados do cliente (Nome, Telemóvel e Observações).
   - **Passo 5**: Confirmação visual imediata com botão de sincronização direta com o WhatsApp oficial (`+351 925 194 001`) pré-preenchido com todos os detalhes da marcação.

4. **Integração WhatsApp & Contactos:**
   - Botão flutuante com badge de disponibilidade em tempo real e mensagem pré-formatada.
   - Mapa interativo com rota direta no Google Maps para a Rua de Vitorino Fróis n.º 31, Loja 17, Caldas da Rainha.
   - Click-to-call direto para marcações telefónicas.

5. **SEO Local & Performance:**
   - Metadados otimizados para termos de pesquisa em Portugal (*Barbearia Caldas da Rainha*, *Barbeiro Caldas da Rainha*, *Corte masculino Caldas da Rainha*).
   - Dados Estruturados Schema.org `BarberShop` com morada precisa, coordenadas geográficas, horários e pontuação agregada (5.0 / 1.134 avaliações).
   - `sitemap.xml` e `robots.txt` gerados nativamente.
   - Bundle First Load JS ultra-leve (~126 kB).

---

## 📸 Fotografias Reais Utilizadas

Todas as imagens fornecidas na pasta `fotos/` foram integradas no projeto:
- `public/images/storefront.png`: Fachada exterior da barbearia na Loja 17 com o poste tradicional de barbeiro e logótipo em vinil fosco.
- `public/images/interior.png`: Estações de trabalho, espelhos e iluminação de teto hexagonal de estúdio.
- `public/images/barber-clara.png`: Clara, especialista elogiada nas avaliações pela sua mestria e simpatia.
- `public/images/barber-chair.png`: Barbeiro sénior junto à cadeira de barbearia.
- `public/images/haircut-side.png`: Pormenor de corte e perfil lateral.
- `public/images/haircut-back.png`: Textura e graduação posterior de corte.

---

## 🛠️ Stack Tecnológica

- **Framework:** Next.js (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS com tokens de design customizados
- **Ícones:** Lucide React
- **Animações:** CSS Transitions & Framer Motion
- **SEO & Structured Data:** JSON-LD Schema.org nativo

---

## 🚀 Como Executar Localmente

### 1. Instalar dependências (caso seja clonado de novo):
```bash
npm install
```

### 2. Iniciar o servidor de desenvolvimento:
```bash
npm run dev
```
Aceda a [http://localhost:3000](http://localhost:3000) no seu navegador.

### 3. Compilar para Produção:
```bash
npm run build
npm run start
```

---

## 📋 Lista de Informações Comerciais para Validação com o Cliente

| Informação | Estado Atual no Website | Ação Recomendada |
| :--- | :--- | :--- |
| **Horários de Funcionamento** | Configurado Segunda a Sexta 10h–20h, Sábado 10h–16h, Domingo Encerrado. | Confirmar se há horário de almoço ou variações sazonais. |
| **Menu e Preçário** | Apresenta "Consulte na marcação" com descrição dos serviços. | Inserir a tabela oficial de preços caso o proprietário pretenda transparência direta de valores. |
| **Fresha / Sistema de Booking** | Fluxo interativo próprio com confirmação direta via WhatsApp. | Se existir uma URL pública direta do perfil da barbearia no Fresha, conectar como link adicional no modal. |
| **Redes Sociais** | Links genéricos não foram inventados (conforme diretrizes de qualidade). | Adicionar o Instagram oficial (@styleplace...) assim que fornecido. |
