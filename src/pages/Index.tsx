import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Star, Crown, Sparkles, Clock, Package, Truck, ChevronRight } from "lucide-react";
import { Instagram } from "lucide-react";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const shoes = [
    {
      id: 1,
      name: "Scarpin Élégance",
      subtitle: "Coleção Inverno Exclusiva",
      description: "O scarpin que define sofisticação. Inspirado nas ruas de Paris, cada par é uma obra de arte crafted para mulheres que não passam despercebidas. Salto perfeito, conforto inigualável.",
      price: "R$ 899",
      originalPrice: "R$ 1.299",
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      badge: "Apenas 50 unidades",
      colors: ["#8B4513", "#000000", "#8B0000"]
    },
    {
      id: 2,
      name: "Botte Sophistiquée",
      subtitle: "Cano Curto Premium",
      description: "Elegância redefinida em cada passo. Estas botas são o segredo das mulheres mais influentes da Europa. Couro italiano, design francês, exclusividade garantida.",
      price: "R$ 1.199",
      originalPrice: "R$ 1.699",
      image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      badge: "Edição Limitada",
      colors: ["#8B4513", "#2F4F4F", "#8B0000"]
    },
    {
      id: 3,
      name: "Haute Couture Boots",
      subtitle: "Cano Alto Luxo",
      description: "Para mulheres que comandam admiração onde quer que estejam. Inspiradas nas passarelas de Milão, estas botas são statement pieces que elevam qualquer look ao extraordinário.",
      price: "R$ 1.599",
      originalPrice: "R$ 2.199",
      image: "/lovable-uploads/b9b8a851-5fd6-4d50-90b4-64d60ede47c1.png",
      badge: "Últimas 25 peças",
      colors: ["#000000", "#8B4513", "#696969"]
    },
    {
      id: 4,
      name: "Entrepreneurial Chic",
      subtitle: "Tênis Premium Feminino",
      description: "O tênis que representa a mulher moderna: empreendedora, determinada e dona de si. Conforto premium meets design europeu. Para mulheres que conquistam o mundo sem abrir mão do estilo.",
      price: "R$ 799",
      originalPrice: "R$ 1.099",
      image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      badge: "Pré-venda exclusiva",
      colors: ["#FFFFFF", "#FFB6C1", "#C0C0C0"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-rose-600 text-white py-2 text-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-8">
            <span className="font-medium">🚚 FRETE GRÁTIS para compras acima de R$ 350</span>
            <span className="font-medium">💳 10% OFF no PIX</span>
          </div>
        </div>
      </div>

      {/* Hero Section with GIF Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden mt-10">
        {/* GIF Background */}
        <div className="absolute inset-0">
          <img 
            src="https://i.postimg.cc/3NkN19Cp/V-deo-Lurdinha-Chic-Concepto.gif"
            alt="Lurdinha Chic Background"
            className="w-full h-full object-cover"
            style={{
              transform: `translateY(${scrollY * 0.5}px)`
            }}
          />
        </div>
        
        {/* Animated Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40" />
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute top-20 left-10 w-32 h-32 bg-rose-500/10 rounded-full blur-3xl animate-pulse"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          />
          <div 
            className="absolute bottom-20 right-10 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl animate-pulse"
            style={{ transform: `translateY(${scrollY * -0.2}px)` }}
          />
          <div 
            className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/5 rounded-full blur-2xl animate-bounce"
            style={{ transform: `translateY(${scrollY * 0.4}px)`, animationDelay: '1s' }}
          />
        </div>

        {/* Content */}
        <div className="relative z-20 text-center max-w-6xl mx-auto px-4">
          <div className="mb-8 animate-fade-in">
            <div className="flex items-center justify-center mb-8">
              <div className="relative">
                <Crown className="w-16 h-16 text-rose-400 absolute -top-4 -left-4 animate-pulse" />
                <h1 className="text-7xl md:text-9xl font-bold text-white tracking-tight drop-shadow-2xl">
                  Lurdinha
                </h1>
                <Crown className="w-16 h-16 text-amber-400 absolute -bottom-4 -right-4 animate-pulse" />
              </div>
            </div>
            <div className="text-6xl md:text-8xl font-light text-rose-200 mb-6 tracking-wider">
              CHIC
            </div>
          </div>
          
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <p className="text-2xl md:text-3xl text-white/90 mb-8 font-light max-w-4xl mx-auto leading-relaxed">
              Chaussures Exclusives • Coleção Inverno 2024
            </p>
            
            <div className="flex items-center justify-center space-x-3 mb-10">
              <Sparkles className="w-8 h-8 text-amber-400 animate-pulse" />
              <span className="text-xl font-medium text-rose-300 bg-black/30 px-6 py-2 rounded-full backdrop-blur-sm">
                Edição Limitada • Apenas para Mulheres Exigentes
              </span>
              <Sparkles className="w-8 h-8 text-amber-400 animate-pulse" />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Button 
                size="lg" 
                className="bg-rose-600 hover:bg-rose-700 text-white px-10 py-6 text-xl font-semibold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 group"
              >
                Descobrir Coleção Exclusiva
                <ChevronRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white hover:bg-white hover:text-black px-10 py-6 text-xl font-semibold rounded-full backdrop-blur-sm bg-white/10 transition-all duration-500 hover:scale-105"
              >
                Ver Lookbook
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Bar Overlay */}
      <nav className="fixed top-10 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Crown className="w-8 h-8 text-rose-600" />
              <span className="text-2xl font-bold text-slate-800">Lurdinha Chic</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#colecao" className="text-slate-700 hover:text-rose-600 font-medium transition-colors">Coleção</a>
              <a href="#sobre" className="text-slate-700 hover:text-rose-600 font-medium transition-colors">Sobre</a>
              <a href="#contato" className="text-slate-700 hover:text-rose-600 font-medium transition-colors">Contato</a>
              <Button className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-2 rounded-full">
                Entrar
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* FOMO Section */}
      <section className="py-24 bg-gradient-to-br from-rose-50 via-white to-amber-50 relative overflow-hidden">
        <div 
          className="absolute top-0 left-0 w-full h-full opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(244, 63, 94, 0.1) 0%, transparent 50%), 
                             radial-gradient(circle at 80% 20%, rgba(251, 191, 36, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 40% 80%, rgba(244, 63, 94, 0.1) 0%, transparent 50%)`,
            transform: `translateY(${scrollY * 0.1}px)`
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block bg-rose-100 text-rose-700 px-6 py-2 rounded-full text-sm font-bold mb-6 animate-pulse">
                🔥 EXCLUSIVO NO BRASIL
              </div>
              <h2 className="text-6xl md:text-7xl font-bold text-slate-800 mb-8 leading-tight">
                A Moda Europeia<br />
                <span className="text-rose-600">Direto Para Seus Pés</span>
              </h2>
              <p className="text-2xl md:text-3xl text-slate-600 font-light max-w-5xl mx-auto leading-relaxed">
                Apenas <span className="text-rose-600 font-bold bg-rose-100 px-3 py-1 rounded-lg">200 pares</span> de cada modelo chegaram ao Brasil. 
                Uma oportunidade única de possuir peças que definem elegância e exclusividade.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
              <div className="group bg-white/90 backdrop-blur-xl rounded-3xl p-10 shadow-xl border border-rose-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="bg-gradient-to-br from-rose-500 to-rose-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-slate-800 mb-4">Tiragem Limitada</h3>
                <p className="text-slate-600 text-xl leading-relaxed">Apenas 200 pares de cada modelo. Quando acabar, não reporemos.</p>
              </div>
              
              <div className="group bg-white/90 backdrop-blur-xl rounded-3xl p-10 shadow-xl border border-rose-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="bg-gradient-to-br from-amber-500 to-amber-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Package className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-slate-800 mb-4">Estoque no Brasil</h3>
                <p className="text-slate-600 text-xl leading-relaxed">Todos os modelos disponíveis em nosso estoque brasileiro.</p>
              </div>
              
              <div className="group bg-white/90 backdrop-blur-xl rounded-3xl p-10 shadow-xl border border-rose-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="bg-gradient-to-br from-green-500 to-green-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Truck className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-slate-800 mb-4">Entrega Express</h3>
                <p className="text-slate-600 text-xl leading-relaxed">Receba em no máximo dois dias úteis para Uberlândia.</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-rose-600 via-rose-700 to-rose-800 text-white p-12 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" />
              <div className="relative z-10 text-center">
                <div className="flex items-center justify-center space-x-6 mb-6">
                  <Crown className="w-12 h-12 text-amber-300 animate-bounce" />
                  <h3 className="text-4xl md:text-5xl font-bold">⚡ ÚLTIMAS 72 HORAS</h3>
                  <Crown className="w-12 h-12 text-amber-300 animate-bounce" style={{ animationDelay: '0.5s' }} />
                </div>
                <p className="text-2xl md:text-3xl mb-8 font-light max-w-4xl mx-auto">
                  Desconto especial de lançamento! Apenas para as primeiras 100 clientes que reservarem seus pares.
                </p>
                <div className="flex justify-center">
                  <Button 
                    size="lg" 
                    className="bg-white text-rose-600 hover:bg-gray-100 px-16 py-6 text-2xl font-bold rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
                  >
                    Garantir Meu Par Agora
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shoes Sections */}
      <section id="colecao" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-bold text-slate-800 mb-6">
              Coleção Exclusiva
            </h2>
            <p className="text-2xl text-slate-600 max-w-4xl mx-auto">
              Cada par conta uma história de elegância e sofisticação
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {shoes.map((shoe, index) => (
              <div key={shoe.id} className="group relative">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <div className="absolute top-6 left-6 z-20">
                    <div className="bg-rose-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      {shoe.badge}
                    </div>
                  </div>
                  
                  <img 
                    src={shoe.image} 
                    alt={shoe.name}
                    className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="flex items-center space-x-2 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    
                    <h3 className="text-3xl font-bold mb-2">{shoe.name}</h3>
                    <p className="text-xl text-rose-300 mb-4">{shoe.subtitle}</p>
                    
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="text-2xl font-bold">{shoe.price}</span>
                      <span className="text-lg text-gray-300 line-through">{shoe.originalPrice}</span>
                      <span className="bg-rose-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        -38% OFF
                      </span>
                    </div>
                    
                    <div className="flex space-x-2 mb-4">
                      {shoe.colors.map((color, colorIndex) => (
                        <div
                          key={colorIndex}
                          className="w-6 h-6 rounded-full border-2 border-white shadow-lg cursor-pointer hover:scale-110 transition-transform"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 space-y-6">
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {shoe.description}
                  </p>
                  
                  <div className="flex space-x-4">
                    <Button 
                      size="lg" 
                      className="flex-1 bg-rose-600 hover:bg-rose-700 text-white py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
                    >
                      Reservar Agora
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="flex-1 border-2 border-rose-600 text-rose-600 hover:bg-rose-50 py-4 rounded-full font-semibold transition-all hover:scale-105"
                    >
                      Ver Detalhes
                    </Button>
                  </div>
                  
                  <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-lg">
                    <p className="text-amber-800 font-medium flex items-center">
                      <Clock className="w-5 h-5 mr-2" />
                      Oferta por tempo limitado! Apenas 72h para garantir seu par com desconto exclusivo.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exclusive Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900 text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div 
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-rose-500/20 rounded-full blur-3xl animate-pulse"
            style={{ transform: `translateY(${scrollY * 0.2}px)` }}
          />
          <div 
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse"
            style={{ transform: `translateY(${scrollY * -0.3}px)`, animationDelay: '1s' }}
          />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-6xl md:text-7xl font-bold mb-8">
              Exclusividade Garantida
            </h2>
            <p className="text-2xl md:text-3xl mb-16 font-light max-w-4xl mx-auto leading-relaxed">
              Apenas 200 pares de cada modelo serão produzidos. 
              Seja uma das poucas mulheres no Brasil a possuir estas peças únicas.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="bg-white/10 backdrop-blur-xl border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <Crown className="w-16 h-16 text-amber-300 mx-auto mb-6 animate-pulse" />
                  <h3 className="text-2xl font-bold mb-4">Couro Premium</h3>
                  <p className="text-white/90 text-lg">Importado diretamente da Itália</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-xl border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <Sparkles className="w-16 h-16 text-amber-300 mx-auto mb-6 animate-pulse" />
                  <h3 className="text-2xl font-bold mb-4">Design Exclusivo</h3>
                  <p className="text-white/90 text-lg">Criado por designers parisienses</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-xl border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <Star className="w-16 h-16 text-amber-300 mx-auto mb-6 animate-pulse" />
                  <h3 className="text-2xl font-bold mb-4">Garantia Premium</h3>
                  <p className="text-white/90 text-lg">12 meses de garantia total</p>
                </CardContent>
              </Card>
            </div>
            
            <Button 
              size="lg" 
              className="bg-white text-slate-900 hover:bg-gray-100 px-16 py-6 text-2xl font-bold rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Garantir Meu Par Exclusivo
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                Contato Exclusivo
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Entre em contato conosco para atendimento personalizado e consultoria de estilo. 
                Nosso time está pronto para ajudá-la a escolher o par perfeito.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Mail className="w-8 h-8 text-rose-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">Email</h3>
                  <p className="text-slate-600 mb-4">Para consultas e pedidos especiais</p>
                  <p className="text-rose-600 font-semibold">lurdinhachic@gmail.com</p>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Phone className="w-8 h-8 text-rose-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">Telefone</h3>
                  <p className="text-slate-600 mb-4">Atendimento personalizado</p>
                  <p className="text-rose-600 font-semibold">+34 999 999 999</p>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Instagram className="w-8 h-8 text-rose-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">Instagram</h3>
                  <p className="text-slate-600 mb-4">Siga nosso estilo exclusivo</p>
                  <p className="text-rose-600 font-semibold">@lurdinhachic</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Crown className="w-8 h-8 text-rose-400 mr-3" />
              <h3 className="text-2xl font-bold">Lurdinha Chic</h3>
              <Crown className="w-8 h-8 text-rose-400 ml-3" />
            </div>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Exclusividade, elegância e sofisticação em cada passo. 
              Para mulheres que sabem reconhecer a verdadeira qualidade.
            </p>
            <div className="border-t border-slate-700 pt-8">
              <p className="text-slate-400">
                © 2024 Lurdinha Chic. Todos os direitos reservados. | Coleção Inverno Exclusiva
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
