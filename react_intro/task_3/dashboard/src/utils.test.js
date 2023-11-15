import React from 'react';
import {getFullYear, getFooterCopy, getLatestNotification} from './utils';

it('get full year', () => {
  expect(getFullYear()).toEqual(2023);
});

it('get footer copy', () => {
  expect(getFooterCopy()).toEqual('Holberton School main dashboard');
});

it('get last notification', () => {
    expect(getLatestNotification()).toEqual('<strong>Urgent requirement</strong> - complete by EOD');
});