---
layout: default
title: Под Админом
parent: Сниппеты
nav_order: 1
---

# Выполнение кода под Админом

<sub></sub>

---

```php
<?if ($GLOBALS["USER"]->IsAdmin()) { echo '<pre>'; var_dump($arResult); echo '</pre>'; }?>
```

```php
<?if ($GLOBALS["USER"]->IsAdmin()):?>
    echo '<pre>';
    var_dump($arResult);
    echo '</pre>';
<?endif;?>
```
