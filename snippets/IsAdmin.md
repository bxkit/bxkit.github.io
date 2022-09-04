---
layout: default
title: Под Админом
parent: Сниппеты
nav_order: 0
---

# Выполнение кода под Админом

---

Выводим информацию о переменной только под Админом:
```php
<? if ($GLOBALS["USER"]->IsAdmin()) { echo '<pre>'; var_dump($arResult); echo '</pre>'; } ?>
```

<br>

Выводим код только под Админом:
```php
<? if ($GLOBALS["USER"]->IsAdmin()): ?>
    ...
<? endif; ?>
```

<br>

Админ D7:
```php
use Bitrix\Main\Engine\CurrentUser; // подключение

CurrentUser::get()->isAdmin(); // вывод
```

<br>

Админ панель только для админа:
```php
<?= (CurrentUser::get()->isAdmin()) ? $APPLICATION->ShowPanel() : null ?>
```

или
```php
<?= ($GLOBALS["USER"]->IsAdmin()) ? $APPLICATION->ShowPanel() : null ?>
```

<br>
