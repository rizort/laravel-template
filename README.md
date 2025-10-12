### <p align="center">Laravel 12 + Tailwind CSS 4 + Vue.js 3 + PrimeVue 4</p>

<p align="center">
<img src="public/images/laravel-logo.svg" alt="" width="85">&nbsp;&nbsp;&nbsp;&nbsp;
<img src="public/images/tailwindcss-logo.svg" alt="" width="90">&nbsp;&nbsp;&nbsp;&nbsp;
<img src="public/images/vuejs-logo.svg" alt="" width="95">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<img src="public/images/primevue-logo.svg" alt="" width="75">
</p>

### 🔧 Installation

```bash
# Clone
composer create-project rizort/laravel-starter-kits project dev-vue3-primevue4

# Install dependencies
composer setup
```

### 🚀 Runing

The project will be available at http://localhost:8000.

```bash
composer dev
```

### 📁 Demo
You can remove all demo content.
```bash
rm -rf resources/js/components/demo
```

### 🔎 Sync with Laravel repository

It will place changes commit on top of the newest commits from Laravel repository.

```bash
git remote add upstream https://github.com/laravel/laravel.git
git fetch upstream
git rebase upstream/12.x
```
