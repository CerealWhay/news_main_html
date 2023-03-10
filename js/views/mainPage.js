export default new Vue({
    // language=Vue
    template: `

      <div class="content container main-page">
      <div class="main-page__pinned-news pinned-news">

        <div class="pinned-news-item news-card">
          <div class="pinned-news-item__visual">
            <a href="#" class="pinned-news-item__current-section section-btn">
              Документы
            </a>
            <div class="pinned-news-item__banner">
              <img src="media/k.jpg" alt="asd" class="pinned-news-item__banner-img">
            </div>
          </div>
          <div class="pinned-news-item__detail">
            <div class="pinned-news-item__title tooltip tooltip--news-title"
                 data-tooltip="минимум одна строка"
            >
              <a class="pinned-news-item__title-text">
                минимум одна строка
              </a>
            </div>
            <div class="pinned-news-item__info news-card-info-block">
              <div class="news-card-info-block__author">
                Pr team
              </div>
              <div class="news-card-info-block__date">
                27 февраля (ред)
              </div>
            </div>
            <div class="pinned-news-item__technical news-card-tech-block">

              <div class="news-card-tech-block__reactions reactions">
                <div class="reactions__selector">
                  <div class="reactions__selector-icon">
                    <img src="media/main-icon.png" alt="" class="reactions__selector-icon-img">
                  </div>
                  <div class="reactions__hidden-block">
                    <div class="selector-block">
                      <div class="selector-block__wrapper">
                        <div class="selector-block__item">
                          <img src="media/reaction-icon.png" alt=""
                               class="reactions__main-icon-img">
                        </div>
                        <div class="selector-block__item">
                          <img src="media/reaction-icon.png" alt=""
                               class="reactions__main-icon-img">
                        </div>
                        <div class="selector-block__item">
                          <img src="media/reaction-icon.png" alt=""
                               class="reactions__main-icon-img">
                        </div>
                        <div class="selector-block__item">
                          <img src="media/reaction-icon.png" alt=""
                               class="reactions__main-icon-img">
                        </div>
                        <div class="selector-block__item selector-block__item--selected">
                          <img src="media/reaction-icon.png" alt=""
                               class="reactions__main-icon-img">
                        </div>
                        <div class="selector-block__item">
                          <img src="media/reaction-icon.png" alt=""
                               class="reactions__main-icon-img">
                        </div>
                        <div class="selector-block__item">
                          <img src="media/reaction-icon.png" alt=""
                               class="reactions__main-icon-img">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="reactions__marked">
                  <div class="reactions__marked-count">34</div>
                  <div class="reactions__hidden-block">
                    <div class="marked-block">
                      <div class="marked-block__wrapper">
                        <div class="marked-block__reaction-types">
                          <div class="reaction-type">
                            <div class="reaction-type__icon">
                              <img src="media/reaction-icon.png" alt=""
                                   class="reaction-type__icon-img">
                            </div>
                            <div class="reaction-type__count">13</div>
                          </div>
                          <div class="reaction-type reaction-type--selected">
                            <div class="reaction-type__icon">
                              <img src="media/reaction-icon.png" alt=""
                                   class="reaction-type__icon-img">
                            </div>
                            <div class="reaction-type__count">25</div>
                          </div>
                          <div class="reaction-type">
                            <div class="reaction-type__icon">
                              <img src="media/reaction-icon.png" alt=""
                                   class="reaction-type__icon-img">
                            </div>
                            <div class="reaction-type__count">7</div>
                          </div>
                          <div class="reaction-type">
                            <div class="reaction-type__icon">
                              <img src="media/reaction-icon.png" alt=""
                                   class="reaction-type__icon-img">
                            </div>
                            <div class="reaction-type__count">2</div>
                          </div>
                          <div class="reaction-type">
                            <div class="reaction-type__icon">
                              <img src="media/reaction-icon.png" alt=""
                                   class="reaction-type__icon-img">
                            </div>
                            <div class="reaction-type__count">14</div>
                          </div>
                          <div class="reaction-type">
                            <div class="reaction-type__icon">
                              <img src="media/reaction-icon.png" alt=""
                                   class="reaction-type__icon-img">
                            </div>
                            <div class="reaction-type__count">14</div>
                          </div>
                          <div class="reaction-type">
                            <div class="reaction-type__icon">
                              <img src="media/reaction-icon.png" alt=""
                                   class="reaction-type__icon-img">
                            </div>
                            <div class="reaction-type__count">14</div>
                          </div>
                        </div>
                        <div class="marked-block__people-wrapper">
                          <div class="marked-block-person">
                            <div class="marked-block-person__avatar">
                              <img src="media/k.jpg" alt=""
                                   class="marked-block-person__avatar-img">
                            </div>
                            <div class="marked-block-person__username">
                              Константин Сонин
                            </div>
                          </div>
                          <div class="marked-block-person">
                            <div class="marked-block-person__avatar">
                              <img src="media/k.jpg" alt=""
                                   class="marked-block-person__avatar-img">
                            </div>
                            <div class="marked-block-person__username">
                              Константин Константинопольский
                            </div>
                          </div>
                          <div class="marked-block-person">
                            <div class="marked-block-person__avatar">
                              <img src="media/k.jpg" alt=""
                                   class="marked-block-person__avatar-img">
                            </div>
                            <div class="marked-block-person__username">
                              Константин Сонин
                            </div>
                          </div>
                          <div class="marked-block-person">
                            <div class="marked-block-person__avatar">
                              <img src="media/k.jpg" alt=""
                                   class="marked-block-person__avatar-img">
                            </div>
                            <div class="marked-block-person__username">
                              Константин Константинопольский
                            </div>
                          </div>
                          <div class="marked-block-person">
                            <div class="marked-block-person__avatar">
                              <img src="media/k.jpg" alt=""
                                   class="marked-block-person__avatar-img">
                            </div>
                            <div class="marked-block-person__username">
                              Константин Сонин
                            </div>
                          </div>
                          <div class="marked-block-person">
                            <div class="marked-block-person__avatar">
                              <img src="media/k.jpg" alt=""
                                   class="marked-block-person__avatar-img">
                            </div>
                            <div class="marked-block-person__username">
                              Константин Константинопольский
                            </div>
                          </div>
                          <div class="marked-block-person">
                            <div class="marked-block-person__avatar">
                              <img src="media/k.jpg" alt=""
                                   class="marked-block-person__avatar-img">
                            </div>
                            <div class="marked-block-person__username">
                              Константин Сонин
                            </div>
                          </div>
                          <div class="marked-block-person">
                            <div class="marked-block-person__avatar">
                              <img src="media/k.jpg" alt=""
                                   class="marked-block-person__avatar-img">
                            </div>
                            <div class="marked-block-person__username">
                              Константин Константинопольский
                            </div>
                          </div>
                          <div class="marked-block-person">
                            <div class="marked-block-person__avatar">
                              <img src="media/k.jpg" alt=""
                                   class="marked-block-person__avatar-img">
                            </div>
                            <div class="marked-block-person__username">
                              Константин Сонин
                            </div>
                          </div>
                          <div class="marked-block-person">
                            <div class="marked-block-person__avatar">
                              <img src="media/k.jpg" alt=""
                                   class="marked-block-person__avatar-img">
                            </div>
                            <div class="marked-block-person__username">
                              Константин Константинопольский
                            </div>
                          </div>
                          <div class="marked-block-person">
                            <div class="marked-block-person__avatar">
                              <img src="media/k.jpg" alt=""
                                   class="marked-block-person__avatar-img">
                            </div>
                            <div class="marked-block-person__username">
                              Константин Сонин
                            </div>
                          </div>
                          <div class="marked-block-person">
                            <div class="marked-block-person__avatar">
                              <img src="media/k.jpg" alt=""
                                   class="marked-block-person__avatar-img">
                            </div>
                            <div class="marked-block-person__username">
                              Константин Константинопольский
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="news-card-tech-block__watched">212</div>
              <div class="news-card-tech-block__comments">114</div>
            </div>
          </div>
        </div>

        <div class="pinned-news-item news-card">
          <div class="pinned-news-item__visual">
            <a href="#" class="pinned-news-item__current-section section-btn">
              Документы
            </a>
            <div class="pinned-news-item__banner">
              <img src="media/k.jpg" alt="asd" class="pinned-news-item__banner-img">
            </div>
          </div>
          <div class="pinned-news-item__detail">
            <div class="pinned-news-item__title tooltip tooltip--news-title"
                 data-tooltip="Заголовок: минимум одна строка, максимум 3 строки вот вот вот"
            >
              <a class="pinned-news-item__title-text">
                Заголовок: минимум одна строка, максимум 3 строки вот вот вот
              </a>
            </div>
            <div class="pinned-news-item__info news-card-info-block">
              <div class="news-card-info-block__author">
                Pr team
              </div>
              <div class="news-card-info-block__date">
                27 февраля (ред)
              </div>
            </div>
            <div class="pinned-news-item__technical news-card-tech-block">
              <div class="news-card-tech-block__reactions reactions">
                <div class="reactions__selector">
                  <div class="reactions__selector-icon">
                    <img src="media/main-icon.png" alt="" class="reactions__selector-icon-img">
                  </div>
                  <div class="reactions__hidden-block">
                    <div class="selector-block">
                      <div class="selector-block__wrapper">
                        <div class="selector-block__item">
                          <img src="media/reaction-icon.png" alt=""
                               class="reactions__main-icon-img">
                        </div>
                        <div class="selector-block__item">
                          <img src="media/reaction-icon.png" alt=""
                               class="reactions__main-icon-img">
                        </div>
                        <div class="selector-block__item">
                          <img src="media/reaction-icon.png" alt=""
                               class="reactions__main-icon-img">
                        </div>
                        <div class="selector-block__item">
                          <img src="media/reaction-icon.png" alt=""
                               class="reactions__main-icon-img">
                        </div>
                        <div class="selector-block__item selector-block__item--selected">
                          <img src="media/reaction-icon.png" alt=""
                               class="reactions__main-icon-img">
                        </div>
                        <div class="selector-block__item">
                          <img src="media/reaction-icon.png" alt=""
                               class="reactions__main-icon-img">
                        </div>
                        <div class="selector-block__item">
                          <img src="media/reaction-icon.png" alt=""
                               class="reactions__main-icon-img">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="reactions__marked">
                  <div class="reactions__marked-count">34</div>
                  <div class="reactions__hidden-block">
                    <div class="marked-block">
                      <div class="marked-block__wrapper">
                        <div class="marked-block__reaction-types">
                          <div class="reaction-type">
                            <div class="reaction-type__icon">
                              <img src="media/reaction-icon.png" alt=""
                                   class="reaction-type__icon-img">
                            </div>
                            <div class="reaction-type__count">13</div>
                          </div>
                          <div class="reaction-type reaction-type--selected">
                            <div class="reaction-type__icon">
                              <img src="media/reaction-icon.png" alt=""
                                   class="reaction-type__icon-img">
                            </div>
                            <div class="reaction-type__count">25</div>
                          </div>
                          <div class="reaction-type">
                            <div class="reaction-type__icon">
                              <img src="media/reaction-icon.png" alt=""
                                   class="reaction-type__icon-img">
                            </div>
                            <div class="reaction-type__count">74</div>
                          </div>
                          <div class="reaction-type">
                            <div class="reaction-type__icon">
                              <img src="media/reaction-icon.png" alt=""
                                   class="reaction-type__icon-img">
                            </div>
                            <div class="reaction-type__count">24</div>
                          </div>
                          <div class="reaction-type">
                            <div class="reaction-type__icon">
                              <img src="media/reaction-icon.png" alt=""
                                   class="reaction-type__icon-img">
                            </div>
                            <div class="reaction-type__count">14</div>
                          </div>
                          <div class="reaction-type">
                            <div class="reaction-type__icon">
                              <img src="media/reaction-icon.png" alt=""
                                   class="reaction-type__icon-img">
                            </div>
                            <div class="reaction-type__count">14</div>
                          </div>
                          <div class="reaction-type">
                            <div class="reaction-type__icon">
                              <img src="media/reaction-icon.png" alt=""
                                   class="reaction-type__icon-img">
                            </div>
                            <div class="reaction-type__count">14</div>
                          </div>
                        </div>
                        <div class="marked-block__people-wrapper">
                          <div class="marked-block-person">
                            <div class="marked-block-person__avatar">
                              <img src="media/k.jpg" alt=""
                                   class="marked-block-person__avatar-img">
                            </div>
                            <div class="marked-block-person__username">
                              Константин Сонин
                            </div>
                          </div>
                          <div class="marked-block-person">
                            <div class="marked-block-person__avatar">
                              <img src="media/k.jpg" alt=""
                                   class="marked-block-person__avatar-img">
                            </div>
                            <div class="marked-block-person__username">
                              Константин Константинопольский
                            </div>
                          </div>
                          <div class="marked-block-person">
                            <div class="marked-block-person__avatar">
                              <img src="media/k.jpg" alt=""
                                   class="marked-block-person__avatar-img">
                            </div>
                            <div class="marked-block-person__username">
                              Константин Сонин
                            </div>
                          </div>
                          <div class="marked-block-person">
                            <div class="marked-block-person__avatar">
                              <img src="media/k.jpg" alt=""
                                   class="marked-block-person__avatar-img">
                            </div>
                            <div class="marked-block-person__username">
                              Константин Константинопольский
                            </div>
                          </div>
                          <div class="marked-block-person">
                            <div class="marked-block-person__avatar">
                              <img src="media/k.jpg" alt=""
                                   class="marked-block-person__avatar-img">
                            </div>
                            <div class="marked-block-person__username">
                              Константин Сонин
                            </div>
                          </div>
                          <div class="marked-block-person">
                            <div class="marked-block-person__avatar">
                              <img src="media/k.jpg" alt=""
                                   class="marked-block-person__avatar-img">
                            </div>
                            <div class="marked-block-person__username">
                              Константин Константинопольский
                            </div>
                          </div>
                          <div class="marked-block-person">
                            <div class="marked-block-person__avatar">
                              <img src="media/k.jpg" alt=""
                                   class="marked-block-person__avatar-img">
                            </div>
                            <div class="marked-block-person__username">
                              Константин Сонин
                            </div>
                          </div>
                          <div class="marked-block-person">
                            <div class="marked-block-person__avatar">
                              <img src="media/k.jpg" alt=""
                                   class="marked-block-person__avatar-img">
                            </div>
                            <div class="marked-block-person__username">
                              Константин Константинопольский
                            </div>
                          </div>
                          <div class="marked-block-person">
                            <div class="marked-block-person__avatar">
                              <img src="media/k.jpg" alt=""
                                   class="marked-block-person__avatar-img">
                            </div>
                            <div class="marked-block-person__username">
                              Константин Сонин
                            </div>
                          </div>
                          <div class="marked-block-person">
                            <div class="marked-block-person__avatar">
                              <img src="media/k.jpg" alt=""
                                   class="marked-block-person__avatar-img">
                            </div>
                            <div class="marked-block-person__username">
                              Константин Константинопольский
                            </div>
                          </div>
                          <div class="marked-block-person">
                            <div class="marked-block-person__avatar">
                              <img src="media/k.jpg" alt=""
                                   class="marked-block-person__avatar-img">
                            </div>
                            <div class="marked-block-person__username">
                              Константин Сонин
                            </div>
                          </div>
                          <div class="marked-block-person">
                            <div class="marked-block-person__avatar">
                              <img src="media/k.jpg" alt=""
                                   class="marked-block-person__avatar-img">
                            </div>
                            <div class="marked-block-person__username">
                              Константин Константинопольский
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="news-card-tech-block__watched">212</div>
              <div class="news-card-tech-block__comments">114</div>
            </div>
          </div>
        </div>

        <div class="pinned-news-item news-card">
          <div class="pinned-news-item__visual">
            <a href="#" class="pinned-news-item__current-section section-btn">
              Документы
            </a>
            <div class="pinned-news-item__banner">
              <img src="media/k.jpg" alt="asd" class="pinned-news-item__banner-img">
            </div>
          </div>
          <div class="pinned-news-item__detail">
            <div class="pinned-news-item__title tooltip tooltip--news-title"
                 data-tooltip="Очевидно длинный заголовк на много строк (заголовок): минимум одна строка максимум 3 строки вот вот вот"
            >
              <a class="pinned-news-item__title-text">
                Очевидно длинный заголовк на много строк (заголовок): минимум одна строка максимум 3 строки
                вот
                вот вот
              </a>
            </div>
            <div class="pinned-news-item__info news-card-info-block">
              <div class="news-card-info-block__author">
                Pr team
              </div>
              <div class="news-card-info-block__date">
                27 февраля (ред)
              </div>
            </div>
            <div class="pinned-news-item__technical news-card-tech-block">
              <div class="news-card-tech-block__reactions reactions">
                <div class="reactions__selector">
                  <div class="reactions__selector-icon">
                    <img src="media/main-icon.png" alt="" class="reactions__selector-icon-img">
                  </div>
                  <div class="reactions__hidden-block">
                    <div class="selector-block">
                      <div class="selector-block__wrapper">
                        <div class="selector-block__item">
                          <img src="media/reaction-icon.png" alt=""
                               class="reactions__main-icon-img">
                        </div>
                        <div class="selector-block__item">
                          <img src="media/reaction-icon.png" alt=""
                               class="reactions__main-icon-img">
                        </div>
                        <div class="selector-block__item">
                          <img src="media/reaction-icon.png" alt=""
                               class="reactions__main-icon-img">
                        </div>
                        <div class="selector-block__item">
                          <img src="media/reaction-icon.png" alt=""
                               class="reactions__main-icon-img">
                        </div>
                        <div class="selector-block__item selector-block__item--selected">
                          <img src="media/reaction-icon.png" alt=""
                               class="reactions__main-icon-img">
                        </div>
                        <div class="selector-block__item">
                          <img src="media/reaction-icon.png" alt=""
                               class="reactions__main-icon-img">
                        </div>
                        <div class="selector-block__item">
                          <img src="media/reaction-icon.png" alt=""
                               class="reactions__main-icon-img">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="reactions__marked">
                  <div class="reactions__marked-count">34</div>
                  <div class="reactions__hidden-block">
                    <div class="marked-block">
                      <div class="marked-block__wrapper">
                        <div class="marked-block__reaction-types">
                          <div class="reaction-type">
                            <div class="reaction-type__icon">
                              <img src="media/reaction-icon.png" alt=""
                                   class="reaction-type__icon-img">
                            </div>
                            <div class="reaction-type__count">13</div>
                          </div>
                          <div class="reaction-type reaction-type--selected">
                            <div class="reaction-type__icon">
                              <img src="media/reaction-icon.png" alt=""
                                   class="reaction-type__icon-img">
                            </div>
                            <div class="reaction-type__count">25</div>
                          </div>
                          <div class="reaction-type">
                            <div class="reaction-type__icon">
                              <img src="media/reaction-icon.png" alt=""
                                   class="reaction-type__icon-img">
                            </div>
                            <div class="reaction-type__count">7</div>
                          </div>
                          <div class="reaction-type">
                            <div class="reaction-type__icon">
                              <img src="media/reaction-icon.png" alt=""
                                   class="reaction-type__icon-img">
                            </div>
                            <div class="reaction-type__count">2</div>
                          </div>
                          <div class="reaction-type">
                            <div class="reaction-type__icon">
                              <img src="media/reaction-icon.png" alt=""
                                   class="reaction-type__icon-img">
                            </div>
                            <div class="reaction-type__count">14</div>
                          </div>
                          <div class="reaction-type">
                            <div class="reaction-type__icon">
                              <img src="media/reaction-icon.png" alt=""
                                   class="reaction-type__icon-img">
                            </div>
                            <div class="reaction-type__count">14</div>
                          </div>
                          <div class="reaction-type">
                            <div class="reaction-type__icon">
                              <img src="media/reaction-icon.png" alt=""
                                   class="reaction-type__icon-img">
                            </div>
                            <div class="reaction-type__count">14</div>
                          </div>
                        </div>
                        <div class="marked-block__people-wrapper">
                          <div class="marked-block-person">
                            <div class="marked-block-person__avatar">
                              <img src="media/k.jpg" alt=""
                                   class="marked-block-person__avatar-img">
                            </div>
                            <div class="marked-block-person__username">
                              Константин Сонин
                            </div>
                          </div>
                          <div class="marked-block-person">
                            <div class="marked-block-person__avatar">
                              <img src="media/k.jpg" alt=""
                                   class="marked-block-person__avatar-img">
                            </div>
                            <div class="marked-block-person__username">
                              Константин Константинопольский
                            </div>
                          </div>
                          <div class="marked-block-person">
                            <div class="marked-block-person__avatar">
                              <img src="media/k.jpg" alt=""
                                   class="marked-block-person__avatar-img">
                            </div>
                            <div class="marked-block-person__username">
                              Константин Сонин
                            </div>
                          </div>
                          <div class="marked-block-person">
                            <div class="marked-block-person__avatar">
                              <img src="media/k.jpg" alt=""
                                   class="marked-block-person__avatar-img">
                            </div>
                            <div class="marked-block-person__username">
                              Константин Константинопольский
                            </div>
                          </div>
                          <div class="marked-block-person">
                            <div class="marked-block-person__avatar">
                              <img src="media/k.jpg" alt=""
                                   class="marked-block-person__avatar-img">
                            </div>
                            <div class="marked-block-person__username">
                              Константин Сонин
                            </div>
                          </div>
                          <div class="marked-block-person">
                            <div class="marked-block-person__avatar">
                              <img src="media/k.jpg" alt=""
                                   class="marked-block-person__avatar-img">
                            </div>
                            <div class="marked-block-person__username">
                              Константин Константинопольский
                            </div>
                          </div>
                          <div class="marked-block-person">
                            <div class="marked-block-person__avatar">
                              <img src="media/k.jpg" alt=""
                                   class="marked-block-person__avatar-img">
                            </div>
                            <div class="marked-block-person__username">
                              Константин Сонин
                            </div>
                          </div>
                          <div class="marked-block-person">
                            <div class="marked-block-person__avatar">
                              <img src="media/k.jpg" alt=""
                                   class="marked-block-person__avatar-img">
                            </div>
                            <div class="marked-block-person__username">
                              Константин Константинопольский
                            </div>
                          </div>
                          <div class="marked-block-person">
                            <div class="marked-block-person__avatar">
                              <img src="media/k.jpg" alt=""
                                   class="marked-block-person__avatar-img">
                            </div>
                            <div class="marked-block-person__username">
                              Константин Сонин
                            </div>
                          </div>
                          <div class="marked-block-person">
                            <div class="marked-block-person__avatar">
                              <img src="media/k.jpg" alt=""
                                   class="marked-block-person__avatar-img">
                            </div>
                            <div class="marked-block-person__username">
                              Константин Константинопольский
                            </div>
                          </div>
                          <div class="marked-block-person">
                            <div class="marked-block-person__avatar">
                              <img src="media/k.jpg" alt=""
                                   class="marked-block-person__avatar-img">
                            </div>
                            <div class="marked-block-person__username">
                              Константин Сонин
                            </div>
                          </div>
                          <div class="marked-block-person">
                            <div class="marked-block-person__avatar">
                              <img src="media/k.jpg" alt=""
                                   class="marked-block-person__avatar-img">
                            </div>
                            <div class="marked-block-person__username">
                              Константин Константинопольский
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="news-card-tech-block__watched">212</div>
              <div class="news-card-tech-block__comments">114</div>
            </div>
          </div>
        </div>

        <div class="pinned-news-item news-card">
          <div class="pinned-news-item__visual">
            <a href="#" class="pinned-news-item__current-section section-btn">
              Документы
            </a>
            <div class="pinned-news-item__banner">
              <img src="media/k.jpg" alt="asd" class="pinned-news-item__banner-img">
            </div>
          </div>
          <div class="pinned-news-item__detail">
            <div class="pinned-news-item__title tooltip tooltip--news-title"
                 data-tooltip="минимум одна строка"
            >
              <a class="pinned-news-item__title-text">
                минимум одна строка
              </a>
            </div>
            <div class="pinned-news-item__info news-card-info-block">
              <div class="news-card-info-block__author">
                Константин Константинопольский
              </div>
              <div class="news-card-info-block__date">
                27 февраля (ред)
              </div>
            </div>
            <div class="pinned-news-item__technical news-card-tech-block">
              <div class="news-card-tech-block__reactions reactions">
                <div class="reactions__selector">
                  <div class="reactions__selector-icon">
                    <img src="media/main-icon.png" alt="" class="reactions__selector-icon-img">
                  </div>
                  <div class="reactions__hidden-block">
                    <div class="selector-block">
                      <div class="selector-block__wrapper">
                        <div class="selector-block__item">
                          <img src="media/reaction-icon.png" alt=""
                               class="reactions__main-icon-img">
                        </div>
                        <div class="selector-block__item">
                          <img src="media/reaction-icon.png" alt=""
                               class="reactions__main-icon-img">
                        </div>
                        <div class="selector-block__item">
                          <img src="media/reaction-icon.png" alt=""
                               class="reactions__main-icon-img">
                        </div>
                        <div class="selector-block__item">
                          <img src="media/reaction-icon.png" alt=""
                               class="reactions__main-icon-img">
                        </div>
                        <div class="selector-block__item selector-block__item--selected">
                          <img src="media/reaction-icon.png" alt=""
                               class="reactions__main-icon-img">
                        </div>
                        <div class="selector-block__item">
                          <img src="media/reaction-icon.png" alt=""
                               class="reactions__main-icon-img">
                        </div>
                        <div class="selector-block__item">
                          <img src="media/reaction-icon.png" alt=""
                               class="reactions__main-icon-img">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="reactions__marked">
                  <div class="reactions__marked-count">34</div>
                  <div class="reactions__hidden-block">
                    <div class="marked-block">
                      <div class="marked-block__wrapper">
                        <div class="marked-block__reaction-types">
                          <div class="reaction-type">
                            <div class="reaction-type__icon">
                              <img src="media/reaction-icon.png" alt=""
                                   class="reaction-type__icon-img">
                            </div>
                            <div class="reaction-type__count">13</div>
                          </div>
                          <div class="reaction-type reaction-type--selected">
                            <div class="reaction-type__icon">
                              <img src="media/reaction-icon.png" alt=""
                                   class="reaction-type__icon-img">
                            </div>
                            <div class="reaction-type__count">25</div>
                          </div>
                          <div class="reaction-type">
                            <div class="reaction-type__icon">
                              <img src="media/reaction-icon.png" alt=""
                                   class="reaction-type__icon-img">
                            </div>
                            <div class="reaction-type__count">7</div>
                          </div>
                          <div class="reaction-type">
                            <div class="reaction-type__icon">
                              <img src="media/reaction-icon.png" alt=""
                                   class="reaction-type__icon-img">
                            </div>
                            <div class="reaction-type__count">2</div>
                          </div>
                          <div class="reaction-type">
                            <div class="reaction-type__icon">
                              <img src="media/reaction-icon.png" alt=""
                                   class="reaction-type__icon-img">
                            </div>
                            <div class="reaction-type__count">14</div>
                          </div>
                          <div class="reaction-type">
                            <div class="reaction-type__icon">
                              <img src="media/reaction-icon.png" alt=""
                                   class="reaction-type__icon-img">
                            </div>
                            <div class="reaction-type__count">14</div>
                          </div>
                          <div class="reaction-type">
                            <div class="reaction-type__icon">
                              <img src="media/reaction-icon.png" alt=""
                                   class="reaction-type__icon-img">
                            </div>
                            <div class="reaction-type__count">14</div>
                          </div>
                        </div>
                        <div class="marked-block__people-wrapper">
                          <div class="marked-block-person">
                            <div class="marked-block-person__avatar">
                              <img src="media/k.jpg" alt=""
                                   class="marked-block-person__avatar-img">
                            </div>
                            <div class="marked-block-person__username">
                              Константин Сонин
                            </div>
                          </div>
                          <div class="marked-block-person">
                            <div class="marked-block-person__avatar">
                              <img src="media/k.jpg" alt=""
                                   class="marked-block-person__avatar-img">
                            </div>
                            <div class="marked-block-person__username">
                              Константин Константинопольский
                            </div>
                          </div>
                          <div class="marked-block-person">
                            <div class="marked-block-person__avatar">
                              <img src="media/k.jpg" alt=""
                                   class="marked-block-person__avatar-img">
                            </div>
                            <div class="marked-block-person__username">
                              Константин Сонин
                            </div>
                          </div>
                          <div class="marked-block-person">
                            <div class="marked-block-person__avatar">
                              <img src="media/k.jpg" alt=""
                                   class="marked-block-person__avatar-img">
                            </div>
                            <div class="marked-block-person__username">
                              Константин Константинопольский
                            </div>
                          </div>
                          <div class="marked-block-person">
                            <div class="marked-block-person__avatar">
                              <img src="media/k.jpg" alt=""
                                   class="marked-block-person__avatar-img">
                            </div>
                            <div class="marked-block-person__username">
                              Константин Сонин
                            </div>
                          </div>
                          <div class="marked-block-person">
                            <div class="marked-block-person__avatar">
                              <img src="media/k.jpg" alt=""
                                   class="marked-block-person__avatar-img">
                            </div>
                            <div class="marked-block-person__username">
                              Константин Константинопольский
                            </div>
                          </div>
                          <div class="marked-block-person">
                            <div class="marked-block-person__avatar">
                              <img src="media/k.jpg" alt=""
                                   class="marked-block-person__avatar-img">
                            </div>
                            <div class="marked-block-person__username">
                              Константин Сонин
                            </div>
                          </div>
                          <div class="marked-block-person">
                            <div class="marked-block-person__avatar">
                              <img src="media/k.jpg" alt=""
                                   class="marked-block-person__avatar-img">
                            </div>
                            <div class="marked-block-person__username">
                              Константин Константинопольский
                            </div>
                          </div>
                          <div class="marked-block-person">
                            <div class="marked-block-person__avatar">
                              <img src="media/k.jpg" alt=""
                                   class="marked-block-person__avatar-img">
                            </div>
                            <div class="marked-block-person__username">
                              Константин Сонин
                            </div>
                          </div>
                          <div class="marked-block-person">
                            <div class="marked-block-person__avatar">
                              <img src="media/k.jpg" alt=""
                                   class="marked-block-person__avatar-img">
                            </div>
                            <div class="marked-block-person__username">
                              Константин Константинопольский
                            </div>
                          </div>
                          <div class="marked-block-person">
                            <div class="marked-block-person__avatar">
                              <img src="media/k.jpg" alt=""
                                   class="marked-block-person__avatar-img">
                            </div>
                            <div class="marked-block-person__username">
                              Константин Сонин
                            </div>
                          </div>
                          <div class="marked-block-person">
                            <div class="marked-block-person__avatar">
                              <img src="media/k.jpg" alt=""
                                   class="marked-block-person__avatar-img">
                            </div>
                            <div class="marked-block-person__username">
                              Константин Константинопольский
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="news-card-tech-block__watched">212</div>
              <div class="news-card-tech-block__comments">114</div>
            </div>
          </div>
        </div>

      </div>

      <div class="page-header main-page__header">
        Новости компании
        <div class="main-page__header-admin-btn"></div>
      </div>

      <div class="page-content">
        <div class="page-content__main">

          <div class="main-page__news-categories news-categories">
            <div class="news-categories__item news-category active">
              <div class="news-category__title">
                Все
              </div>
            </div>
            <div class="news-categories__item news-category">
              <div class="news-category__title">
                Документы
              </div>
            </div>
            <div class="news-categories__item news-category">
              <div class="news-category__title">
                Компания
              </div>
            </div>
            <div class="news-categories__item news-category">
              <div class="news-category__title">
                События
              </div>
            </div>
            <div class="news-categories__item news-category">
              <div class="news-category__title">
                Праздники
              </div>
            </div>
            <div class="news-categories__item news-category">
              <div class="news-category__title">
                Интервью
              </div>
            </div>
            <div class="news-categories__item news-category">
              <div class="news-category__title">
                Обучение
              </div>
            </div>
            <div class="news-categories__item news-category">
              <div class="news-category__title">
                Компания
              </div>
            </div>
            <div class="news-categories__item news-category">
              <div class="news-category__title">
                События
              </div>
            </div>
            <div class="news-categories__item news-category">
              <div class="news-category__title">
                Праздники
              </div>
            </div>
            <div class="news-categories__item news-category">
              <div class="news-category__title">
                Интервью
              </div>
            </div>
          </div>

          <div class="main-page__news-notices news-notices">

            <div class="news-notices__item news-notice">
              <div class="news-notice__text">
                <div class="news-notice__text-preview">
                  Объявление в свернутом виде. Максимум одна строка.
                  Объявление в свернутом виде. Максимум одна строка.
                  Объявление в свернутом виде. Максимум одна строка.
                </div>
                <div class="news-notice__text-detail">
                  Объявление в развернутом виде. Минимум одна строка,
                  максимум три строки 240 символов. Объявление в
                  развернутом виде. Минимум одна строка, максимум
                  три строки. Объявление в развернутом виде.
                  Минимум одна строка, максимум три строки. Минимум од
                  Минимум одна строка, максимум три строки. Минимум од
                  Минимум одна строка, максимум три строки. Минимум од
                  Минимум одна строка, максимум три строки. Минимум од
                  Минимум одна строка, максимум три строки. Минимум од
                  Минимум одна строка, максимум три строки. Минимум од
                </div>
              </div>
            </div>

            <div class="news-notices__item news-notice">
              <div class="news-notice__text">
                <div class="news-notice__text-preview">
                  Объявление в свернутом виде. Максимум одна строка.
                  Объявление в свернутом виде. Максимум одна строка.
                  Объявление в свернутом виде. Максимум одна строка.
                </div>
                <div class="news-notice__text-detail">
                  Объявление в развернутом виде. Минимум одна строка,
                  максимум три строки 240 символов. Объявление в
                  развернутом виде. Минимум одна строка, максимум
                  три строки. Объявление в развернутом виде.
                  Минимум одна строка, максимум три строки. Минимум од
                  Минимум одна строка, максимум три строки. Минимум од
                  Минимум одна строка, максимум три строки. Минимум од
                  Минимум одна строка, максимум три строки. Минимум од
                  Минимум одна строка, максимум три строки. Минимум од
                  Минимум одна строка, максимум три строки. Минимум од
                </div>
              </div>
            </div>

          </div>

          <div class="main-page__news-list news-list">

            <div class="news-list__item news-item news-card">
              <div class="news-item__banner__visual">
                <div class="news-item__banner">
                  <img src="media/k.jpg" alt="" class="news-item__banner-img">
                </div>
              </div>
              <div class="news-item__detail">
                <div class="news-item__title tooltip tooltip--news-title"
                     data-tooltip="Заголовок: минимум одна строка, максимум три строки.
                                Заголовок: минимум одна строка, максимум три строки"
                >
                  <a class="news-item__title-text">
                    Заголовок: минимум одна строка, максимум две строки
                    Заголовок: минимум одна строка, максимум две строки
                    Заголовок: минимум одна строка, максимум две строки
                  </a>
                </div>
                <div class="news-item__annotation">
                  Аннотация. Минимум одна строка, макисимум две строки. Аннотация.
                  Минимум одна строка, макисимум две строки. Аннотация. Минимум одна строка
                  Минимум одна строка, макисимум две строки. Аннотация. Минимум одна строка
                </div>
                <div class="news-item__info-technical-wrapper">
                  <div class="news-item__info news-card-info-block">
                    <div class="news-card-info-block__author">
                      Pr team
                    </div>
                    <div class="news-card-info-block__date">
                      27 февраля (ред)
                    </div>
                  </div>
                  <div class="news-item__technical news-card-tech-block">
                    <div class="news-card-tech-block__reactions reactions">
                      <div class="reactions__selector">
                        <div class="reactions__selector-icon">
                          <img src="media/main-icon.png" alt=""
                               class="reactions__selector-icon-img">
                        </div>
                        <div class="reactions__hidden-block">
                          <div class="selector-block">
                            <div class="selector-block__wrapper">
                              <div class="selector-block__item">
                                <img src="media/reaction-icon.png" alt=""
                                     class="reactions__main-icon-img">
                              </div>
                              <div class="selector-block__item">
                                <img src="media/reaction-icon.png" alt=""
                                     class="reactions__main-icon-img">
                              </div>
                              <div class="selector-block__item">
                                <img src="media/reaction-icon.png" alt=""
                                     class="reactions__main-icon-img">
                              </div>
                              <div class="selector-block__item">
                                <img src="media/reaction-icon.png" alt=""
                                     class="reactions__main-icon-img">
                              </div>
                              <div class="selector-block__item selector-block__item--selected">
                                <img src="media/reaction-icon.png" alt=""
                                     class="reactions__main-icon-img">
                              </div>
                              <div class="selector-block__item">
                                <img src="media/reaction-icon.png" alt=""
                                     class="reactions__main-icon-img">
                              </div>
                              <div class="selector-block__item">
                                <img src="media/reaction-icon.png" alt=""
                                     class="reactions__main-icon-img">
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="reactions__marked">
                        <div class="reactions__marked-count">34</div>
                        <div class="reactions__hidden-block">
                          <div class="marked-block">
                            <div class="marked-block__wrapper">
                              <div class="marked-block__reaction-types">
                                <div class="reaction-type">
                                  <div class="reaction-type__icon">
                                    <img src="media/reaction-icon.png" alt=""
                                         class="reaction-type__icon-img">
                                  </div>
                                  <div class="reaction-type__count">13</div>
                                </div>
                                <div class="reaction-type reaction-type--selected">
                                  <div class="reaction-type__icon">
                                    <img src="media/reaction-icon.png" alt=""
                                         class="reaction-type__icon-img">
                                  </div>
                                  <div class="reaction-type__count">25</div>
                                </div>
                                <div class="reaction-type">
                                  <div class="reaction-type__icon">
                                    <img src="media/reaction-icon.png" alt=""
                                         class="reaction-type__icon-img">
                                  </div>
                                  <div class="reaction-type__count">7</div>
                                </div>
                                <div class="reaction-type">
                                  <div class="reaction-type__icon">
                                    <img src="media/reaction-icon.png" alt=""
                                         class="reaction-type__icon-img">
                                  </div>
                                  <div class="reaction-type__count">2</div>
                                </div>
                                <div class="reaction-type">
                                  <div class="reaction-type__icon">
                                    <img src="media/reaction-icon.png" alt=""
                                         class="reaction-type__icon-img">
                                  </div>
                                  <div class="reaction-type__count">14</div>
                                </div>
                                <div class="reaction-type">
                                  <div class="reaction-type__icon">
                                    <img src="media/reaction-icon.png" alt=""
                                         class="reaction-type__icon-img">
                                  </div>
                                  <div class="reaction-type__count">14</div>
                                </div>
                                <div class="reaction-type">
                                  <div class="reaction-type__icon">
                                    <img src="media/reaction-icon.png" alt=""
                                         class="reaction-type__icon-img">
                                  </div>
                                  <div class="reaction-type__count">14</div>
                                </div>
                              </div>
                              <div class="marked-block__people-wrapper">
                                <div class="marked-block-person">
                                  <div class="marked-block-person__avatar">
                                    <img src="media/k.jpg" alt=""
                                         class="marked-block-person__avatar-img">
                                  </div>
                                  <div class="marked-block-person__username">
                                    Константин Сонин
                                  </div>
                                </div>
                                <div class="marked-block-person">
                                  <div class="marked-block-person__avatar">
                                    <img src="media/k.jpg" alt=""
                                         class="marked-block-person__avatar-img">
                                  </div>
                                  <div class="marked-block-person__username">
                                    Константин Константинопольский
                                  </div>
                                </div>
                                <div class="marked-block-person">
                                  <div class="marked-block-person__avatar">
                                    <img src="media/k.jpg" alt=""
                                         class="marked-block-person__avatar-img">
                                  </div>
                                  <div class="marked-block-person__username">
                                    Константин Сонин
                                  </div>
                                </div>
                                <div class="marked-block-person">
                                  <div class="marked-block-person__avatar">
                                    <img src="media/k.jpg" alt=""
                                         class="marked-block-person__avatar-img">
                                  </div>
                                  <div class="marked-block-person__username">
                                    Константин Константинопольский
                                  </div>
                                </div>
                                <div class="marked-block-person">
                                  <div class="marked-block-person__avatar">
                                    <img src="media/k.jpg" alt=""
                                         class="marked-block-person__avatar-img">
                                  </div>
                                  <div class="marked-block-person__username">
                                    Константин Сонин
                                  </div>
                                </div>
                                <div class="marked-block-person">
                                  <div class="marked-block-person__avatar">
                                    <img src="media/k.jpg" alt=""
                                         class="marked-block-person__avatar-img">
                                  </div>
                                  <div class="marked-block-person__username">
                                    Константин Константинопольский
                                  </div>
                                </div>
                                <div class="marked-block-person">
                                  <div class="marked-block-person__avatar">
                                    <img src="media/k.jpg" alt=""
                                         class="marked-block-person__avatar-img">
                                  </div>
                                  <div class="marked-block-person__username">
                                    Константин Сонин
                                  </div>
                                </div>
                                <div class="marked-block-person">
                                  <div class="marked-block-person__avatar">
                                    <img src="media/k.jpg" alt=""
                                         class="marked-block-person__avatar-img">
                                  </div>
                                  <div class="marked-block-person__username">
                                    Константин Константинопольский
                                  </div>
                                </div>
                                <div class="marked-block-person">
                                  <div class="marked-block-person__avatar">
                                    <img src="media/k.jpg" alt=""
                                         class="marked-block-person__avatar-img">
                                  </div>
                                  <div class="marked-block-person__username">
                                    Константин Сонин
                                  </div>
                                </div>
                                <div class="marked-block-person">
                                  <div class="marked-block-person__avatar">
                                    <img src="media/k.jpg" alt=""
                                         class="marked-block-person__avatar-img">
                                  </div>
                                  <div class="marked-block-person__username">
                                    Константин Константинопольский
                                  </div>
                                </div>
                                <div class="marked-block-person">
                                  <div class="marked-block-person__avatar">
                                    <img src="media/k.jpg" alt=""
                                         class="marked-block-person__avatar-img">
                                  </div>
                                  <div class="marked-block-person__username">
                                    Константин Сонин
                                  </div>
                                </div>
                                <div class="marked-block-person">
                                  <div class="marked-block-person__avatar">
                                    <img src="media/k.jpg" alt=""
                                         class="marked-block-person__avatar-img">
                                  </div>
                                  <div class="marked-block-person__username">
                                    Константин Константинопольский
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="news-card-tech-block__watched">212</div>
                    <div class="news-card-tech-block__comments">114</div>
                  </div>
                </div>
                <div class="news-item__current-section section-btn">
                  Документы
                </div>
              </div>
            </div>

            <div class="news-list__item news-item news-card news-item--no-comments">
              <div class="news-item__banner__visual">
                <div class="news-item__banner">
                  <img src="media/k.jpg" alt="" class="news-item__banner-img">
                </div>
              </div>
              <div class="news-item__detail">
                <div class="news-item__title tooltip tooltip--news-title"
                     data-tooltip="Заголовок: минимум одна строка, максимум три строки.
                                Заголовок: минимум одна строка, максимум три строки"
                >
                  <a class="news-item__title-text">
                    Заголовок: минимум одна строка, максимум две строки
                    Заголовок: минимум одна строка, максимум две строки
                    Заголовок: минимум одна строка, максимум две строки
                  </a>
                </div>
                <div class="news-item__annotation">
                  Аннотация. Минимум одна строка, макисимум две строки. Аннотация.
                  Минимум одна строка, макисимум две строки. Аннотация. Минимум одна строка
                  Минимум одна строка, макисимум две строки. Аннотация. Минимум одна строка
                </div>
                <div class="news-item__info-technical-wrapper">
                  <div class="news-item__info news-card-info-block">
                    <div class="news-card-info-block__author">
                      Pr team
                    </div>
                    <div class="news-card-info-block__date">
                      27 февраля (ред)
                    </div>
                  </div>
                  <div class="news-item__no-comments">
                    Комментарии отключены
                  </div>
                  <div class="news-item__technical news-card-tech-block">
                    <div class="news-card-tech-block__reactions reactions">
                      <div class="reactions__selector">
                        <div class="reactions__selector-icon">
                          <img src="media/main-icon.png" alt=""
                               class="reactions__selector-icon-img">
                        </div>
                        <div class="reactions__hidden-block">
                          <div class="selector-block">
                            <div class="selector-block__wrapper">
                              <div class="selector-block__item">
                                <img src="media/reaction-icon.png" alt=""
                                     class="reactions__main-icon-img">
                              </div>
                              <div class="selector-block__item">
                                <img src="media/reaction-icon.png" alt=""
                                     class="reactions__main-icon-img">
                              </div>
                              <div class="selector-block__item">
                                <img src="media/reaction-icon.png" alt=""
                                     class="reactions__main-icon-img">
                              </div>
                              <div class="selector-block__item">
                                <img src="media/reaction-icon.png" alt=""
                                     class="reactions__main-icon-img">
                              </div>
                              <div class="selector-block__item selector-block__item--selected">
                                <img src="media/reaction-icon.png" alt=""
                                     class="reactions__main-icon-img">
                              </div>
                              <div class="selector-block__item">
                                <img src="media/reaction-icon.png" alt=""
                                     class="reactions__main-icon-img">
                              </div>
                              <div class="selector-block__item">
                                <img src="media/reaction-icon.png" alt=""
                                     class="reactions__main-icon-img">
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="reactions__marked">
                        <div class="reactions__marked-count">34</div>
                        <div class="reactions__hidden-block">
                          <div class="marked-block">
                            <div class="marked-block__wrapper">
                              <div class="marked-block__reaction-types">
                                <div class="reaction-type">
                                  <div class="reaction-type__icon">
                                    <img src="media/reaction-icon.png" alt=""
                                         class="reaction-type__icon-img">
                                  </div>
                                  <div class="reaction-type__count">13</div>
                                </div>
                                <div class="reaction-type reaction-type--selected">
                                  <div class="reaction-type__icon">
                                    <img src="media/reaction-icon.png" alt=""
                                         class="reaction-type__icon-img">
                                  </div>
                                  <div class="reaction-type__count">25</div>
                                </div>
                                <div class="reaction-type">
                                  <div class="reaction-type__icon">
                                    <img src="media/reaction-icon.png" alt=""
                                         class="reaction-type__icon-img">
                                  </div>
                                  <div class="reaction-type__count">7</div>
                                </div>
                                <div class="reaction-type">
                                  <div class="reaction-type__icon">
                                    <img src="media/reaction-icon.png" alt=""
                                         class="reaction-type__icon-img">
                                  </div>
                                  <div class="reaction-type__count">2</div>
                                </div>
                                <div class="reaction-type">
                                  <div class="reaction-type__icon">
                                    <img src="media/reaction-icon.png" alt=""
                                         class="reaction-type__icon-img">
                                  </div>
                                  <div class="reaction-type__count">14</div>
                                </div>
                                <div class="reaction-type">
                                  <div class="reaction-type__icon">
                                    <img src="media/reaction-icon.png" alt=""
                                         class="reaction-type__icon-img">
                                  </div>
                                  <div class="reaction-type__count">14</div>
                                </div>
                                <div class="reaction-type">
                                  <div class="reaction-type__icon">
                                    <img src="media/reaction-icon.png" alt=""
                                         class="reaction-type__icon-img">
                                  </div>
                                  <div class="reaction-type__count">14</div>
                                </div>
                              </div>
                              <div class="marked-block__people-wrapper">
                                <div class="marked-block-person">
                                  <div class="marked-block-person__avatar">
                                    <img src="media/k.jpg" alt=""
                                         class="marked-block-person__avatar-img">
                                  </div>
                                  <div class="marked-block-person__username">
                                    Константин Сонин
                                  </div>
                                </div>
                                <div class="marked-block-person">
                                  <div class="marked-block-person__avatar">
                                    <img src="media/k.jpg" alt=""
                                         class="marked-block-person__avatar-img">
                                  </div>
                                  <div class="marked-block-person__username">
                                    Константин Константинопольский
                                  </div>
                                </div>
                                <div class="marked-block-person">
                                  <div class="marked-block-person__avatar">
                                    <img src="media/k.jpg" alt=""
                                         class="marked-block-person__avatar-img">
                                  </div>
                                  <div class="marked-block-person__username">
                                    Константин Сонин
                                  </div>
                                </div>
                                <div class="marked-block-person">
                                  <div class="marked-block-person__avatar">
                                    <img src="media/k.jpg" alt=""
                                         class="marked-block-person__avatar-img">
                                  </div>
                                  <div class="marked-block-person__username">
                                    Константин Константинопольский
                                  </div>
                                </div>
                                <div class="marked-block-person">
                                  <div class="marked-block-person__avatar">
                                    <img src="media/k.jpg" alt=""
                                         class="marked-block-person__avatar-img">
                                  </div>
                                  <div class="marked-block-person__username">
                                    Константин Сонин
                                  </div>
                                </div>
                                <div class="marked-block-person">
                                  <div class="marked-block-person__avatar">
                                    <img src="media/k.jpg" alt=""
                                         class="marked-block-person__avatar-img">
                                  </div>
                                  <div class="marked-block-person__username">
                                    Константин Константинопольский
                                  </div>
                                </div>
                                <div class="marked-block-person">
                                  <div class="marked-block-person__avatar">
                                    <img src="media/k.jpg" alt=""
                                         class="marked-block-person__avatar-img">
                                  </div>
                                  <div class="marked-block-person__username">
                                    Константин Сонин
                                  </div>
                                </div>
                                <div class="marked-block-person">
                                  <div class="marked-block-person__avatar">
                                    <img src="media/k.jpg" alt=""
                                         class="marked-block-person__avatar-img">
                                  </div>
                                  <div class="marked-block-person__username">
                                    Константин Константинопольский
                                  </div>
                                </div>
                                <div class="marked-block-person">
                                  <div class="marked-block-person__avatar">
                                    <img src="media/k.jpg" alt=""
                                         class="marked-block-person__avatar-img">
                                  </div>
                                  <div class="marked-block-person__username">
                                    Константин Сонин
                                  </div>
                                </div>
                                <div class="marked-block-person">
                                  <div class="marked-block-person__avatar">
                                    <img src="media/k.jpg" alt=""
                                         class="marked-block-person__avatar-img">
                                  </div>
                                  <div class="marked-block-person__username">
                                    Константин Константинопольский
                                  </div>
                                </div>
                                <div class="marked-block-person">
                                  <div class="marked-block-person__avatar">
                                    <img src="media/k.jpg" alt=""
                                         class="marked-block-person__avatar-img">
                                  </div>
                                  <div class="marked-block-person__username">
                                    Константин Сонин
                                  </div>
                                </div>
                                <div class="marked-block-person">
                                  <div class="marked-block-person__avatar">
                                    <img src="media/k.jpg" alt=""
                                         class="marked-block-person__avatar-img">
                                  </div>
                                  <div class="marked-block-person__username">
                                    Константин Константинопольский
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="news-card-tech-block__watched">212</div>
                    <div class="news-card-tech-block__comments">114</div>
                  </div>
                </div>
                <div class="news-item__current-section section-btn">
                  Документы
                </div>
              </div>
            </div>


            <div class="news-card main-banner">
              <div class="main-banner__detail">
                <div class="main-banner__info news-card-info-block">
                  <div class="news-card-info-block__author">
                    Константин Константинопольский
                  </div>
                  <div class="news-card-info-block__date">
                    27 февраля (ред)
                  </div>
                </div>
                <div class="main-banner__title tooltip tooltip--news-title"
                     data-tooltip="Заголовок: минимум одна строка, максимум три строки.
                                Заголовок: минимум одна строка, максимум три строки"
                >
                  <div class="main-banner__title-text">
                    Заголовок: минимум одна строка, максимум три строки.
                    Заголовок: минимум одна строка, максимум три строки
                  </div>
                </div>
                <div class="main-banner__technical news-card-tech-block">
                  <div class="news-card-tech-block__reactions reactions">
                    <div class="reactions__selector">
                      <div class="reactions__selector-icon">
                        <img src="media/main-icon.png" alt="" class="reactions__selector-icon-img">
                      </div>
                      <div class="reactions__hidden-block">
                        <div class="selector-block">
                          <div class="selector-block__wrapper">
                            <div class="selector-block__item">
                              <img src="media/reaction-icon.png" alt=""
                                   class="reactions__main-icon-img">
                            </div>
                            <div class="selector-block__item">
                              <img src="media/reaction-icon.png" alt=""
                                   class="reactions__main-icon-img">
                            </div>
                            <div class="selector-block__item">
                              <img src="media/reaction-icon.png" alt=""
                                   class="reactions__main-icon-img">
                            </div>
                            <div class="selector-block__item">
                              <img src="media/reaction-icon.png" alt=""
                                   class="reactions__main-icon-img">
                            </div>
                            <div class="selector-block__item selector-block__item--selected">
                              <img src="media/reaction-icon.png" alt=""
                                   class="reactions__main-icon-img">
                            </div>
                            <div class="selector-block__item">
                              <img src="media/reaction-icon.png" alt=""
                                   class="reactions__main-icon-img">
                            </div>
                            <div class="selector-block__item">
                              <img src="media/reaction-icon.png" alt=""
                                   class="reactions__main-icon-img">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="reactions__marked">
                      <div class="reactions__marked-count">34</div>
                      <div class="reactions__hidden-block">
                        <div class="marked-block">
                          <div class="marked-block__wrapper">
                            <div class="marked-block__reaction-types">
                              <div class="reaction-type">
                                <div class="reaction-type__icon">
                                  <img src="media/reaction-icon.png" alt=""
                                       class="reaction-type__icon-img">
                                </div>
                                <div class="reaction-type__count">13</div>
                              </div>
                              <div class="reaction-type reaction-type--selected">
                                <div class="reaction-type__icon">
                                  <img src="media/reaction-icon.png" alt=""
                                       class="reaction-type__icon-img">
                                </div>
                                <div class="reaction-type__count">25</div>
                              </div>
                              <div class="reaction-type">
                                <div class="reaction-type__icon">
                                  <img src="media/reaction-icon.png" alt=""
                                       class="reaction-type__icon-img">
                                </div>
                                <div class="reaction-type__count">7</div>
                              </div>
                              <div class="reaction-type">
                                <div class="reaction-type__icon">
                                  <img src="media/reaction-icon.png" alt=""
                                       class="reaction-type__icon-img">
                                </div>
                                <div class="reaction-type__count">2</div>
                              </div>
                              <div class="reaction-type">
                                <div class="reaction-type__icon">
                                  <img src="media/reaction-icon.png" alt=""
                                       class="reaction-type__icon-img">
                                </div>
                                <div class="reaction-type__count">14</div>
                              </div>
                              <div class="reaction-type">
                                <div class="reaction-type__icon">
                                  <img src="media/reaction-icon.png" alt=""
                                       class="reaction-type__icon-img">
                                </div>
                                <div class="reaction-type__count">14</div>
                              </div>
                              <div class="reaction-type">
                                <div class="reaction-type__icon">
                                  <img src="media/reaction-icon.png" alt=""
                                       class="reaction-type__icon-img">
                                </div>
                                <div class="reaction-type__count">14</div>
                              </div>
                            </div>
                            <div class="marked-block__people-wrapper">
                              <div class="marked-block-person">
                                <div class="marked-block-person__avatar">
                                  <img src="media/k.jpg" alt=""
                                       class="marked-block-person__avatar-img">
                                </div>
                                <div class="marked-block-person__username">
                                  Константин Сонин
                                </div>
                              </div>
                              <div class="marked-block-person">
                                <div class="marked-block-person__avatar">
                                  <img src="media/k.jpg" alt=""
                                       class="marked-block-person__avatar-img">
                                </div>
                                <div class="marked-block-person__username">
                                  Константин Константинопольский
                                </div>
                              </div>
                              <div class="marked-block-person">
                                <div class="marked-block-person__avatar">
                                  <img src="media/k.jpg" alt=""
                                       class="marked-block-person__avatar-img">
                                </div>
                                <div class="marked-block-person__username">
                                  Константин Сонин
                                </div>
                              </div>
                              <div class="marked-block-person">
                                <div class="marked-block-person__avatar">
                                  <img src="media/k.jpg" alt=""
                                       class="marked-block-person__avatar-img">
                                </div>
                                <div class="marked-block-person__username">
                                  Константин Константинопольский
                                </div>
                              </div>
                              <div class="marked-block-person">
                                <div class="marked-block-person__avatar">
                                  <img src="media/k.jpg" alt=""
                                       class="marked-block-person__avatar-img">
                                </div>
                                <div class="marked-block-person__username">
                                  Константин Сонин
                                </div>
                              </div>
                              <div class="marked-block-person">
                                <div class="marked-block-person__avatar">
                                  <img src="media/k.jpg" alt=""
                                       class="marked-block-person__avatar-img">
                                </div>
                                <div class="marked-block-person__username">
                                  Константин Константинопольский
                                </div>
                              </div>
                              <div class="marked-block-person">
                                <div class="marked-block-person__avatar">
                                  <img src="media/k.jpg" alt=""
                                       class="marked-block-person__avatar-img">
                                </div>
                                <div class="marked-block-person__username">
                                  Константин Сонин
                                </div>
                              </div>
                              <div class="marked-block-person">
                                <div class="marked-block-person__avatar">
                                  <img src="media/k.jpg" alt=""
                                       class="marked-block-person__avatar-img">
                                </div>
                                <div class="marked-block-person__username">
                                  Константин Константинопольский
                                </div>
                              </div>
                              <div class="marked-block-person">
                                <div class="marked-block-person__avatar">
                                  <img src="media/k.jpg" alt=""
                                       class="marked-block-person__avatar-img">
                                </div>
                                <div class="marked-block-person__username">
                                  Константин Сонин
                                </div>
                              </div>
                              <div class="marked-block-person">
                                <div class="marked-block-person__avatar">
                                  <img src="media/k.jpg" alt=""
                                       class="marked-block-person__avatar-img">
                                </div>
                                <div class="marked-block-person__username">
                                  Константин Константинопольский
                                </div>
                              </div>
                              <div class="marked-block-person">
                                <div class="marked-block-person__avatar">
                                  <img src="media/k.jpg" alt=""
                                       class="marked-block-person__avatar-img">
                                </div>
                                <div class="marked-block-person__username">
                                  Константин Сонин
                                </div>
                              </div>
                              <div class="marked-block-person">
                                <div class="marked-block-person__avatar">
                                  <img src="media/k.jpg" alt=""
                                       class="marked-block-person__avatar-img">
                                </div>
                                <div class="marked-block-person__username">
                                  Константин Константинопольский
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="news-card-tech-block__watched">212</div>
                  <div class="news-card-tech-block__comments">114</div>
                </div>
              </div>
              <div class="main-banner__background">
                <img src="media/banner-bg.jpeg" alt="" class="main-banner__background-img">
              </div>
            </div>

            <div class="news-list__item news-item news-card">
              <div class="news-item__banner__visual">
                <div class="news-item__banner">
                  <img src="media/k.jpg" alt="" class="news-item__banner-img">
                </div>
              </div>
              <div class="news-item__detail">
                <div class="news-item__title tooltip tooltip--news-title"
                     data-tooltip="Заголовок: минимум одна строка, максимум три строки.
                                Заголовок: минимум одна строка, максимум три строки"
                >
                  <a class="news-item__title-text">
                    Заголовок: минимум одна строка, максимум две строки
                    Заголовок: минимум одна строка, максимум две строки
                    Заголовок: минимум одна строка, максимум две строки
                  </a>
                </div>
                <div class="news-item__annotation">
                  Аннотация. Минимум одна строка, макисимум две строки. Аннотация.
                  Минимум одна строка, макисимум две строки. Аннотация. Минимум одна строка
                  Минимум одна строка, макисимум две строки. Аннотация. Минимум одна строка
                </div>
                <div class="news-item__info-technical-wrapper">
                  <div class="news-item__info news-card-info-block">
                    <div class="news-card-info-block__author">
                      Pr team
                    </div>
                    <div class="news-card-info-block__date">
                      27 февраля (ред)
                    </div>
                  </div>
                  <div class="news-item__technical news-card-tech-block">
                    <div class="news-card-tech-block__reactions reactions">
                      <div class="reactions__selector">
                        <div class="reactions__selector-icon">
                          <img src="media/main-icon.png" alt=""
                               class="reactions__selector-icon-img">
                        </div>
                        <div class="reactions__hidden-block">
                          <div class="selector-block">
                            <div class="selector-block__wrapper">
                              <div class="selector-block__item">
                                <img src="media/reaction-icon.png" alt=""
                                     class="reactions__main-icon-img">
                              </div>
                              <div class="selector-block__item">
                                <img src="media/reaction-icon.png" alt=""
                                     class="reactions__main-icon-img">
                              </div>
                              <div class="selector-block__item">
                                <img src="media/reaction-icon.png" alt=""
                                     class="reactions__main-icon-img">
                              </div>
                              <div class="selector-block__item">
                                <img src="media/reaction-icon.png" alt=""
                                     class="reactions__main-icon-img">
                              </div>
                              <div class="selector-block__item selector-block__item--selected">
                                <img src="media/reaction-icon.png" alt=""
                                     class="reactions__main-icon-img">
                              </div>
                              <div class="selector-block__item">
                                <img src="media/reaction-icon.png" alt=""
                                     class="reactions__main-icon-img">
                              </div>
                              <div class="selector-block__item">
                                <img src="media/reaction-icon.png" alt=""
                                     class="reactions__main-icon-img">
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="reactions__marked">
                        <div class="reactions__marked-count">34</div>
                        <div class="reactions__hidden-block">
                          <div class="marked-block">
                            <div class="marked-block__wrapper">
                              <div class="marked-block__reaction-types">
                                <div class="reaction-type">
                                  <div class="reaction-type__icon">
                                    <img src="media/reaction-icon.png" alt=""
                                         class="reaction-type__icon-img">
                                  </div>
                                  <div class="reaction-type__count">13</div>
                                </div>
                                <div class="reaction-type reaction-type--selected">
                                  <div class="reaction-type__icon">
                                    <img src="media/reaction-icon.png" alt=""
                                         class="reaction-type__icon-img">
                                  </div>
                                  <div class="reaction-type__count">25</div>
                                </div>
                                <div class="reaction-type">
                                  <div class="reaction-type__icon">
                                    <img src="media/reaction-icon.png" alt=""
                                         class="reaction-type__icon-img">
                                  </div>
                                  <div class="reaction-type__count">7</div>
                                </div>
                                <div class="reaction-type">
                                  <div class="reaction-type__icon">
                                    <img src="media/reaction-icon.png" alt=""
                                         class="reaction-type__icon-img">
                                  </div>
                                  <div class="reaction-type__count">2</div>
                                </div>
                                <div class="reaction-type">
                                  <div class="reaction-type__icon">
                                    <img src="media/reaction-icon.png" alt=""
                                         class="reaction-type__icon-img">
                                  </div>
                                  <div class="reaction-type__count">14</div>
                                </div>
                                <div class="reaction-type">
                                  <div class="reaction-type__icon">
                                    <img src="media/reaction-icon.png" alt=""
                                         class="reaction-type__icon-img">
                                  </div>
                                  <div class="reaction-type__count">14</div>
                                </div>
                                <div class="reaction-type">
                                  <div class="reaction-type__icon">
                                    <img src="media/reaction-icon.png" alt=""
                                         class="reaction-type__icon-img">
                                  </div>
                                  <div class="reaction-type__count">14</div>
                                </div>
                              </div>
                              <div class="marked-block__people-wrapper">
                                <div class="marked-block-person">
                                  <div class="marked-block-person__avatar">
                                    <img src="media/k.jpg" alt=""
                                         class="marked-block-person__avatar-img">
                                  </div>
                                  <div class="marked-block-person__username">
                                    Константин Сонин
                                  </div>
                                </div>
                                <div class="marked-block-person">
                                  <div class="marked-block-person__avatar">
                                    <img src="media/k.jpg" alt=""
                                         class="marked-block-person__avatar-img">
                                  </div>
                                  <div class="marked-block-person__username">
                                    Константин Константинопольский
                                  </div>
                                </div>
                                <div class="marked-block-person">
                                  <div class="marked-block-person__avatar">
                                    <img src="media/k.jpg" alt=""
                                         class="marked-block-person__avatar-img">
                                  </div>
                                  <div class="marked-block-person__username">
                                    Константин Сонин
                                  </div>
                                </div>
                                <div class="marked-block-person">
                                  <div class="marked-block-person__avatar">
                                    <img src="media/k.jpg" alt=""
                                         class="marked-block-person__avatar-img">
                                  </div>
                                  <div class="marked-block-person__username">
                                    Константин Константинопольский
                                  </div>
                                </div>
                                <div class="marked-block-person">
                                  <div class="marked-block-person__avatar">
                                    <img src="media/k.jpg" alt=""
                                         class="marked-block-person__avatar-img">
                                  </div>
                                  <div class="marked-block-person__username">
                                    Константин Сонин
                                  </div>
                                </div>
                                <div class="marked-block-person">
                                  <div class="marked-block-person__avatar">
                                    <img src="media/k.jpg" alt=""
                                         class="marked-block-person__avatar-img">
                                  </div>
                                  <div class="marked-block-person__username">
                                    Константин Константинопольский
                                  </div>
                                </div>
                                <div class="marked-block-person">
                                  <div class="marked-block-person__avatar">
                                    <img src="media/k.jpg" alt=""
                                         class="marked-block-person__avatar-img">
                                  </div>
                                  <div class="marked-block-person__username">
                                    Константин Сонин
                                  </div>
                                </div>
                                <div class="marked-block-person">
                                  <div class="marked-block-person__avatar">
                                    <img src="media/k.jpg" alt=""
                                         class="marked-block-person__avatar-img">
                                  </div>
                                  <div class="marked-block-person__username">
                                    Константин Константинопольский
                                  </div>
                                </div>
                                <div class="marked-block-person">
                                  <div class="marked-block-person__avatar">
                                    <img src="media/k.jpg" alt=""
                                         class="marked-block-person__avatar-img">
                                  </div>
                                  <div class="marked-block-person__username">
                                    Константин Сонин
                                  </div>
                                </div>
                                <div class="marked-block-person">
                                  <div class="marked-block-person__avatar">
                                    <img src="media/k.jpg" alt=""
                                         class="marked-block-person__avatar-img">
                                  </div>
                                  <div class="marked-block-person__username">
                                    Константин Константинопольский
                                  </div>
                                </div>
                                <div class="marked-block-person">
                                  <div class="marked-block-person__avatar">
                                    <img src="media/k.jpg" alt=""
                                         class="marked-block-person__avatar-img">
                                  </div>
                                  <div class="marked-block-person__username">
                                    Константин Сонин
                                  </div>
                                </div>
                                <div class="marked-block-person">
                                  <div class="marked-block-person__avatar">
                                    <img src="media/k.jpg" alt=""
                                         class="marked-block-person__avatar-img">
                                  </div>
                                  <div class="marked-block-person__username">
                                    Константин Константинопольский
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="news-card-tech-block__watched">212</div>
                    <div class="news-card-tech-block__comments">114</div>
                  </div>
                </div>
                <div class="news-item__current-section section-btn">
                  Документы
                </div>
              </div>
            </div>

            <div class="news-list__item news-item news-card">
              <div class="news-item__banner__visual">
                <div class="news-item__banner">
                  <img src="media/k.jpg" alt="" class="news-item__banner-img">
                </div>
              </div>
              <div class="news-item__detail">
                <div class="news-item__title tooltip tooltip--news-title"
                     data-tooltip="Заголовок: минимум одна строка, максимум три строки.
                                Заголовок: минимум одна строка, максимум три строки"
                >
                  <a class="news-item__title-text">
                    Заголовок: минимум одна строка, максимум две строки
                    Заголовок: минимум одна строка, максимум две строки
                    Заголовок: минимум одна строка, максимум две строки
                  </a>
                </div>
                <div class="news-item__annotation">
                  Аннотация. Минимум одна строка, макисимум две строки. Аннотация.
                  Минимум одна строка, макисимум две строки. Аннотация. Минимум одна строка
                  Минимум одна строка, макисимум две строки. Аннотация. Минимум одна строка
                </div>
                <div class="news-item__info-technical-wrapper">
                  <div class="news-item__info news-card-info-block">
                    <div class="news-card-info-block__author">
                      Pr team
                    </div>
                    <div class="news-card-info-block__date">
                      27 февраля (ред)
                    </div>
                  </div>
                  <div class="news-item__technical news-card-tech-block">
                    <div class="news-card-tech-block__reactions reactions">
                      <div class="reactions__selector">
                        <div class="reactions__selector-icon">
                          <img src="media/main-icon.png" alt=""
                               class="reactions__selector-icon-img">
                        </div>
                        <div class="reactions__hidden-block">
                          <div class="selector-block">
                            <div class="selector-block__wrapper">
                              <div class="selector-block__item">
                                <img src="media/reaction-icon.png" alt=""
                                     class="reactions__main-icon-img">
                              </div>
                              <div class="selector-block__item">
                                <img src="media/reaction-icon.png" alt=""
                                     class="reactions__main-icon-img">
                              </div>
                              <div class="selector-block__item">
                                <img src="media/reaction-icon.png" alt=""
                                     class="reactions__main-icon-img">
                              </div>
                              <div class="selector-block__item">
                                <img src="media/reaction-icon.png" alt=""
                                     class="reactions__main-icon-img">
                              </div>
                              <div class="selector-block__item selector-block__item--selected">
                                <img src="media/reaction-icon.png" alt=""
                                     class="reactions__main-icon-img">
                              </div>
                              <div class="selector-block__item">
                                <img src="media/reaction-icon.png" alt=""
                                     class="reactions__main-icon-img">
                              </div>
                              <div class="selector-block__item">
                                <img src="media/reaction-icon.png" alt=""
                                     class="reactions__main-icon-img">
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="reactions__marked">
                        <div class="reactions__marked-count">34</div>
                        <div class="reactions__hidden-block">
                          <div class="marked-block">
                            <div class="marked-block__wrapper">
                              <div class="marked-block__reaction-types">
                                <div class="reaction-type">
                                  <div class="reaction-type__icon">
                                    <img src="media/reaction-icon.png" alt=""
                                         class="reaction-type__icon-img">
                                  </div>
                                  <div class="reaction-type__count">13</div>
                                </div>
                                <div class="reaction-type reaction-type--selected">
                                  <div class="reaction-type__icon">
                                    <img src="media/reaction-icon.png" alt=""
                                         class="reaction-type__icon-img">
                                  </div>
                                  <div class="reaction-type__count">25</div>
                                </div>
                                <div class="reaction-type">
                                  <div class="reaction-type__icon">
                                    <img src="media/reaction-icon.png" alt=""
                                         class="reaction-type__icon-img">
                                  </div>
                                  <div class="reaction-type__count">7</div>
                                </div>
                                <div class="reaction-type">
                                  <div class="reaction-type__icon">
                                    <img src="media/reaction-icon.png" alt=""
                                         class="reaction-type__icon-img">
                                  </div>
                                  <div class="reaction-type__count">2</div>
                                </div>
                                <div class="reaction-type">
                                  <div class="reaction-type__icon">
                                    <img src="media/reaction-icon.png" alt=""
                                         class="reaction-type__icon-img">
                                  </div>
                                  <div class="reaction-type__count">14</div>
                                </div>
                                <div class="reaction-type">
                                  <div class="reaction-type__icon">
                                    <img src="media/reaction-icon.png" alt=""
                                         class="reaction-type__icon-img">
                                  </div>
                                  <div class="reaction-type__count">14</div>
                                </div>
                                <div class="reaction-type">
                                  <div class="reaction-type__icon">
                                    <img src="media/reaction-icon.png" alt=""
                                         class="reaction-type__icon-img">
                                  </div>
                                  <div class="reaction-type__count">14</div>
                                </div>
                              </div>
                              <div class="marked-block__people-wrapper">
                                <div class="marked-block-person">
                                  <div class="marked-block-person__avatar">
                                    <img src="media/k.jpg" alt=""
                                         class="marked-block-person__avatar-img">
                                  </div>
                                  <div class="marked-block-person__username">
                                    Константин Сонин
                                  </div>
                                </div>
                                <div class="marked-block-person">
                                  <div class="marked-block-person__avatar">
                                    <img src="media/k.jpg" alt=""
                                         class="marked-block-person__avatar-img">
                                  </div>
                                  <div class="marked-block-person__username">
                                    Константин Константинопольский
                                  </div>
                                </div>
                                <div class="marked-block-person">
                                  <div class="marked-block-person__avatar">
                                    <img src="media/k.jpg" alt=""
                                         class="marked-block-person__avatar-img">
                                  </div>
                                  <div class="marked-block-person__username">
                                    Константин Сонин
                                  </div>
                                </div>
                                <div class="marked-block-person">
                                  <div class="marked-block-person__avatar">
                                    <img src="media/k.jpg" alt=""
                                         class="marked-block-person__avatar-img">
                                  </div>
                                  <div class="marked-block-person__username">
                                    Константин Константинопольский
                                  </div>
                                </div>
                                <div class="marked-block-person">
                                  <div class="marked-block-person__avatar">
                                    <img src="media/k.jpg" alt=""
                                         class="marked-block-person__avatar-img">
                                  </div>
                                  <div class="marked-block-person__username">
                                    Константин Сонин
                                  </div>
                                </div>
                                <div class="marked-block-person">
                                  <div class="marked-block-person__avatar">
                                    <img src="media/k.jpg" alt=""
                                         class="marked-block-person__avatar-img">
                                  </div>
                                  <div class="marked-block-person__username">
                                    Константин Константинопольский
                                  </div>
                                </div>
                                <div class="marked-block-person">
                                  <div class="marked-block-person__avatar">
                                    <img src="media/k.jpg" alt=""
                                         class="marked-block-person__avatar-img">
                                  </div>
                                  <div class="marked-block-person__username">
                                    Константин Сонин
                                  </div>
                                </div>
                                <div class="marked-block-person">
                                  <div class="marked-block-person__avatar">
                                    <img src="media/k.jpg" alt=""
                                         class="marked-block-person__avatar-img">
                                  </div>
                                  <div class="marked-block-person__username">
                                    Константин Константинопольский
                                  </div>
                                </div>
                                <div class="marked-block-person">
                                  <div class="marked-block-person__avatar">
                                    <img src="media/k.jpg" alt=""
                                         class="marked-block-person__avatar-img">
                                  </div>
                                  <div class="marked-block-person__username">
                                    Константин Сонин
                                  </div>
                                </div>
                                <div class="marked-block-person">
                                  <div class="marked-block-person__avatar">
                                    <img src="media/k.jpg" alt=""
                                         class="marked-block-person__avatar-img">
                                  </div>
                                  <div class="marked-block-person__username">
                                    Константин Константинопольский
                                  </div>
                                </div>
                                <div class="marked-block-person">
                                  <div class="marked-block-person__avatar">
                                    <img src="media/k.jpg" alt=""
                                         class="marked-block-person__avatar-img">
                                  </div>
                                  <div class="marked-block-person__username">
                                    Константин Сонин
                                  </div>
                                </div>
                                <div class="marked-block-person">
                                  <div class="marked-block-person__avatar">
                                    <img src="media/k.jpg" alt=""
                                         class="marked-block-person__avatar-img">
                                  </div>
                                  <div class="marked-block-person__username">
                                    Константин Константинопольский
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="news-card-tech-block__watched">212</div>
                    <div class="news-card-tech-block__comments">114</div>
                  </div>
                </div>
                <div class="news-item__current-section section-btn">
                  Документы
                </div>
              </div>
            </div>

          </div>

          <div class="main-page__load-more load-more">
            <div class="load-more__btn">
              <div class="load-more__text">
                Загрузить еще <span class="load-more__text--count">10</span> новостей
              </div>
            </div>
          </div>

        </div>
        <div class="page-content__aside">

          <div class="widget announcements">
            <div class="widget__header">
              Анонсы
            </div>
            <div class="widget__body announcements__body">

              <div class="announcements_item announcement">
                <div class="announcement__banner">
                  <img src="media/k.jpg" alt="" class="announcement__img"/>
                </div>
                <div class="announcement__text">
                  Заголовок анонса: минимум одна строка, максимум четыре строки. Заголовок анонса: минимум
                  одна строка, макиси
                  Заголовок анонса: минимум одна строка, максимум четыре строки. Заголовок анонса: минимум
                  одна строка, макиси
                </div>
                <div class="announcement__info">
                  Когда: 15 февраля, 12:25
                </div>
              </div>

              <div class="announcements_item announcement">
                <div class="announcement__banner">
                  <img src="media/k.jpg" alt="" class="announcement__img"/>
                </div>
                <div class="announcement__text">
                  Заголовок анонса: минимум одна строка, максимум четыре строки. Заголовок анонса: минимум
                  одна строка, макиси
                </div>
                <div class="announcement__info">
                  Когда: 15 февраля, 12:25
                </div>
              </div>

              <!--<div class="announcements_item announcement announcement&#45;&#45;plug">
                  <div class="announcement__banner">
                      <img src="media/announcement-plug.png" alt="" class="announcement__img"/>
                  </div>
                  <div class="announcement__text">
                      Готовим анонсы будущих интересных мероприятий
                  </div>
              </div>-->

            </div>
          </div>

          <div class="widget vacancy">
            <div class="widget__header">
              Вакансия недели
            </div>
            <div class="widget__body vacancy__body">
              <div class="vacancy__banner">
                <img src="media/k.jpg" alt="" class="vacancy__img"/>
              </div>
              <div class="vacancy__text">
                Заголовок анонса: минимум одна строка, максимум четыре строки. Заголовок анонса: минимум
                одна строка, макиси
                Заголовок анонса: минимум одна строка, максимум четыре строки. Заголовок анонса: минимум
                одна строка, макиси
              </div>
            </div>
          </div>

          <div class="widget birthdays">
            <div class="widget__header">
              Дни рождения
            </div>
            <div class="widget__body birthdays__body">
              <div class="birthdays__date">
                12 февраля
              </div>
              <div class="birthdays__wrapper">

                <div class="birthdays__item birthday">
                  <div class="birthday__banner">
                    <img src="media/k.jpg" alt="" class="birthday__img"/>
                  </div>
                  <div class="birthday__text">
                    Константин Константинопольский
                  </div>
                </div>
                <div class="birthdays__item birthday">
                  <div class="birthday__banner">
                    <img src="media/k.jpg" alt="" class="birthday__img"/>
                  </div>
                  <div class="birthday__text">
                    Иван Иван
                  </div>
                </div>
                <div class="birthdays__item birthday">
                  <div class="birthday__banner">
                    <img src="media/k.jpg" alt="" class="birthday__img"/>
                  </div>
                  <div class="birthday__text">
                    Константин Константинопольский
                  </div>
                </div>
                <div class="birthdays__item birthday">
                  <div class="birthday__banner">
                    <img src="media/k.jpg" alt="" class="birthday__img"/>
                  </div>
                  <div class="birthday__text">
                    Константин Константинопольский
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

      </div>

    `
})