---
title: Под Админом
description: Под Админом
---

# Выполнение кода под Админом

Выводим информацию о переменной только под Админом:
```php
<? if ($GLOBALS["USER"]->IsAdmin()) { echo '<pre>'; var_dump($arResult); echo '</pre>'; } ?>
```

Выводим код только под Админом:
```php
<? if ($GLOBALS["USER"]->IsAdmin()): ?>
    ...
<? endif; ?>
```

Админ D7:
```php
use Bitrix\Main\Engine\CurrentUser; // подключение

CurrentUser::get()->isAdmin(); // вывод
```

Админ панель только для админа:
```php
<?= (CurrentUser::get()->isAdmin()) ? $APPLICATION->ShowPanel() : null ?>
```

или
```php
<?= ($GLOBALS["USER"]->IsAdmin()) ? $APPLICATION->ShowPanel() : null ?>
```