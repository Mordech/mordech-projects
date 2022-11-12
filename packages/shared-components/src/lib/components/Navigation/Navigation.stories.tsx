import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from '../Button';
import {
  Container,
  PlaceholderContent,
} from '../Footer/story/story/story.styles';

import { Navigation } from './Navigation';

export default {
  component: Navigation,
  title: 'Organisms/Navigation',
} as ComponentMeta<typeof Navigation>;

const Template: ComponentStory<typeof Navigation> = (args) => (
  <Container>
    <Navigation {...args}>
      <Button startIcon="download" variant="outline" asElement="a" href="#">
        resume
      </Button>
    </Navigation>
    <PlaceholderContent />
    <PlaceholderContent />
  </Container>
);
const Logo = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 50 50"
    xmlns="http://www.w3.org/2000/svg"
  >
    <style>
      path {'{'}
      fill: #0a0b0d;
      {'}'}
    </style>
    <path d="M46.4283 37.9244C45.5101 36.9897 44.5753 36.07 43.6406 35.1503C40.7035 32.2538 37.7476 29.3747 34.7927 26.4965L34.3401 26.0557C32.3182 24.0862 30.2941 22.1186 28.2698 20.1508L28.2692 20.1503C23.2756 15.2962 18.2811 10.4412 13.3169 5.55363L12.9879 5.22989L12.9877 5.22963C11.9186 4.17762 10.848 3.12414 9.79444 2.05479C9.74183 2.00166 9.64283 1.91701 9.52239 1.81404C9.13735 1.48482 8.53323 0.968274 8.52537 0.695557C8.53205 0.921121 8.11703 1.7463 7.93773 2.10279C7.89549 2.18677 7.86632 2.24476 7.85885 2.26275C7.33884 3.53193 6.83121 4.80541 6.32564 6.07889C5.82008 7.35236 5.31451 8.62798 4.82339 9.91003C4.77467 10.0366 4.70205 10.1883 4.6242 10.351C4.43824 10.7396 4.22243 11.1905 4.23116 11.5094C4.23746 11.7367 4.72057 12.1525 5.02993 12.4187C5.12606 12.5015 5.20543 12.5698 5.24848 12.6135C6.06661 13.45 6.89968 14.2727 7.73131 15.0941L7.73156 15.0943L8.01774 15.377C10.84 18.1657 13.6814 20.9346 16.5227 23.7035L17.2974 24.4585C19.4197 26.526 21.5441 28.5911 23.6685 30.6562L23.6695 30.6572C28.5677 35.4188 33.4661 40.1805 38.3393 44.9713L38.5432 45.1717C39.6598 46.2691 40.7774 47.3674 41.8803 48.4809C41.9537 48.555 42.0719 48.6549 42.2077 48.7698C42.5908 49.0939 43.1147 49.537 43.1741 49.8551C43.1411 49.6751 43.8572 48.2429 43.8406 48.288C44.3607 47.0188 44.8683 45.7453 45.3739 44.4718C45.8794 43.1983 46.385 41.9227 46.8761 40.6407C46.9149 40.5397 46.9838 40.3982 47.0614 40.2387C47.2607 39.8294 47.5173 39.3021 47.4683 39.0413C47.4198 38.7812 47.0051 38.4271 46.6972 38.1641C46.5864 38.0695 46.4895 37.9867 46.4283 37.9244Z" />
    <path d="M32.6481 14.0263C33.8597 15.1916 35.091 16.3366 36.3223 17.4815L36.3257 17.4847C36.5884 17.7289 36.8511 17.9732 37.1135 18.2176C37.2903 18.3824 37.4672 18.5471 37.6441 18.7118L37.6443 18.712C38.9704 19.9468 40.2975 21.1824 41.5955 22.4497C41.6939 22.5455 41.8494 22.6754 42.0307 22.8268C42.6368 23.3332 43.5317 24.0807 43.5476 24.6022C43.5409 24.3756 43.9662 23.5304 44.1417 23.1815C44.1805 23.1045 44.2071 23.0516 44.2141 23.035C44.7342 21.7658 45.2418 20.4923 45.7474 19.2188C46.2529 17.9454 46.7585 16.6697 47.2496 15.3877C47.2983 15.2611 47.3712 15.1091 47.4493 14.9462C47.6357 14.5572 47.852 14.1057 47.8418 13.7883C47.826 13.2706 46.9349 12.5246 46.3281 12.0165C46.1459 11.864 45.9893 11.7329 45.8897 11.6359C44.5917 10.3686 43.2647 9.13297 41.9385 7.89816C41.7615 7.73339 41.5846 7.56863 41.4077 7.40381C41.103 7.11965 40.798 6.83575 40.4929 6.55182C39.3042 5.44547 38.1147 4.33849 36.9423 3.21249C36.8732 3.14627 36.7433 3.03881 36.5824 2.90577C35.9935 2.41861 34.9899 1.58852 35.0418 1.18437C34.8986 2.30538 34.247 3.62381 33.6427 4.84643C33.3409 5.45696 33.051 6.0436 32.842 6.56984C32.6378 7.08442 32.3814 7.62772 32.1179 8.1861C31.5296 9.43294 30.9057 10.755 30.7475 12.0003C30.6976 12.3973 31.6878 13.2194 32.278 13.7094C32.4432 13.8466 32.5772 13.9578 32.6481 14.0263Z" />
    <path d="M14.3012 30.5493C16.8497 33.032 19.4064 35.506 21.9672 37.9758C22.2045 38.0959 22.3675 38.2395 22.4233 38.4153C22.49 38.6343 22.2045 39.225 22.0002 39.6479C21.9265 39.8004 21.8633 39.9311 21.831 40.0147C21.3399 41.2967 20.8343 42.5723 20.3288 43.8458C20.2862 43.9516 20.1418 44.2761 19.9458 44.7164C19.8757 44.8739 19.799 45.0462 19.718 45.2286C19.1897 46.5621 18.6594 47.8978 18.129 49.2313L17.6709 48.7875C16.6017 48.2535 14.0319 48.2598 13.0803 48.2622C12.9851 48.2624 12.9061 48.2626 12.8464 48.2622C10.1948 48.2429 7.08503 48.5838 5.17007 50.6956C5.35919 50.486 5.49124 50.0146 5.60627 49.6039C5.66068 49.4097 5.71128 49.2291 5.7623 49.0962C6.25342 47.8142 6.75899 46.5385 7.26455 45.2651C7.44181 44.8192 7.61508 44.2611 7.79963 43.6666C8.14573 42.5516 8.53152 41.3089 9.05776 40.4391C7.51837 38.9384 5.98103 37.4355 4.45815 35.9177C4.33347 35.7931 4.11806 35.6131 3.86508 35.4017C3.13415 34.7909 2.08951 33.918 2.01286 33.3621C1.97454 33.0834 2.21839 32.5816 2.41424 32.1785C2.49258 32.0172 2.56324 31.8718 2.6051 31.7628C3.09622 30.4807 3.60178 29.2051 4.10735 27.9316C4.61291 26.6582 5.12054 25.3847 5.64055 24.1155C5.63849 24.1241 6.33596 22.7541 6.30707 22.5483C6.38839 23.135 7.48627 24.0488 8.25607 24.6895C8.52155 24.9104 8.74801 25.0989 8.8803 25.2303C10.6756 27.0162 12.4874 28.7828 14.3012 30.5493Z" />
  </svg>
);

export const Primary = Template.bind({});
Primary.args = {
  logo: <Logo />,
};
