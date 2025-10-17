import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface Player {
  id: number;
  name: string;
  number: number;
  position: string;
  image: string;
}

interface Match {
  id: number;
  homeTeam: string;
  awayTeam: string;
  time: string;
  date: string;
  location: string;
}

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  date: string;
  readTime: string;
  image: string;
}

const matches: Match[] = [
  {
    id: 1,
    homeTeam: 'Ижсталь',
    awayTeam: 'Спартак',
    time: '18:45',
    date: '20 октября 2024',
    location: 'Ледовый дворец'
  }
];

const players: Player[] = [
  {
    id: 1,
    name: 'MAKSIMKA',
    number: 91,
    position: 'Нападающий',
    image: 'https://cdn.poehali.dev/projects/942b5e06-df2e-4ff0-a1c4-de786e9c261d/files/3bbb79a8-62b2-45b3-9ad4-4ad7a13d1ffe.jpg'
  },
  {
    id: 2,
    name: 'DOMINGUE',
    number: 30,
    position: 'Вратарь',
    image: 'https://cdn.poehali.dev/projects/942b5e06-df2e-4ff0-a1c4-de786e9c261d/files/a02d779b-a15e-4f1b-9533-3751f6add8b4.jpg'
  },
  {
    id: 3,
    name: 'FLAMIE',
    number: 0,
    position: 'Нападающий',
    image: 'https://cdn.poehali.dev/projects/942b5e06-df2e-4ff0-a1c4-de786e9c261d/files/6f2e0d64-695c-45d0-b8d9-ae7414e44009.jpg'
  },
  {
    id: 4,
    name: 'WINK',
    number: 44,
    position: 'Нападающий/Защитник',
    image: 'https://cdn.poehali.dev/projects/942b5e06-df2e-4ff0-a1c4-de786e9c261d/files/4cec861b-b493-48c3-80fc-41a3cbe1b5c2.jpg'
  },
  {
    id: 5,
    name: 'AUGUST',
    number: 9,
    position: 'Нападающий',
    image: 'https://cdn.poehali.dev/projects/942b5e06-df2e-4ff0-a1c4-de786e9c261d/files/29767f92-8ad4-4806-994c-d355665aafb7.jpg'
  },
  {
    id: 6,
    name: 'BENZO',
    number: 38,
    position: 'Нападающий',
    image: 'https://cdn.poehali.dev/projects/942b5e06-df2e-4ff0-a1c4-de786e9c261d/files/51b440f5-4702-44b5-81e4-a5655356ae9c.jpg'
  }
];

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Будущее веб-разработки в 2025',
    excerpt: 'Исследуем новейшие тренды и технологии, которые изменят подход к созданию веб-приложений в ближайшие годы.',
    category: 'Технологии',
    tags: ['Web', 'React', 'AI'],
    date: '15 октября 2024',
    readTime: '5 мин',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80'
  },
  {
    id: 2,
    title: 'Искусство минималистичного дизайна',
    excerpt: 'Как создавать эффектные и функциональные интерфейсы, используя принципы минимализма и современные подходы.',
    category: 'Дизайн',
    tags: ['UI/UX', 'Минимализм', 'Тренды'],
    date: '12 октября 2024',
    readTime: '7 мин',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80'
  },
  {
    id: 3,
    title: 'Оптимизация производительности React',
    excerpt: 'Практические советы и лучшие практики для повышения скорости работы React-приложений.',
    category: 'Разработка',
    tags: ['React', 'Performance', 'Optimization'],
    date: '10 октября 2024',
    readTime: '10 мин',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80'
  },
  {
    id: 4,
    title: 'Современные CSS-техники и анимации',
    excerpt: 'Погружаемся в мир CSS Grid, Flexbox и создаём плавные анимации для современных веб-сайтов.',
    category: 'Технологии',
    tags: ['CSS', 'Анимации', 'Frontend'],
    date: '8 октября 2024',
    readTime: '6 мин',
    image: 'https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?w=800&q=80'
  },
  {
    id: 5,
    title: 'TypeScript: от основ до продвинутых техник',
    excerpt: 'Полное руководство по TypeScript с примерами реальных задач и паттернов проектирования.',
    category: 'Разработка',
    tags: ['TypeScript', 'JavaScript', 'Programming'],
    date: '5 октября 2024',
    readTime: '12 мин',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80'
  },
  {
    id: 6,
    title: 'Психология цвета в веб-дизайне',
    excerpt: 'Как правильно использовать цветовые схемы и градиенты для создания эмоционального отклика пользователей.',
    category: 'Дизайн',
    tags: ['Цвет', 'Психология', 'UI'],
    date: '3 октября 2024',
    readTime: '8 мин',
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&q=80'
  }
];

const categories = ['Состав', 'Матчи', 'Новости'];
const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('Состав');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showAbout, setShowAbout] = useState(false);

  const filteredPosts = blogPosts.filter(post => {
    const tagMatch = selectedTags.length === 0 || selectedTags.some(tag => post.tags.includes(tag));
    return tagMatch;
  });

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#05101f] via-[#0a1929] to-[#000000]">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5Yjg3ZjUiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2aDhWOGgtOHYtOGgtOHY4SDh2OGg4djhoOFYxNmgtOHYtOGg4di04aDh2OGg4djh6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      
      <div className="relative">
        <header className="border-b border-white/10 backdrop-blur-lg bg-white/5">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center animate-gradient-shift bg-[length:200%_200%]">
                  <Icon name="Sparkles" className="text-white" size={24} />
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                    ТХЛ ИЖСТАЛЬ
                  </h1>
                  <p className="text-sm text-muted-foreground">Хоккейный клуб</p>
                </div>
              </div>
              
              <Button
                variant="ghost"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setShowAbout(!showAbout)}
              >
                <Icon name="Info" className="mr-2" size={18} />
                О команде
              </Button>
            </div>
          </div>
        </header>

        {showAbout && (
          <div className="container mx-auto px-4 py-8 animate-fade-in">
            <Card className="border-white/10 bg-card/50 backdrop-blur-xl">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-3xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    О нашем блоге
                  </CardTitle>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setShowAbout(false)}
                  >
                    <Icon name="X" size={20} />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Добро пожаловать в TechBlog — современную платформу для публикации статей о технологиях, 
                  дизайне и веб-разработке. Мы создаём контент, который вдохновляет и помогает расти профессионалам 
                  в IT-индустрии.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                  <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                    <Icon name="BookOpen" className="text-primary mb-2" size={28} />
                    <h3 className="font-semibold mb-1">100+ статей</h3>
                    <p className="text-sm text-muted-foreground">Качественный контент каждую неделю</p>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary/10 border border-secondary/20">
                    <Icon name="Users" className="text-secondary mb-2" size={28} />
                    <h3 className="font-semibold mb-1">50K+ читателей</h3>
                    <p className="text-sm text-muted-foreground">Активное IT-сообщество</p>
                  </div>
                  <div className="p-4 rounded-lg bg-accent/10 border border-accent/20">
                    <Icon name="Sparkles" className="text-accent mb-2" size={28} />
                    <h3 className="font-semibold mb-1">Актуальные темы</h3>
                    <p className="text-sm text-muted-foreground">Последние тренды и новости</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              ТХЛ ИЖСТАЛЬ
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Команда, которая борется за победу в каждом матче
            </p>
          </div>

          <div className="mb-8 space-y-6">
            <div className="flex flex-wrap gap-3 justify-center animate-scale-in">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  className={`${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white border-0'
                      : 'border-white/20 hover:border-primary/50 hover:bg-primary/10'
                  } transition-all duration-300`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>


          </div>

          {selectedTags.length > 0 && (
            <div className="mb-6 flex items-center justify-center gap-2 animate-fade-in">
              <span className="text-sm text-muted-foreground">Активные фильтры:</span>
              <Button
                variant="ghost"
                size="sm"
                className="text-primary hover:text-primary/80"
                onClick={() => setSelectedTags([])}
              >
                <Icon name="X" size={16} className="mr-1" />
                Сбросить все
              </Button>
            </div>
          )}

          {selectedCategory === 'Матчи' ? (
            <div className="flex justify-center">
              {matches.map((match, index) => (
                <Card
                  key={match.id}
                  className="overflow-hidden border-white/10 bg-card/50 backdrop-blur-xl hover:border-primary/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20 animate-fade-in max-w-2xl w-full"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="py-12">
                    <div className="flex items-center justify-center gap-8">
                      <div className="text-center">
                        <div className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                          {match.homeTeam}
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-6xl font-bold text-accent">
                          {match.time}
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-5xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                          {match.awayTeam}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : selectedCategory === 'Состав' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {players.map((player, index) => (
                <Card
                  key={player.id}
                  className="group overflow-hidden border-white/10 bg-card/50 backdrop-blur-xl hover:border-primary/50 transition-all duration-500 hover:scale-[1.05] hover:shadow-2xl hover:shadow-primary/20 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={player.image}
                      alt={player.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-3 left-3 z-20">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-2xl border-4 border-white/20">
                        {player.number}
                      </div>
                    </div>
                  </div>
                  
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">
                      #{player.number} {player.name}
                    </CardTitle>
                    <CardDescription className="text-lg">
                      {player.position}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <Button
                      className="w-full bg-gradient-to-r from-primary via-secondary to-accent hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 text-white border-0"
                    >
                      Подробнее
                      <Icon name="ArrowRight" className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : selectedCategory === 'Новости' ? (
            <div className="flex justify-center items-center py-20 animate-fade-in">
              <div className="text-center">
                <Icon name="Newspaper" className="mx-auto text-muted-foreground mb-4" size={64} />
                <h3 className="text-4xl font-bold text-foreground mb-2">Ничего</h3>
                <p className="text-xl text-muted-foreground">Новостей пока нет</p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, index) => (
              <Card
                key={post.id}
                className="group overflow-hidden border-white/10 bg-card/50 backdrop-blur-xl hover:border-primary/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <Badge className="absolute top-3 right-3 z-20 bg-gradient-to-r from-primary to-secondary border-0 text-white">
                    {post.category}
                  </Badge>
                </div>
                
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Icon name="Calendar" size={14} />
                    <span>{post.date}</span>
                    <span className="mx-1">•</span>
                    <Icon name="Clock" size={14} />
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map(tag => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="border-white/20 hover:border-accent/50 hover:bg-accent/10 transition-colors cursor-pointer"
                        onClick={() => toggleTag(tag)}
                      >
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button
                    className="w-full bg-gradient-to-r from-primary via-secondary to-accent hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 text-white border-0"
                  >
                    Читать статью
                    <Icon name="ArrowRight" className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          )}

          {filteredPosts.length === 0 && (
            <div className="text-center py-16 animate-fade-in">
              <Icon name="Search" className="mx-auto text-muted-foreground mb-4" size={48} />
              <h3 className="text-2xl font-semibold mb-2">Статьи не найдены</h3>
              <p className="text-muted-foreground mb-6">
                Попробуйте изменить фильтры или сбросить поиск
              </p>
              <Button
                onClick={() => {
                  setSelectedCategory('Состав');
                  setSelectedTags([]);
                }}
                className="bg-gradient-to-r from-primary to-secondary text-white border-0"
              >
                Сбросить фильтры
              </Button>
            </div>
          )}
        </div>

        <footer className="border-t border-white/10 backdrop-blur-lg bg-white/5 mt-20">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Icon name="Sparkles" className="text-white" size={16} />
                </div>
                <span className="text-sm text-muted-foreground">
                  © 2024 TechBlog. Все права защищены.
                </span>
              </div>
              
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
                  <Icon name="Twitter" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
                  <Icon name="Github" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
                  <Icon name="Linkedin" size={20} />
                </Button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;