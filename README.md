# Grammy.js Bot Starter

Стартовый шаблон для создания Telegram бота на TypeScript с использованием Grammy.js.

## 🚀 Возможности

- ✅ TypeScript поддержка
- ✅ Система команд с группами
- ✅ Разговоры (conversations)
- ✅ Middleware для логирования
- ✅ Обработка ошибок
- ✅ Сессии пользователей
- ✅ Инлайн-кнопки
- ✅ Модульная архитектура

## 📁 Структура проекта

```
src/
├── bot.ts                 # Главный файл бота
├── commands/              # Команды бота
│   ├── group.ts          # Группировка команд
│   ├── main/             # Основные команды
│   │   ├── start/        # Команда /start
│   │   └── help/         # Команда /help
│   └── scopes.ts         # Области видимости команд
├── conversations/         # Разговоры с пользователями
│   └── hello.ts          # Пример диалога
├── handlers/              # Обработчики событий
│   ├── catch.ts          # Обработка ошибок
│   └── group.ts          # Группировка обработчиков
├── middlewares/           # Middleware
│   ├── group.ts          # Группировка middleware
│   └── logger.ts         # Логирование
├── services/              # Сервисы (пустая папка для ваших сервисов)
├── types/                 # TypeScript типы
│   └── context.ts        # Контекст бота
└── db/                    # База данных
    └── db.ts             # Подключение к БД
```

## 🛠 Установка

1. **Клонируйте репозиторий:**
   ```bash
   git clone <your-repo-url>
   ```

2. **Установите зависимости:**
   ```bash
   npm install
   ```

3. **Создайте файл `.env`:**

4. **Настройте переменные окружения в `.env`:**
   ```env
   BOT_TOKEN=
   ```

5. **Получите токен бота:**
   - Напишите [@BotFather](https://t.me/botfather) в Telegram
   - Создайте нового бота командой `/newbot`
   - Скопируйте полученный токен в файл `.env`

## 🚀 Запуск

### Режим разработки
```bash
npm run dev
```

### Сборка и запуск
```bash
npm run build
npm start
```

## 📝 Использование

### Основные команды

- `/start` - Начать работу с ботом (запускает диалог)
- `/help` - Получить помощь

### Пример диалога

При вызове `/start` бот запустит простой диалог:
1. Спросит ваше имя
2. Спросит ваш возраст
3. Поздоровается с вами

## 🔧 Разработка

### Добавление новой команды

1. Создайте файл в `src/commands/main/your-command/`
2. Экспортируйте функцию команды
3. Добавьте команду в `src/commands/group.ts`

Пример:
```typescript
// src/commands/main/info/info.ts
import { CommandGroup } from "@grammyjs/commands";
import { MyContext } from "@/types/context";
import { privateChats, groupChats } from "@/commands/scopes";

export default function Info(Command: CommandGroup<MyContext>) {
  const cmd = Command.command("info", "Информация о боте");

  const handler = async (ctx: MyContext) => {
    await ctx.reply("Это информационный бот на Grammy.js!");
  };

  cmd.addToScope(privateChats, handler);
  cmd.addToScope(groupChats, handler);
}
```

### Добавление нового разговора

1. Создайте файл в `src/conversations/`
2. Экспортируйте функцию разговора
3. Добавьте в `src/bot.ts`:

```typescript
import yourConversation from "@/conversations/your-conversation";

// В функции bootstrap()
bot.use(createConversation(yourConversation));
```

### Добавление middleware

1. Создайте файл в `src/middlewares/`
2. Экспортируйте функцию middleware
3. Добавьте в `src/middlewares/group.ts`

## 🗄 База данных

В файле `src/db/db.ts` настройте подключение к вашей базе данных. По умолчанию это заглушка.

Пример с MongoDB:
```typescript
import { MongoClient } from 'mongodb';

export default async function connectDB() {
  const client = new MongoClient(process.env.MONGODB_URI!);
  await client.connect();
  console.log('🗄️ Database connected');
}
```

## 📊 Логирование

Бот автоматически логирует:
- Время ответа на каждый запрос
- Ошибки в консоль
- Успешные операции

## 📦 Зависимости

### Основные
- `grammy` - Основная библиотека для работы с Telegram Bot API
- `@grammyjs/conversations` - Система разговоров
- `@grammyjs/commands` - Система команд
- `dotenv` - Загрузка переменных окружения

### Разработка
- `typescript` - TypeScript компилятор
- `nodemon` - Автоперезагрузка при изменениях
- `eslint` - Линтер для TypeScript

## 🤝 Вклад в проект

1. Форкните репозиторий
2. Создайте ветку для новой функции (`git checkout -b feature/amazing-feature`)
3. Зафиксируйте изменения (`git commit -m 'Add amazing feature'`)
4. Отправьте в ветку (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

## 📄 Лицензия

Этот проект лицензирован под лицензией ISC.

## 🆘 Поддержка

Если у вас есть вопросы или проблемы:

1. Проверьте [документацию Grammy.js](https://grammy.dev/)
2. Создайте [Issue](https://github.com/your-username/grammy-starter/issues)
3. Обратитесь к [Telegram Bot API документации](https://core.telegram.org/bots/api)

## 🔗 Полезные ссылки

- [Grammy.js документация](https://grammy.dev/)
- [Telegram Bot API](https://core.telegram.org/bots/api)
- [TypeScript документация](https://www.typescriptlang.org/)
- [Node.js документация](https://nodejs.org/)

---

**Удачной разработки! 🚀**
