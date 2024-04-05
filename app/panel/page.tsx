"use client";
import { useEffect, useState } from 'react';
import { Logo } from '../Components/global';
import { PanelHeader, PanelBody } from '../Components/panel';

export default function Home() {
  const [_window, setWindowObject] = useState<any>(null);
  const [twitch, setTwitch] = useState<any>(null);

  useEffect(() => {
    setWindowObject(window);
  }, [])
  useEffect(() => {
    setTwitch(_window?.Twitch.ext);
  }, [_window])
  useEffect(() => {
    if (twitch) {
      twitch.onContext((context: any) => {
        console.log('context: ', context);
      });
      twitch.onAuthorized((auth: { token: string; userId: string; }) => {
        console.log('auth: ', auth);
      });
    }
  }, [twitch])
  
  return (
    <>
      <PanelHeader />
      <Logo />
      <PanelBody />
    </>
  );
}
