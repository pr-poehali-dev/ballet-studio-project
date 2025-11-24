import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">Балет Студия</div>
          <div className="hidden md:flex gap-8">
            <a href="#home" className="text-sm font-medium hover:text-primary transition-colors">Главная</a>
            <a href="#directions" className="text-sm font-medium hover:text-primary transition-colors">Направления</a>
            <a href="#teachers" className="text-sm font-medium hover:text-primary transition-colors">Преподаватели</a>
            <a href="#schedule" className="text-sm font-medium hover:text-primary transition-colors">Расписание</a>
            <a href="#prices" className="text-sm font-medium hover:text-primary transition-colors">Цены</a>
            <a href="#gallery" className="text-sm font-medium hover:text-primary transition-colors">Галерея</a>
            <a href="#reviews" className="text-sm font-medium hover:text-primary transition-colors">Отзывы</a>
            <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </div>
        </nav>
      </header>

      <section id="home" className="pt-24 pb-20 px-4 bg-gradient-to-b from-accent/30 to-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Балет для взрослых и детей
              </h1>
              <p className="text-xl text-muted-foreground">
                Профессиональные занятия классической и современной хореографией с артистами балета
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="text-base" asChild>
                  <a href="#contacts">Записаться на занятие</a>
                </Button>
                <Button size="lg" variant="outline" className="text-base" asChild>
                  <a href="#directions">Наши направления</a>
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img
                src="https://cdn.poehali.dev/projects/b4b7c541-46a0-4b48-af63-c6542589a4bc/files/2e6c882a-0230-4c1f-b322-da2284314504.jpg"
                alt="Балетная студия"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="directions" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in">Направления</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: 'Music', title: 'Классическая хореография', desc: 'Основы классического балета, техника и грация движений' },
              { icon: 'Sparkles', title: 'Современная хореография', desc: 'Современные танцевальные направления и свободный стиль' },
              { icon: 'Activity', title: 'Растяжка', desc: 'Развитие гибкости и пластичности тела' },
              { icon: 'Users', title: 'Групповые танцы', desc: 'Постановка танцев для выступлений в группе' },
              { icon: 'User', title: 'Индивидуальные занятия', desc: 'Персональный подход и программа обучения' },
              { icon: 'Heart', title: 'Занятия для детей', desc: 'Развивающие занятия балетом для детей от 4 лет' }
            ].map((item, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-all duration-300 animate-fade-in-up border-2" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={item.icon as any} className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="teachers" className="py-20 px-4 bg-accent/20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Преподаватели</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Анна Петрова', role: 'Заслуженная артистка балета', experience: '15 лет опыта' },
              { name: 'Дмитрий Волков', role: 'Солист балета', experience: '12 лет опыта' },
              { name: 'Елена Смирнова', role: 'Хореограф', experience: '10 лет опыта' }
            ].map((teacher, idx) => (
              <Card key={idx} className="text-center animate-scale-in" style={{ animationDelay: `${idx * 0.15}s` }}>
                <CardContent className="p-6">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <Icon name="User" size={48} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{teacher.name}</h3>
                  <p className="text-primary font-medium mb-1">{teacher.role}</p>
                  <p className="text-sm text-muted-foreground">{teacher.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="schedule" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Расписание</h2>
          <div className="space-y-4">
            {[
              { day: 'Понедельник', time: '18:00 - 19:30', class: 'Классическая хореография (взрослые)' },
              { day: 'Вторник', time: '16:00 - 17:00', class: 'Балет для детей' },
              { day: 'Среда', time: '19:00 - 20:30', class: 'Современная хореография' },
              { day: 'Четверг', time: '18:00 - 19:00', class: 'Растяжка' },
              { day: 'Пятница', time: '17:00 - 18:30', class: 'Групповые постановки' },
              { day: 'Суббота', time: '10:00 - 12:00', class: 'Индивидуальные занятия' }
            ].map((item, idx) => (
              <Card key={idx} className="animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CardContent className="p-6 flex items-center gap-6">
                  <div className="w-32 font-semibold text-primary">{item.day}</div>
                  <div className="flex-1">
                    <div className="font-medium">{item.class}</div>
                    <div className="text-sm text-muted-foreground">{item.time}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 px-4 bg-accent/20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Цены</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: 'Разовое', price: '1 500', features: ['1 занятие', 'Любое направление', 'Абонемент не требуется'] },
              { name: 'Абонемент 8', price: '9 600', features: ['8 занятий', 'Срок действия 30 дней', 'Экономия 20%'], popular: true },
              { name: 'Абонемент 12', price: '13 200', features: ['12 занятий', 'Срок действия 45 дней', 'Экономия 30%'] }
            ].map((plan, idx) => (
              <Card key={idx} className={`text-center animate-scale-in ${plan.popular ? 'border-primary border-2 shadow-lg' : ''}`} style={{ animationDelay: `${idx * 0.15}s` }}>
                <CardContent className="p-8">
                  {plan.popular && (
                    <div className="text-xs font-semibold text-primary mb-2">ПОПУЛЯРНЫЙ</div>
                  )}
                  <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground"> ₽</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center justify-center gap-2 text-sm">
                        <Icon name="Check" size={16} className="text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={plan.popular ? 'default' : 'outline'}>
                    Выбрать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Галерея</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              'https://cdn.poehali.dev/projects/b4b7c541-46a0-4b48-af63-c6542589a4bc/files/2e6c882a-0230-4c1f-b322-da2284314504.jpg',
              'https://cdn.poehali.dev/projects/b4b7c541-46a0-4b48-af63-c6542589a4bc/files/a8af84dd-24fd-491c-97ca-1bdb4d21dc9e.jpg',
              'https://cdn.poehali.dev/projects/b4b7c541-46a0-4b48-af63-c6542589a4bc/files/4407860a-6a12-4d25-b603-f7dd6dbb4274.jpg'
            ].map((src, idx) => (
              <div key={idx} className="animate-scale-in overflow-hidden rounded-xl" style={{ animationDelay: `${idx * 0.1}s` }}>
                <img 
                  src={src} 
                  alt={`Галерея ${idx + 1}`} 
                  className="w-full h-80 object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-accent/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Отзывы</h2>
          <div className="space-y-6">
            {[
              { name: 'Мария', text: 'Замечательная студия! Преподаватели - настоящие профессионалы. За полгода занятий я достигла результатов, о которых даже не мечтала.', rating: 5 },
              { name: 'Ольга', text: 'Привела дочку на занятия - она в восторге! Индивидуальный подход к каждому ребенку, прекрасная атмосфера.', rating: 5 },
              { name: 'Анастасия', text: 'Всегда мечтала заниматься балетом. Здесь помогли осуществить мечту даже во взрослом возрасте. Спасибо!', rating: 5 }
            ].map((review, idx) => (
              <Card key={idx} className="animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-3">{review.text}</p>
                  <div className="font-semibold">{review.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Контакты</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Адрес</h3>
                  <p className="text-muted-foreground">г. Москва, ул. Балетная, д. 10</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Телефон</h3>
                  <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-muted-foreground">info@ballet-studio.ru</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Режим работы</h3>
                  <p className="text-muted-foreground">Пн-Сб: 9:00 - 21:00<br />Вс: выходной</p>
                </div>
              </div>
            </div>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Записаться на занятие</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Телефон"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Сообщение (направление, удобное время)"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border bg-accent/10">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">© 2024 Балет Студия. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
