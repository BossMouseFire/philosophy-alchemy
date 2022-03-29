import React, { useEffect, useState } from 'react';
import styles from './merger.module.scss';
import { useGlobalContext } from '../../context';
import { Element } from '../element/element';
import { IElement, IPosition } from '../../types/data';
import DataService from '../../services/DataService';
import { colors, radius, sizeImage, urlImages } from '../../constants';
import { IMerger } from './mergerProps';

export const Merger: React.FC<IMerger> = ({ setForceUpdate }) => {
  const { elements, setElements } = useGlobalContext();
  const [resultElement, setResultElement] = useState<IElement | undefined>(undefined);

  useEffect(() => {
    if (!elements.length) {
      setResultElement(undefined);
    }
    if (elements.length === 3) {
      setElements([elements[2]]);
      setResultElement(undefined);
    }
  }, [elements]);

  useEffect(() => {
    if (elements.length === 2) {
      const generalElement = DataService.checkGeneralChild(elements[0], elements[1], 0);
      if (generalElement) {
        setResultElement(generalElement);
        setForceUpdate((state) => !state);
      } else {
        setTimeout(() => {
          setElements([elements[0]]);
        }, 400);
      }
    }
  }, [elements]);

  const onClearLeftElement = () => {
    setElements([]);
    setResultElement(undefined);
  };

  const getLeftElement = () => {
    if (elements[0]) {
      return (
        <Element
          name={elements[0].name}
          radius={radius.merger}
          sizeImage={sizeImage.merger}
          isText={false}
          position={{ x: 37, y: 38 } as IPosition}
          ratioWidth={1}
          ratioHeight={1}
          colorStroke={colors.status.usual}
          imageHref={urlImages + elements[0].icon}
          onClick={onClearLeftElement}
        />
      );
    }
    return (
      <g opacity="0.7">
        <path
          d="M37 20.8C40.4018 20.8 43.7273 21.8088 46.5558 23.6987C49.3843 25.5887 51.5889 28.275 52.8907 31.4178C54.1926 34.5607 54.5332 38.0191 53.8695 41.3555C53.2058 44.692 51.5677 47.7568 49.1622 50.1622C46.7568 52.5677
          43.692 54.2058 40.3556 54.8695C37.0191 55.5332 33.5607 55.1925 30.4179 53.8907C27.275 52.5889 24.5887 50.3843 22.6987 47.5558C20.8088 44.7273 19.8 41.4018 19.8 38C19.8 33.4383 21.6121 29.0634 24.8378 25.8378C28.0634 22.6121 32.4383 20.8 37 20.8ZM37 18C33.0444 18 29.1776 19.173 25.8886 21.3706C22.5996 23.5682 20.0362 26.6918 18.5224 30.3463C17.0087 34.0009 16.6126 38.0222 17.3843 41.9018C18.156 45.7814 20.0608 49.3451 22.8579 52.1421C25.6549 54.9392 29.2186 56.844 33.0982 57.6157C36.9778 58.3874 40.9992 57.9913 44.6537 56.4776C48.3082 54.9638 51.4318 52.4004 53.6294 49.1114C55.827 45.8224 57 41.9556 57 38C57 32.6957 54.8929 27.6086 51.1421 23.8579C47.3914 20.1071 42.3043 18 37 18Z"
          fill="white"
        />
      </g>
    );
  };

  const getRightElement = () => {
    if (elements[1]) {
      return (
        <Element
          name={elements[1].name}
          radius={radius.merger}
          sizeImage={sizeImage.merger}
          isText={false}
          ratioWidth={1}
          ratioHeight={1}
          position={{ x: 354, y: 38 } as IPosition}
          colorStroke={colors.status.usual}
          imageHref={urlImages + elements[1].icon}
        />
      );
    }
    return (
      <g opacity="0.7">
        <path
          d="M354 20.8C357.402 20.8 360.727 21.8088 363.556 23.6987C366.384 25.5887 368.589 28.275 369.891 31.4178C371.193 34.5607 371.533 38.0191 370.87 41.3555C370.206 44.692 368.568 47.7568 366.162 50.1622C363.757 52.5677 360.692 54.2058 357.356 54.8695C354.019 55.5332 350.561 55.1925 347.418 53.8907C344.275 52.5889 341.589 50.3843 339.699 47.5558C337.809 44.7273 336.8 41.4018 336.8 38C336.8 33.4383 338.612 29.0634 341.838 25.8378C345.063 22.6121 349.438 20.8 354 20.8ZM354 18C350.044 18 346.178 19.173 342.889 21.3706C339.6 23.5682 337.036 26.6918 335.522 30.3463C334.009 34.0009 333.613 38.0222 334.384
          41.9018C335.156 45.7814 337.061 49.3451 339.858 52.1421C342.655 54.9392 346.219 56.844 350.098 57.6157C353.978 58.3874 357.999 57.9913 361.654 56.4776C365.308 54.9638 368.432 52.4004 370.629 49.1114C372.827 45.8224 374 41.9556 374 38C374 32.6957 371.893 27.6086 368.142 23.8579C364.391 20.1071 359.304 18 354 18Z"
          fill="white"
        />
      </g>
    );
  };

  const getCenterElement = () => {
    if (resultElement) {
      return (
        <Element
          name={resultElement.name}
          radius={radius.merger}
          sizeImage={sizeImage.merger}
          isText={false}
          ratioWidth={1}
          ratioHeight={1}
          position={{ x: 195, y: 38 } as IPosition}
          colorStroke={colors.status.usual}
          imageHref={urlImages + resultElement.icon}
        />
      );
    }
    return (
      <g opacity="0.7">
        <path
          d="M196 20.8C199.402 20.8 202.727 21.8088 205.556 23.6987C208.384 25.5887 210.589 28.275 211.891 31.4178C213.193 34.5607 213.533 38.0191 212.87 41.3555C212.206 44.692 210.568 47.7568 208.162 50.1622C205.757 52.5677 202.692 54.2058 199.356 54.8695C196.019 55.5332 192.561 55.1925 189.418 53.8907C186.275 52.5889 183.589 50.3843 181.699 47.5558C179.809 44.7273 178.8 41.4018 178.8 38C178.8 33.4383 180.612 29.0634 183.838 25.8378C187.063 22.6121 191.438 20.8 196 20.8ZM196 18C192.044 18 188.178 19.173 184.889 21.3706C181.6 23.5682 179.036 26.6918 177.522 30.3463C176.009 34.0009 175.613 38.0222 176.384 41.9018C177.156 45.7814 179.061 49.3451 181.858
          52.1421C184.655 54.9392 188.219 56.844 192.098 57.6157C195.978 58.3874 199.999 57.9913 203.654 56.4776C207.308 54.9638 210.432 52.4004 212.629 49.1114C214.827 45.8224 216 41.9556 216 38C216 32.6957 213.893 27.6086 210.142 23.8579C206.391 20.1071 201.304 18 196 18Z"
          fill="white"
        />
      </g>
    );
  };

  return (
    <div className={styles.mergeComponent}>
      <svg width="391" height="75" viewBox="0 0 391 75">
        {getCenterElement()}
        {getLeftElement()}
        {getRightElement()}
        <path
          d="M326.975 13.2088C324.763 15.6691 322.891 18.4169 321.408 21.3782C321.408 21.3782 317.425 29.3499 317.554 38.1471C317.608 40.9165 318.04 43.6652 318.839 46.3166V46.3166C319.572 49.4672 320.724 52.5043 322.265 55.346C323.988 58.3759 326.153 61.1296 328.689 63.5155C330.963 65.6653 340.594 74.239 354.384 73.8348C356.448 73.7555 358.501 73.4966 360.521 73.0608C363.189 72.4933 372.427 70.3907 380.08 62.2256C389.638 52.0309 389.929 39.6907 389.929 37.7172C389.929 36.3799 389.797 20.8279 377.51 10.1989C368.658 2.53685 358.054 1.37592 353.956 1.16954C314.475 -0.812635 274.728 29.1177 274.728 29.1177C226.664 59.4608 218.104 75.2838 195.5 73.8348C191.5 73.5768 179.612 72.9233 170.233 63.9454C159.222 53.3982 159.098 39.0716 159.098 37.2872C159.244 23.9022 166.738 15.178 168.52 13.2088C179.029 1.59951 193.115 1.19533 195.5 1.16954"
          stroke="#FF0000"
          strokeWidth="2"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M336.825 10.6289C333.488 12.7925 330.583 15.5632 328.26 18.7984C324.274 24.449 322.175 31.2232 322.265 38.1471C322.307 41.0408 322.83 50.4486 329.973 58.7858C331.121 60.1273 340.136 70.2875 354.812 69.965C366.731 69.7027 374.401 62.7028 376.225 60.9356C385.878 51.5923 386.075 39.6563 386.075 37.7171C386.075 36.2251 385.878 23.7087 376.225 14.4987C373.656 12.0392 367.167 6.73336 353.956 5.46925C347.866 4.88449 324.32 3.22479 274.728 33.4174C263.593 40.2067 252.266 47.8989 231.474 59.2157C218.468 66.2931 208.382 71.1819 195.5 69.965C191.068 69.5351 181.612 68.5117 173.659 60.9356C171.702 59.0695 163.239 50.6163 163.381 37.2872C163.535 23.2013 173.162 14.7179 174.944 13.2087C183.29 6.1443 192.605 5.54234 195.5 5.46925"
          stroke="#FF0000"
          strokeWidth="2"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M353.956 9.76897C347.396 9.75828 341.037 12.0384 335.969 16.2186C334.971 17.0527 327.108 23.8506 326.119 35.1373C325.848 38.3165 326.138 41.5187 326.975 44.5967C328.665 50.6087 332.277 55.8964 337.253 59.6457C342.291 63.4946 348.502 65.4698 354.828 65.2346C361.154 64.9994 367.202 62.5682 371.942 58.3558C381.257 50.1261 381.364 38.719 381.364 37.2872C381.364 36.4272 381.086 24.2246 371.514 16.2186C365.947 11.5491 359.463 10.1989 353.956 9.76897ZM353.956 9.76897C334.47 8.21678 311.601 16.7517 274.728 37.2872C259.49 45.7748 249.371 52.1255 231.474 59.2157C219.808 63.8336 208.485 67.325 195.072 65.2354C189.127 64.3066 180.404 62.8189 174.087 55.346C167.77 47.8731 167.663 39.149 167.663 37.2872C167.759 30.6455 170.185 24.2507 174.515 19.2284C182.566 10.0399 193.71 9.76897 195.5 9.76897"
          stroke="#FF0000"
          strokeWidth="2"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M64.0248 13.2088C66.2369 15.6691 68.1094 18.4169 69.5922 21.3782C69.5922 21.3782 73.575 29.3499 73.4465 38.1471C73.3947 40.9167 72.9624 43.6658 72.1617 46.3166V46.3166C71.4306 49.4678 70.2782 52.5052 68.7356 55.346C67.014 58.3768 64.8486 61.1308 62.3118 63.5155C60.0377 65.6653 50.4062 74.239 36.6163 73.8348C34.5522 73.7555 32.4988 73.4966 30.4793 73.0608C27.8155 72.4933 18.5737 70.3907 10.9207 62.2256C1.3663 52.0309 1.0708 39.6907 1.0708 37.7172C1.0708 36.3799 1.20356 20.8279 13.4903 10.1989C22.3424 2.53685 32.9461 1.37592 37.0445 1.16954C76.5257 -0.812635 116.272 29.1177 116.272 29.1177C164.336 59.4608 172.901 75.2838 195.5 73.8348C199.5 73.5768 211.393 72.9233 220.767 63.9454C231.778 53.3982 231.902 39.0716 231.902 37.2872C231.757 23.9022 224.262 15.178 222.48 13.2088C211.975 1.59951 197.886 1.19533 195.5 1.16954"
          stroke="#FF0000"
          strokeWidth="2"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M54.175 10.6289C57.5121 12.7925 60.417 15.5632 62.7402 18.7984C66.7265 24.449 68.8256 31.2232 68.7358 38.1471C68.693 41.0408 68.1705 50.4486 61.0272 58.7858C59.8794 60.1273 50.8646 70.2875 36.1882 69.965C24.2697 69.7027 16.5996 62.7028 14.7752 60.9356C5.12229 51.5923 4.92529 39.6563 4.92529 37.7171C4.92529 36.2251 5.12229 23.7087 14.7752 14.4987C17.3448 12.0392 23.8329 6.73336 37.0447 5.46925C43.1345 4.88449 66.6802 3.22479 116.273 33.4174C127.407 40.2067 138.735 47.8989 159.527 59.2157C172.533 66.2931 182.618 71.1819 195.5 69.965C199.937 69.5351 209.389 68.5117 217.342 60.9356C219.299 59.0695 227.765 50.6163 227.62 37.2872C227.466 23.2013 217.838 14.7179 216.057 13.2087C207.714 6.1443 198.395 5.54234 195.5 5.46925"
          stroke="#FF0000"
          strokeWidth="2"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M37.0443 9.76897C43.6037 9.75828 49.9625 12.0384 55.0311 16.2186C56.029 17.0527 63.8961 23.8506 64.8811 35.1373C65.1518 38.3165 64.8619 41.5187 64.0246 44.5967C62.3362 50.6095 58.7245 55.8977 53.7464 59.6457C48.709 63.4946 42.4978 65.4698 36.1719 65.2346C29.8461 64.9994 23.7974 62.5682 19.0574 58.3558C9.74281 50.1261 9.63574 38.719 9.63574 37.2872C9.63574 36.4272 9.91839 24.2246 19.4857 16.2186C25.053 11.5491 31.5369 10.1989 37.0443 9.76897ZM37.0443 9.76897C56.53 8.21678 79.3991 16.7517 116.272 37.2872C131.514 45.7748 141.629 52.1255 159.526 59.2157C171.192 63.8336 182.515 67.325 195.928 65.2354C201.872 64.3066 210.596 62.8189 216.913 55.346C223.23 47.8731 223.337 39.149 223.337 37.2872C223.243 30.6451 220.816 24.2495 216.485 19.2284C208.433 10.0399 197.29 9.76897 195.5 9.76897"
          stroke="#FF0000"
          strokeWidth="2"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </div>
  );
};
