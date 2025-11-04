import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Cpu" size={32} className="text-primary" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                CryptoMiner Pro
              </span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#about" className="text-foreground hover:text-primary transition">О нас</a>
              <a href="#antminer" className="text-foreground hover:text-primary transition">ANTMINER</a>
              <a href="#whatsminer" className="text-foreground hover:text-primary transition">WHATSMINER</a>
              <a href="#payment" className="text-foreground hover:text-primary transition">Оплата и доставка</a>
              <a href="#contacts" className="text-foreground hover:text-primary transition">Контакты</a>
            </div>
            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              <Icon name="ShoppingCart" size={20} className="mr-2" />
              Заказать
            </Button>
          </div>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="relative rounded-xl overflow-hidden border border-primary/30">
              <img 
                src="https://cdn.poehali.dev/projects/edc8d123-107a-4322-b4c6-9be434859e1f/files/436476ff-34d6-421d-ba8a-946c462d3abc.jpg" 
                alt="ANTMINER оборудование" 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden border border-primary/30">
              <img 
                src="https://cdn.poehali.dev/projects/edc8d123-107a-4322-b4c6-9be434859e1f/files/c3288cee-c543-4f1b-b2e9-879697ee8f97.jpg" 
                alt="WHATSMINER оборудование" 
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Майнинговое оборудование ANTMINER & WHATSMINER
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Прямые поставки от производителей. Огромный ассортимент. Быстрый старт вашего майнинг-бизнеса.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              <Icon name="Zap" size={20} className="mr-2" />
              Начать зарабатывать
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <Icon name="PlayCircle" size={20} className="mr-2" />
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Почему выбирают нас
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-card border-border hover:border-primary transition">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                  <Icon name="Truck" size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Прямые поставки</h3>
                <p className="text-muted-foreground">Работаем напрямую с производителями, без посредников</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary transition">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                  <Icon name="Package" size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Огромный ассортимент</h3>
                <p className="text-muted-foreground">Широкий выбор оборудования для любых задач</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary transition">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                  <Icon name="TrendingUp" size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Успех и доходность</h3>
                <p className="text-muted-foreground">Проверенное оборудование с высокой окупаемостью</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary transition">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                  <Icon name="Rocket" size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Быстрый старт</h3>
                <p className="text-muted-foreground">Начните майнить уже через несколько дней</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              О нас
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Мы являемся официальным поставщиком майнингового оборудования ведущих мировых производителей - ANTMINER и WHATSMINER. 
              Наша компания специализируется на прямых поставках высокопроизводительного оборудования для майнинга криптовалют.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              За годы работы мы помогли сотням клиентов начать успешный майнинг-бизнес. Мы предлагаем только проверенное 
              оборудование с гарантией производителя и полной технической поддержкой.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-10">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Довольных клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">3 года</div>
                <div className="text-muted-foreground">На рынке</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Поддержка клиентов</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="antminer" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <div className="relative max-w-2xl mx-auto mb-8 rounded-xl overflow-hidden border border-primary/30">
              <img 
                src="https://cdn.poehali.dev/projects/edc8d123-107a-4322-b4c6-9be434859e1f/files/436476ff-34d6-421d-ba8a-946c462d3abc.jpg" 
                alt="ANTMINER оборудование" 
                className="w-full h-80 object-cover"
              />
            </div>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              ANTMINER
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Профессиональное майнинговое оборудование от Bitmain с высокой производительностью и надежностью
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-card border-border hover:border-primary transition">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <Icon name="HardDrive" size={48} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-center">ANTMINER S19 Pro</h3>
                <div className="space-y-2 text-muted-foreground mb-4">
                  <div className="flex justify-between">
                    <span>Хешрейт:</span>
                    <span className="text-foreground font-semibold">110 TH/s</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Потребление:</span>
                    <span className="text-foreground font-semibold">3250 W</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Алгоритм:</span>
                    <span className="text-foreground font-semibold">SHA-256</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  Узнать цену
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary transition">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <Icon name="HardDrive" size={48} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-center">ANTMINER S21</h3>
                <div className="space-y-2 text-muted-foreground mb-4">
                  <div className="flex justify-between">
                    <span>Хешрейт:</span>
                    <span className="text-foreground font-semibold">200 TH/s</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Потребление:</span>
                    <span className="text-foreground font-semibold">3500 W</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Алгоритм:</span>
                    <span className="text-foreground font-semibold">SHA-256</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  Узнать цену
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary transition">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <Icon name="HardDrive" size={48} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-center">ANTMINER L7</h3>
                <div className="space-y-2 text-muted-foreground mb-4">
                  <div className="flex justify-between">
                    <span>Хешрейт:</span>
                    <span className="text-foreground font-semibold">9500 MH/s</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Потребление:</span>
                    <span className="text-foreground font-semibold">3425 W</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Алгоритм:</span>
                    <span className="text-foreground font-semibold">Scrypt</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  Узнать цену
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="whatsminer" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <div className="relative max-w-2xl mx-auto mb-8 rounded-xl overflow-hidden border border-primary/30">
              <img 
                src="https://cdn.poehali.dev/projects/edc8d123-107a-4322-b4c6-9be434859e1f/files/c3288cee-c543-4f1b-b2e9-879697ee8f97.jpg" 
                alt="WHATSMINER оборудование" 
                className="w-full h-80 object-cover"
              />
            </div>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              WHATSMINER
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Энергоэффективные майнеры от MicroBT с оптимальным соотношением мощности и энергопотребления
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-card border-border hover:border-primary transition">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <Icon name="Server" size={48} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-center">WHATSMINER M30S++</h3>
                <div className="space-y-2 text-muted-foreground mb-4">
                  <div className="flex justify-between">
                    <span>Хешрейт:</span>
                    <span className="text-foreground font-semibold">112 TH/s</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Потребление:</span>
                    <span className="text-foreground font-semibold">3472 W</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Алгоритм:</span>
                    <span className="text-foreground font-semibold">SHA-256</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  Узнать цену
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary transition">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <Icon name="Server" size={48} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-center">WHATSMINER M50</h3>
                <div className="space-y-2 text-muted-foreground mb-4">
                  <div className="flex justify-between">
                    <span>Хешрейт:</span>
                    <span className="text-foreground font-semibold">126 TH/s</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Потребление:</span>
                    <span className="text-foreground font-semibold">3306 W</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Алгоритм:</span>
                    <span className="text-foreground font-semibold">SHA-256</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  Узнать цену
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary transition">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <Icon name="Server" size={48} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-center">WHATSMINER M60</h3>
                <div className="space-y-2 text-muted-foreground mb-4">
                  <div className="flex justify-between">
                    <span>Хешрейт:</span>
                    <span className="text-foreground font-semibold">172 TH/s</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Потребление:</span>
                    <span className="text-foreground font-semibold">3344 W</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Алгоритм:</span>
                    <span className="text-foreground font-semibold">SHA-256</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  Узнать цену
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="payment" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Оплата и доставка
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                    <Icon name="CreditCard" size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Способы оплаты</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    Банковский перевод
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    Оплата наличными при получении
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    Криптовалюта (BTC, USDT)
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    Рассрочка и лизинг
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                    <Icon name="Truck" size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Доставка</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    Доставка по всей России
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    Курьерская доставка в крупных городах
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    Самовывоз из нашего склада
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    Отправка транспортными компаниями
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Контакты
          </h2>
          <div className="max-w-3xl mx-auto">
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <p className="text-lg text-muted-foreground mb-6">
                    Свяжитесь с нами удобным для вас способом. Наши специалисты помогут подобрать оборудование 
                    и ответят на все вопросы о майнинге.
                  </p>
                </div>
                
                <div className="grid gap-6">
                  <a 
                    href="https://t.me/yourtelegram" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary transition bg-muted/50 hover:bg-muted"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center flex-shrink-0">
                      <Icon name="MessageCircle" size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold mb-1">Telegram</div>
                      <div className="text-sm text-muted-foreground">Быстрая связь в мессенджере</div>
                    </div>
                    <Icon name="ExternalLink" size={20} className="text-muted-foreground" />
                  </a>

                  <a 
                    href="https://avito.ru/yourprofile" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary transition bg-muted/50 hover:bg-muted"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center flex-shrink-0">
                      <Icon name="ShoppingBag" size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold mb-1">Авито</div>
                      <div className="text-sm text-muted-foreground">Наши объявления на Авито</div>
                    </div>
                    <Icon name="ExternalLink" size={20} className="text-muted-foreground" />
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-lg border border-border bg-muted/50">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold mb-1">Телефон</div>
                      <div className="text-sm text-muted-foreground">+7 (999) 123-45-67</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-lg border border-border bg-muted/50">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold mb-1">Email</div>
                      <div className="text-sm text-muted-foreground">info@cryptominerpro.ru</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                    <Icon name="Send" size={20} className="mr-2" />
                    Оставить заявку
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-card/50 border-t border-border py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Cpu" size={28} className="text-primary" />
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  CryptoMiner Pro
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Официальный поставщик майнингового оборудования ANTMINER и WHATSMINER
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Продукция</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#antminer" className="hover:text-primary transition">ANTMINER</a></li>
                <li><a href="#whatsminer" className="hover:text-primary transition">WHATSMINER</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#about" className="hover:text-primary transition">О нас</a></li>
                <li><a href="#payment" className="hover:text-primary transition">Оплата и доставка</a></li>
                <li><a href="#contacts" className="hover:text-primary transition">Контакты</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Связаться</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>+7 (999) 123-45-67</li>
                <li>info@cryptominerpro.ru</li>
                <li className="flex gap-4 mt-4">
                  <a href="https://t.me/yourtelegram" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
                    <Icon name="MessageCircle" size={20} />
                  </a>
                  <a href="https://avito.ru/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
                    <Icon name="ShoppingBag" size={20} />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 CryptoMiner Pro. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;