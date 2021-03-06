import React, { useEffect, useRef } from 'react';
import styles from './modalAbout.module.scss';
import cn from 'classnames';

export const ModalContentAbout: React.FC = () => {
  const refAbout = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    refAbout.current.classList.add(styles.activeModal);
  }, []);

  return (
    <div className={styles.modalContentAbout} ref={refAbout}>
      <span className={styles.title}>О проекте «Алхимия философии»</span>
      <div className={styles.content}>
        <div className={cn(styles.blockInfo, styles.firstBlock)}>
          <span className={styles.subTitle}>О разработчиках</span>
          <span>Команда разработчиков</span>
          <ul>
            <li>Абанин Д. А., ПИбд-21</li>
            <li>Ильбеков Д. С., ПИбд-21</li>
            <li>Курмыза П. С., ПИбд-21</li>
            <li>Липатов И. А., ПИбд-21</li>
          </ul>
          <span>Научный руководитель: Гильмутдинова Н. А., доцент кафедры «Философия»</span>
        </div>
        <div className={cn(styles.blockInfo, styles.secondBlock)}>
          <span className={styles.subTitle}>Алхимия философии</span>
          <span className={styles.contentBLock}>
            Философия – направляющая сила всех других наук. Именно она задает вопросы, которые ждут
            ответы сотни или даже тысячи лет! Данные проект был вдохновлен целью популяризовать
            философию. Мы решили объединить наши идеи и мысли в масштабную игру, где абсолютно
            каждый может начать изучать философию в интерактивном формате. Игроку предоставляется
            возможность не только узнавать основы философии, наблюдать за эволюцией ее идей с
            течением времени, но и самому исследовать взаимосвязи между ключевыми моментами в
            истории философии. Исследуйте основные понятия, первоначала, философов и философские
            направления разных эпох, чтобы самому восхититься многообразием философии!
          </span>
        </div>
        <div className={cn(styles.blockInfo, styles.thirdBlock)}>
          <span className={styles.subTitle}>Рекомендуем к прочтению</span>
          <ol>
            <li>
              Н.А. Балаклеец, В.И. Белозерцев, Т. Н. Брысина, М. П. Волков, Н. А. Гильмутдинова,
              Р.В. Леушкин, Г. Ф. Миронов, Е. Ш. Ташлинская, В.Т. Фаритов. Философия : учебное
              пособие (для бакалавров и магистрантов нефилософских направлений подготовки). –
              Ульяновск : УлГТУ, 2017. – 290 с.
            </li>
            <li>
              Н. А. Гильмутдинова. Философия : учебно-практическое пособие. – Ульяновск : УлГТУ,
              2011. – 124 с
            </li>
            <li>
              Д. Е. Любомиров. Философия Средних веков: Учебное пособие. – СПб.: СПбГЛТА, 2009. – 44
              с.
            </li>
          </ol>
        </div>
        <div className={cn(styles.blockInfo, styles.fourthBlock)}>
          <span className={styles.subTitle}>Технологии</span>
          <div className={styles.technologies}>
            <div className={styles.technology}>
              <span>React</span>
            </div>
            <div className={styles.technology}>
              <span>TypeScript</span>
            </div>
            <div className={styles.technology}>
              <span>SVG</span>
            </div>
            <div className={styles.technology}>
              <span>JSON</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
