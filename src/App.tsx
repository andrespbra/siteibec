/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Truck, 
  Bike, 
  Clock, 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Mail, 
  ChevronRight, 
  Menu, 
  X, 
  Star,
  Package,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      title: "Motoboy Express",
      description: "Entregas ultra-rápidas em toda a região metropolitana com máxima agilidade.",
      icon: <Bike className="w-8 h-8" />,
      tag: "Mais Popular"
    },
    {
      title: "Logística Corporativa",
      description: "Gestão completa de coletas e entregas para sua empresa com relatórios detalhados.",
      icon: <Truck className="w-8 h-8" />,
      tag: "Premium"
    },
    {
      title: "Contratos Mensais",
      description: "Soluções personalizadas e fixas para demandas recorrentes com preços exclusivos.",
      icon: <ShieldCheck className="w-8 h-8" />,
      tag: "Empresarial"
    },
    {
      title: "E-commerce & Last Mile",
      description: "A última milha da sua entrega com a qualidade que seu cliente merece.",
      icon: <Package className="w-8 h-8" />,
      tag: "Especializado"
    }
  ];

  const stats = [
    { label: "Entregas Realizadas", value: "50k+" },
    { label: "Clientes Ativos", value: "1.2k+" },
    { label: "Taxa de Sucesso", value: "99.9%" },
    { label: "Tempo Médio", value: "35min" }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-primary selection:text-white">
      {/* Navbar */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-white/80 backdrop-blur-md border-bottom border-slate-200 py-3 shadow-sm" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Logo Placeholder - User should replace with their logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
                I
              </div>
              <span className="text-2xl font-bold tracking-tighter text-primary">
                IBEC <span className="text-secondary">EXPRESS</span>
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="text-sm font-medium hover:text-primary transition-colors">Início</a>
            <a href="#servicos" className="text-sm font-medium hover:text-primary transition-colors">Serviços</a>
            <a href="#sobre" className="text-sm font-medium hover:text-primary transition-colors">Sobre</a>
            <a href="#contato" className="text-sm font-medium hover:text-primary transition-colors">Contato</a>
            <a href="https://colaboradoribec.lovable.app" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white rounded-full px-6">
                Colaborador
              </Button>
            </a>
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">
              Pedir Coleta
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger render={<Button variant="ghost" size="icon" />}>
                <Menu className="w-6 h-6" />
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col gap-6 mt-10">
                  <a href="#inicio" className="text-lg font-semibold">Início</a>
                  <a href="#servicos" className="text-lg font-semibold">Serviços</a>
                  <a href="#sobre" className="text-lg font-semibold">Sobre</a>
                  <a href="#contato" className="text-lg font-semibold">Contato</a>
                  <a href="https://colaboradoribec.lovable.app" target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button variant="outline" className="w-full border-primary text-primary py-6 text-lg">
                      Colaborador
                    </Button>
                  </a>
                  <Button className="w-full bg-primary text-white py-6 text-lg">
                    Pedir Coleta
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -z-10 rounded-l-[100px] hidden lg:block" />
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Badge variant="outline" className="mb-6 border-primary text-primary px-4 py-1 rounded-full text-sm font-medium">
              Logística Premium & Motoboy
            </Badge>
            <h1 className="text-5xl md:text-7xl font-heading font-bold leading-[1.1] mb-6 tracking-tight">
              A velocidade que seu <span className="text-primary italic">negócio</span> exige.
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-lg leading-relaxed">
              A IBEC EXPRESS redefine o transporte urbano com soluções de elite em motoboy e logística. Segurança, pontualidade e discrição em cada entrega.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 h-14 text-lg rounded-full group">
                Solicitar Agora
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-slate-200 px-8 h-14 text-lg rounded-full">
                Nossos Planos
              </Button>
            </div>
            
            <div className="mt-12 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                    <img 
                      src={`https://picsum.photos/seed/user${i}/100/100`} 
                      alt="User" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <div className="flex items-center gap-1 text-yellow-500">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-slate-500 font-medium">+1.200 clientes satisfeitos</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=1000" 
                alt="Logistics" 
                className="w-full h-auto object-cover aspect-[4/3]"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Card */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 z-20 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Status da Entrega</p>
                  <p className="text-lg font-bold">Concluída com Sucesso</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="space-y-2">
                <p className="text-4xl md:text-5xl font-bold">{stat.value}</p>
                <p className="text-primary-foreground/70 text-sm font-medium uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Serviços Especializados</h2>
            <p className="text-lg text-slate-600">
              Oferecemos uma gama completa de soluções logísticas desenhadas para atender desde pequenas demandas até grandes operações corporativas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="h-full"
              >
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      {service.icon}
                    </div>
                    <Badge variant="secondary" className="w-fit mb-4 bg-secondary/20 text-secondary-foreground border-none">
                      {service.tag}
                    </Badge>
                    <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                    <p className="text-slate-600 mb-8 flex-grow">
                      {service.description}
                    </p>
                    <Button variant="link" className="p-0 h-auto text-primary font-bold group/btn">
                      Saiba mais <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="sobre" className="py-24 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                  <img 
                    src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=500" 
                    alt="Warehouse" 
                    className="rounded-2xl shadow-lg aspect-[3/4] object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="bg-secondary p-6 rounded-2xl text-primary">
                    <Clock className="w-10 h-10 mb-4" />
                    <p className="text-2xl font-bold">24/7</p>
                    <p className="text-sm font-medium">Suporte e Operação</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-primary p-6 rounded-2xl text-white">
                    <ShieldCheck className="w-10 h-10 mb-4" />
                    <p className="text-2xl font-bold">100%</p>
                    <p className="text-sm font-medium">Seguro de Carga</p>
                  </div>
                  <img 
                    src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=500" 
                    alt="Delivery" 
                    className="rounded-2xl shadow-lg aspect-[3/4] object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">Por que escolher a IBEC EXPRESS?</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Rastreamento em Tempo Real</h4>
                    <p className="text-slate-600">Acompanhe sua encomenda desde a coleta até a entrega final com precisão cirúrgica através do nosso app.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-primary">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Profissionais Treinados</h4>
                    <p className="text-slate-600">Nossa equipe passa por rigorosos treinamentos de direção defensiva e atendimento ao cliente premium.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-primary">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Pontualidade Britânica</h4>
                    <p className="text-slate-600">Entendemos que tempo é dinheiro. Cumprimos prazos com rigor absoluto ou devolvemos seu investimento.</p>
                  </div>
                </div>
              </div>
              <Button size="lg" className="mt-12 bg-primary text-white rounded-full px-10 h-14">
                Conheça Nossa História
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-4xl font-heading font-bold mb-12 text-center">Dúvidas Frequentes</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-slate-200">
              <AccordionTrigger className="text-lg font-bold hover:text-primary">Como funciona o faturamento mensal?</AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base">
                Para empresas, oferecemos faturamento quinzenal ou mensal via boleto bancário, com relatórios detalhados de todas as corridas realizadas no período.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-slate-200">
              <AccordionTrigger className="text-lg font-bold hover:text-primary">Vocês fazem entregas fora da capital?</AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base">
                Sim, atendemos todo o estado e também realizamos viagens interestaduais sob consulta prévia de disponibilidade e valores.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-slate-200">
              <AccordionTrigger className="text-lg font-bold hover:text-primary">Qual o limite de peso para motoboy?</AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base">
                Para entregas via motoboy, o limite recomendado é de até 20kg, desde que as dimensões caibam no baú padrão (40x40x40cm). Para volumes maiores, utilizamos utilitários.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contato" className="py-24">
        <div className="container mx-auto px-6">
          <div className="bg-slate-900 rounded-[40px] p-8 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 blur-[100px] rounded-full" />
            
            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
              <div>
                <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-8 leading-tight">
                  Pronto para elevar sua <span className="text-secondary">logística</span>?
                </h2>
                <p className="text-slate-400 text-xl mb-10">
                  Fale com um de nossos consultores agora mesmo e receba um orçamento personalizado para sua demanda.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-white">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Telefone / WhatsApp</p>
                      <p className="text-xl font-bold">(11) 99999-9999</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-white">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">E-mail</p>
                      <p className="text-xl font-bold">contato@ibecexpress.com.br</p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm p-8 rounded-3xl">
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300">Nome Completo</label>
                      <Input className="bg-white/10 border-white/20 text-white h-12" placeholder="Seu nome" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300">Empresa</label>
                      <Input className="bg-white/10 border-white/20 text-white h-12" placeholder="Nome da empresa" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">E-mail Corporativo</label>
                    <Input className="bg-white/10 border-white/20 text-white h-12" placeholder="email@empresa.com.br" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Mensagem</label>
                    <textarea 
                      className="w-full bg-white/10 border border-white/20 rounded-md p-4 text-white h-32 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Como podemos ajudar?"
                    />
                  </div>
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-primary font-bold h-14 text-lg rounded-xl">
                    Enviar Solicitação
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white font-bold">I</div>
                <span className="text-xl font-bold tracking-tighter text-primary">
                  IBEC <span className="text-secondary">EXPRESS</span>
                </span>
              </div>
              <p className="text-slate-500 leading-relaxed">
                Excelência em logística urbana e transporte rápido. Sua carga em boas mãos, sempre.
              </p>
              <div className="flex gap-4">
                {["facebook", "instagram", "linkedin", "twitter"].map((social) => (
                  <a key={social} href="#" className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm">
                    <span className="sr-only">{social}</span>
                    <div className="w-5 h-5 bg-slate-400 rounded-sm" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-6">Links Rápidos</h4>
              <ul className="space-y-4 text-slate-500">
                <li><a href="#" className="hover:text-primary transition-colors">Início</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Serviços</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Sobre Nós</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Carreiras</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6">Serviços</h4>
              <ul className="space-y-4 text-slate-500">
                <li><a href="#" className="hover:text-primary transition-colors">Motoboy Express</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Logística Reversa</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Entregas Agendadas</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Distribuição</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Armazenagem</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6">Newsletter</h4>
              <p className="text-slate-500 mb-6">Receba novidades e dicas de logística diretamente no seu e-mail.</p>
              <div className="flex gap-2">
                <Input className="bg-white border-slate-200" placeholder="Seu e-mail" />
                <Button className="bg-primary text-white">OK</Button>
              </div>
            </div>
          </div>
          
          <div className="pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-400 text-sm">
              © 2024 IBEC EXPRESS. Todos os direitos reservados.
            </p>
            <div className="flex gap-8 text-sm text-slate-400">
              <a href="#" className="hover:text-slate-600">Privacidade</a>
              <a href="#" className="hover:text-slate-600">Termos de Uso</a>
              <a href="#" className="hover:text-slate-600">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
