import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Здоровое Питание
            </div>
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('home')} className="hover:text-primary transition">Главная</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-primary transition">Обо мне</button>
              <button onClick={() => scrollToSection('services')} className="hover:text-primary transition">Услуги</button>
              <button onClick={() => scrollToSection('benefits')} className="hover:text-primary transition">Преимущества</button>
              <button onClick={() => scrollToSection('pricing')} className="hover:text-primary transition">Тарифы</button>
              <button onClick={() => scrollToSection('reviews')} className="hover:text-primary transition">Отзывы</button>
              <button onClick={() => scrollToSection('faq')} className="hover:text-primary transition">Вопросы</button>
              <button onClick={() => scrollToSection('contacts')} className="hover:text-primary transition">Контакты</button>
            </div>
            <Button onClick={() => scrollToSection('contacts')} className="bg-gradient-to-r from-primary to-secondary">
              Записаться
            </Button>
          </div>
        </nav>
      </header>

      <section id="home" className="pt-32 pb-20 px-4 bg-gradient-to-br from-green-50 via-orange-50 to-purple-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Замучили диеты и срывы? 😑
              </h1>
              <p className="text-xl text-muted-foreground">
                Хотите по-настоящему полюбить здоровый образ жизни?
              </p>
              <p className="text-lg">
                Научимся питаться правильно и вести Здоровый образ жизни, уберем вредное питание и вредные привычки, начнем новую жизнь!
              </p>
              <div className="flex gap-4">
                <Button size="lg" onClick={() => scrollToSection('contacts')} className="bg-gradient-to-r from-primary to-secondary text-lg">
                  Начать сейчас
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('about')}>
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/edc8d123-107a-4322-b4c6-9be434859e1f/files/c7fcf525-67b3-494b-984a-ce2b7749215c.jpg" 
                alt="Здоровое питание" 
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl blur-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/edc8d123-107a-4322-b4c6-9be434859e1f/files/e7156827-e85b-4c33-b718-95a7dbea0081.jpg" 
                alt="Александр Самолучшев" 
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Обо мне
              </h2>
              <p className="text-xl">
                Всем привет, я <span className="font-bold text-primary">Александр Самолучшев</span> — ваш проводник в мир здорового питания!
              </p>
              <p className="text-lg text-muted-foreground">
                Веду здоровый образ жизни, активно занимаюсь спортом, более 10 лет я сам экспериментирую с питанием, и теперь, как интегративный Нутрициолог (обучение в Talentsy), хочу поделиться с вами своими знаниями и опытом.
              </p>
              <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl">
                <Icon name="Award" className="text-primary" size={32} />
                <div>
                  <div className="font-bold">Интегративный нутрициолог</div>
                  <div className="text-sm text-muted-foreground">Обучение в Talentsy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-gradient-to-br from-purple-50 via-green-50 to-orange-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              🍴 Забудьте про строгие диеты и голодовки!
            </h2>
            <p className="text-xl text-muted-foreground">Здесь вы найдете:</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "UtensilsCrossed", title: "Индивидуальный рацион", desc: "Подбор рациона питания индивидуально под ваши цели" },
              { icon: "Lightbulb", title: "Простые советы", desc: "Реальные и простые советы, как сделать здоровое питание вкусным и разнообразным" },
              { icon: "FileText", title: "Подробный разбор", desc: "Подробный разбор питания и образа жизни" },
              { icon: "ChefHat", title: "Проверенные рецепты", desc: "Проверенные рецепты, которые не испортят фигуру" },
              { icon: "Zap", title: "Мотивация", desc: "Мотивацию для активной жизни без насилия над собой" },
              { icon: "MessageCircle", title: "Ответы на вопросы", desc: "Разберем составы продуктов, оценим пользу блюд" }
            ].map((service, idx) => (
              <Card key={idx} className="border-2 hover:shadow-xl transition-all hover:scale-105 bg-white/80 backdrop-blur">
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Icon name={service.icon} className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="text-muted-foreground">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Почему стоит выбрать меня
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: "Target", title: "Индивидуальный подход", desc: "Каждая программа разрабатывается под ваши цели и особенности" },
              { icon: "TrendingUp", title: "Более 10 лет опыта", desc: "Личный опыт экспериментов с питанием и результаты" },
              { icon: "Heart", title: "Без насилия над собой", desc: "Здоровый образ жизни должен приносить удовольствие" },
              { icon: "Users", title: "Поддержка сообщества", desc: "Создадим сообщество единомышленников для взаимной мотивации" }
            ].map((benefit, idx) => (
              <Card key={idx} className="border-2 hover:shadow-lg transition-all">
                <CardContent className="p-8 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0">
                    <Icon name={benefit.icon} className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 bg-gradient-to-br from-green-50 via-purple-50 to-orange-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Тарифы
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { 
                name: "Старт", 
                price: "5 000", 
                features: ["Консультация 60 минут", "Анализ текущего питания", "План питания на неделю", "Рекомендации по образу жизни"],
                gradient: "from-green-500 to-emerald-600"
              },
              { 
                name: "Оптимум", 
                price: "15 000", 
                features: ["3 консультации", "Индивидуальный план на месяц", "Разбор анализов", "Поддержка в чате", "Корректировки рациона"],
                gradient: "from-orange-500 to-amber-600",
                popular: true
              },
              { 
                name: "Премиум", 
                price: "30 000", 
                features: ["Сопровождение 3 месяца", "Безлимитные консультации", "Разбор анализов", "Круглосуточная поддержка", "Рецепты и списки покупок"],
                gradient: "from-purple-500 to-violet-600"
              }
            ].map((plan, idx) => (
              <Card key={idx} className={`border-2 hover:shadow-2xl transition-all ${plan.popular ? 'scale-105 border-primary shadow-xl' : ''}`}>
                {plan.popular && (
                  <div className="bg-gradient-to-r from-primary to-secondary text-white text-center py-2 rounded-t-xl font-bold">
                    Популярный
                  </div>
                )}
                <CardContent className="p-8 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="flex items-baseline gap-1">
                      <span className={`text-4xl font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>{plan.price}</span>
                      <span className="text-muted-foreground">₽</span>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full bg-gradient-to-r ${plan.gradient}`}
                    size="lg"
                    onClick={() => scrollToSection('contacts')}
                  >
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Отзывы клиентов
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Мария К.", text: "За 2 месяца работы с Александром я похудела на 8 кг, но главное — научилась питаться правильно! Теперь это образ жизни, а не временная диета.", rating: 5 },
              { name: "Дмитрий П.", text: "Александр помог мне набрать мышечную массу без вредных добавок. Очень доволен результатом и профессионализмом!", rating: 5 },
              { name: "Елена С.", text: "Наконец-то нашла специалиста, который не заставляет голодать! Вкусные рецепты, поддержка 24/7 и результаты уже через месяц!", rating: 5 }
            ].map((review, idx) => (
              <Card key={idx} className="border-2 hover:shadow-lg transition-all">
                <CardContent className="p-6 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-secondary fill-secondary" size={20} />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{review.text}"</p>
                  <div className="font-bold">{review.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-gradient-to-br from-orange-50 via-green-50 to-purple-50">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Вопросы и ответы
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              { q: "Как быстро я увижу результаты?", a: "Первые изменения вы заметите уже через 1-2 недели. Устойчивый результат формируется за 2-3 месяца, когда здоровое питание становится привычкой." },
              { q: "Нужно ли будет голодать?", a: "Абсолютно нет! Моя философия — питание должно быть сытным и вкусным. Мы научимся выбирать правильные продукты, а не ограничивать себя во всем." },
              { q: "Подойдет ли мне программа, если у меня есть заболевания?", a: "Да, я разрабатываю индивидуальные программы с учетом ваших особенностей здоровья. При необходимости порекомендую проконсультироваться с врачом." },
              { q: "Что если мне не подойдет программа?", a: "Я всегда на связи и корректирую план под ваши потребности. Ваш комфорт и результат — моя главная цель!" },
              { q: "Нужно ли покупать специальные продукты?", a: "Нет, мы будем работать с обычными продуктами, которые есть в любом магазине. Никаких дорогих суперфудов и специальных добавок." }
            ].map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="bg-white rounded-xl border-2 px-6">
                <AccordionTrigger className="text-left font-bold hover:text-primary">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-primary via-secondary to-accent rounded-3xl p-12 text-white text-center space-y-6 shadow-2xl">
            <h2 className="text-4xl font-bold">
              Готовы изменить свою жизнь к лучшему?
            </h2>
            <p className="text-xl opacity-90">
              Вместе мы создадим сообщество единомышленников, которые заботятся о своем здоровье с удовольствием!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <a href="tel:+79999999999" className="flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-xl font-bold hover:scale-105 transition">
                <Icon name="Phone" size={20} />
                +7 (999) 999-99-99
              </a>
              <a href="mailto:info@nutrition.ru" className="flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-xl font-bold hover:scale-105 transition">
                <Icon name="Mail" size={20} />
                info@nutrition.ru
              </a>
              <a href="https://t.me/username" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-xl font-bold hover:scale-105 transition">
                <Icon name="Send" size={20} />
                Telegram
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-primary to-secondary text-white py-12 px-4">
        <div className="container mx-auto text-center space-y-4">
          <div className="text-2xl font-bold">Здоровое Питание</div>
          <p className="opacity-80">Александр Самолучшев — Интегративный нутрициолог</p>
          <div className="flex gap-6 justify-center">
            <button onClick={() => scrollToSection('about')} className="hover:opacity-80 transition">Обо мне</button>
            <button onClick={() => scrollToSection('services')} className="hover:opacity-80 transition">Услуги</button>
            <button onClick={() => scrollToSection('pricing')} className="hover:opacity-80 transition">Тарифы</button>
            <button onClick={() => scrollToSection('contacts')} className="hover:opacity-80 transition">Контакты</button>
          </div>
          <div className="text-sm opacity-60 pt-4">
            © 2025 Все права защищены
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
