import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Star, Crown, Sparkles } from "lucide-react";

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
      badge: "Apenas 50 unidades"
    },
    {
      id: 2,
      name: "Botte Sophistiquée",
      subtitle: "Cano Curto Premium",
      description: "Elegância redefinida em cada passo. Estas botas são o segredo das mulheres mais influentes da Europa. Couro italiano, design francês, exclusividade garantida.",
      price: "R$ 1.199",
      originalPrice: "R$ 1.699",
      image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      badge: "Edição Limitada"
    },
    {
      id: 3,
      name: "Haute Couture Boots",
      subtitle: "Cano Alto Luxo",
      description: "Para mulheres que comandam admiração onde quer que estejam. Inspiradas nas passarelas de Milão, estas botas são statement pieces que elevam qualquer look ao extraordinário.",
      price: "R$ 1.599",
      originalPrice: "R$ 2.199",
      image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      badge: "Últimas 25 peças"
    },
    {
      id: 4,
      name: "Entrepreneurial Chic",
      subtitle: "Tênis Premium Feminino",
      description: "O tênis que representa a mulher moderna: empreendedora, determinada e dona de si. Conforto premium meets design europeu. Para mulheres que conquistam o mundo sem abrir mão do estilo.",
      price: "R$ 799",
      originalPrice: "R$ 1.099",
      image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      badge: "Pré-venda exclusiva"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-rose-100 to-amber-50"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <Crown className="w-12 h-12 text-rose-600 mr-4" />
            <h1 className="text-6xl md:text-8xl font-bold text-slate-800 tracking-tight">
              Lurdinha Chic
            </h1>
            <Crown className="w-12 h-12 text-rose-600 ml-4" />
          </div>
          <p className="text-xl md:text-2xl text-slate-600 mb-8 font-light">
            Chaussures Exclusives • Coleção Inverno 2024
          </p>
          <div className="flex items-center justify-center space-x-2 mb-8">
            <Sparkles className="w-6 h-6 text-amber-500" />
            <span className="text-lg font-medium text-rose-600">Edição Limitada • Apenas para Mulheres Exigentes</span>
            <Sparkles className="w-6 h-6 text-amber-500" />
          </div>
          <Button 
            size="lg" 
            className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Descobrir Coleção Exclusiva
          </Button>
        </div>
      </section>

      {/* Shoes Sections */}
      {shoes.map((shoe, index) => (
        <section key={shoe.id} className="py-20 relative overflow-hidden">
          <div 
            className={`absolute inset-0 ${index % 2 === 0 ? 'bg-gradient-to-r from-rose-50 to-transparent' : 'bg-gradient-to-l from-amber-50 to-transparent'}`}
            style={{
              transform: `translateY(${scrollY * 0.1}px)`
            }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} animate-fade-in`}>
                <div className="relative">
                  <div className="absolute -top-4 -left-4 bg-rose-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    {shoe.badge}
                  </div>
                  <img 
                    src={shoe.image} 
                    alt={shoe.name}
                    className="w-full h-96 object-cover rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105"
                    style={{
                      transform: `translateY(${scrollY * 0.05}px)`
                    }}
                  />
                </div>
              </div>
              
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} space-y-6`}>
                <div className="flex items-center space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-sm text-slate-600">(Avaliação exclusiva)</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-slate-800">
                  {shoe.name}
                </h2>
                <p className="text-xl text-rose-600 font-semibold">
                  {shoe.subtitle}
                </p>
                
                <p className="text-lg text-slate-600 leading-relaxed">
                  {shoe.description}
                </p>
                
                <div className="flex items-center space-x-4">
                  <span className="text-3xl font-bold text-rose-600">{shoe.price}</span>
                  <span className="text-xl text-slate-400 line-through">{shoe.originalPrice}</span>
                  <span className="bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-sm font-bold">
                    -38% OFF
                  </span>
                </div>
                
                <div className="flex space-x-4">
                  <Button 
                    size="lg" 
                    className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
                  >
                    Reservar Agora
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-rose-600 text-rose-600 hover:bg-rose-50 px-8 py-3 rounded-full font-semibold"
                  >
                    Ver Detalhes
                  </Button>
                </div>
                
                <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
                  <p className="text-sm text-amber-800 font-medium">
                    ⚡ Oferta por tempo limitado! Apenas 48h para garantir seu par com desconto exclusivo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Exclusive Section */}
      <section className="py-20 bg-gradient-to-r from-rose-600 to-rose-700 text-white relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-black/10"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`
          }}
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Exclusividade Garantida
            </h2>
            <p className="text-xl md:text-2xl mb-8 font-light">
              Apenas 200 pares de cada modelo serão produzidos. 
              Seja uma das poucas mulheres no Brasil a possuir estas peças únicas.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <Crown className="w-12 h-12 text-amber-300 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Couro Premium</h3>
                  <p className="text-white/90">Importado diretamente da Itália</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <Sparkles className="w-12 h-12 text-amber-300 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Design Exclusivo</h3>
                  <p className="text-white/90">Criado por designers parisienses</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <Star className="w-12 h-12 text-amber-300 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Garantia Premium</h3>
                  <p className="text-white/90">12 meses de garantia total</p>
                </CardContent>
              </Card>
            </div>
            <Button 
              size="lg" 
              className="bg-white text-rose-600 hover:bg-gray-100 px-12 py-4 text-lg font-bold rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              Garantir Meu Par Exclusivo
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-50">
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
                    <MapPin className="w-8 h-8 text-rose-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">Showroom</h3>
                  <p className="text-slate-600 mb-4">Visite nossa boutique</p>
                  <p className="text-rose-600 font-semibold">Agendamento exclusivo</p>
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
