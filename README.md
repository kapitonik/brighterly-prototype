# Brighterly Product Prototype

Статический прототип для тестового задания. Главная страница устроена как рабочее поле веб-приложения: сверху переключаются функции, внутри выбранной функции можно переключать приложение/роль и экраны сценария.

## Локальный запуск

Откройте `index.html` в браузере или запустите простой сервер:

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

После этого страница будет доступна на `http://127.0.0.1:8000/`.

## Структура

```text
brighterly-prototype/
  index.html
  css/styles.css
  js/app.js
```

## Публикация через GitHub Pages

1. Создайте пустой репозиторий на GitHub, например `brighterly-prototype`.
2. Добавьте этот локальный репозиторий как `origin`.
3. Отправьте ветку `main`.
4. В GitHub откройте `Settings` → `Pages`.
5. В разделе `Build and deployment` выберите `Deploy from a branch`.
6. Выберите ветку `main` и папку `/root`.

После публикации адрес будет выглядеть так:

```text
https://YOUR_USERNAME.github.io/brighterly-prototype/
```
