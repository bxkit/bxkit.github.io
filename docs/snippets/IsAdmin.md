---
layout: default
title: Под Админом
parent: Сниппеты
nav_order: 1
---

# Выполнение кода под Админом

<sub></sub>

---

Выводим информацию о переменной только под Админом:

```php
<?if ($GLOBALS["USER"]->IsAdmin()) { echo '<pre>'; var_dump($arResult); echo '</pre>'; }?>
```
<br>

Выводим код только под Админом:

```php
<?if ($GLOBALS["USER"]->IsAdmin()):?>
    ...
<?endif;?>
```
