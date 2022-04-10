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
            <li>Абанин Даниил</li>
            <li>Ильбеков Дмитрий</li>
            <li>Курмыза Павел</li>
            <li>Липатов Илья</li>
          </ul>
          <span>Научный руководитель: Гильмутдинова Нина Амировна</span>
        </div>
        <div className={cn(styles.blockInfo, styles.secondBlock)}>
          <span className={styles.subTitle}>Алхимия философии</span>
          <span className={styles.contentBLock}>
            Философия - направляющая сила всех других наук. Именно она задает вопросы, которые ждут
            ответы сотни или даже тысячи лет! Данные проект был вдохновлен целью популяризовать
            философию. Мы решили объединить наши идеи и мысли в масштабную игру, где абсолютно
            каждый может начать изучать философию в интерактивном формате. Игроку предоставляется
            возможность не только узнавать основы философии, наблюдать за эфолюцией ее идей с
            течением времени, но и самому исследовать взаимосвязи между ключивыми моментами в
            истории философии. Исследуйте основные понятия, первоначала, философов и философские
            направления разных эпох, чтобы самому восхититься наукой философии!
          </span>
        </div>
        <div className={cn(styles.blockInfo, styles.thirdBlock)}>
          <span className={styles.subTitle}>Источники</span>
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
