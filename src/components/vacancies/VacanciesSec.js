import React from "react";
import s from "./styles.module.scss";

export const VacanciesSec = () => {
  return (
    <section className={s.vacancies_section} id="vacancies">
      <div className="container">
        <div className={s.vacancies_section_body}>
          <h1 className={s.vacancies_title}>Кейсы успешно закрытых вакансий</h1>
          <div className={s.vacancies_list}>
            <div className={s.vacancies_list_item}>
              <img
                className={s.wb_ico}
                src="../assets/images/vacancies/wb_ico.jpeg"
              />
              <span className={s.company_title}>
                В компанию: <p>Wildberries</p>
              </span>
              <span className={s.company_pos}>
                На позиции: <p>Android-разработчик, TL Go разработчик</p>
              </span>
              <p className={s.text}>
                <span className={s.text_title}>Описание:</span>
                Взято в работу 5 вакансий, работа велась параллельно с
                внутренним HR и несколькими агентствами. Показано кандидатов: 35
                срок найма: 2,5 недели. Был создан большой пул рассылки с
                первичным сбором резюме без брифинга. В результате было закрыто
                2 вакансии Android разработчика и TL Go разработчика
              </p>
            </div>
            <div className={s.vacancies_list_item}>
              <img
                className={s.fb_ico}
                src="../assets/images/vacancies/fb_ico.png"
              />

              <span className={s.company_title}>
                В компанию:
                <p> FB Group, официальный партнер 1С international</p>
              </span>
              <span className={s.company_pos}>
                На позиции: <p>Разработчик 1С, программист 1С</p>
              </span>
              <p className={s.text}>
                <span className={s.text_title}>Описание:</span>
                Показано кандидатов: 13. Срок найма: 3 недели. Результат:
                кандидат успешно прошел испытательный срок. Какие сложности
                преодолели: в процессе трудоустройства кандидат открывал ИП и
                менял прописку в иностранном государстве
              </p>
            </div>
            <div className={s.vacancies_list_item}>
              <img
                className={s.fb_ico}
                src="../assets/images/vacancies/hw_ico.svg"
              />

              <span className={s.company_title}>
                В компанию:
                <p> IT онлайн-школа «Hello world»</p>
              </span>
              <span className={s.company_pos}>
                На позиции: <p>Human Resources Director (HRD)</p>
              </span>
              <p className={s.text}>
                <span className={s.text_title}>Описание:</span>
                Показано кандидатов: 7. Cрок найма: 12 дней. Результат: кандидат
                успешно прошел испытательный срок, до сих пор работает в
                компании
              </p>
            </div>
            <div className={s.vacancies_list_item}>
              <img
                className={s.ibs_ico}
                src="../assets/images/vacancies/ibs_ico.png"
              />

              <span className={s.company_title}>
                В компанию:
                <p> IBS</p>
              </span>
              <span className={s.company_pos}>
                На позиции: <p>Ведущий аналитик</p>
              </span>
              <p className={s.text}>
                <span className={s.text_title}>Описание:</span>
                Показано кандидатов: 9. Срок найма: 2 недели. Кандидат прошел
                несколько собеседований до финального трудоустройства по одному
                из проектов, успешно прошел испытательный срок. Замена не
                потребовалась
              </p>
            </div>
            <div className={s.vacancies_list_item}>
              <span className={s.company_title}>
                В компанию:
                <p> Structura</p>
              </span>
              <span className={s.company_pos}>
                На позиции: <p>CTO, графический дизайнер и 3D иллюстратор</p>
              </span>
              <p className={s.text}>
                <span className={s.text_title}>Описание:</span>
                Показано кандидатов: 3, из них на третий день был выбран CTO.
                Также был найден за 2 дня графический дизайнер и 3D иллюстратор.
                Подписано NDA соглашение. Работаем на условиях доли в проекте
                Срок реализации 2025 год
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
