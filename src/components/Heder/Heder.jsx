import { SectionTitle } from "./Heder.module"

export function SevaHeader() {
  return (
    <header>
      <div>
        <div>
          <span>🌱 Зернятко</span>
        </div>

        <nav>
          <a href="/">Головна</a>
          <a href="/products">Товари</a>
          <a href="/categories">Категорії</a>
        </nav>

        <div>
          <button>Вхід</button>
          <button>Реєстрація</button>

          <button>
            🛒
            <span>1</span>
          </button>
        </div>
      </div>
    </header>
  );
}



