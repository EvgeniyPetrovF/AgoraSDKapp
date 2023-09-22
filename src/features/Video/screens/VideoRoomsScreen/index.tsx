import React, {FC, useMemo, useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import AgoraUIKit, {ConnectionData} from 'agora-rn-uikit';
import {CallbacksInterface} from 'agora-rn-uikit/src/Contexts/PropsContext';
import CustomButton from '../../../../components/CustomButton';
import {IRoom} from '../../../../models/types';
import RoomsList from '../../components/RoomsList';

const appId = '4779d828f93e44c5834c0e6effcb83af';

const rooms: IRoom[] = [
  {
    id: 0,
    appId,
    channel: 'lobby',
    title: 'Lobby Room',
    rtcToken:
      '007eJxTYHhq97bv/xYF3Q2fwr6Hdn1lLe4qS1/8TuLxmr7lfiHW9RoKDCbm5pYpFkYWaZbGqSYmyaYWxibJBqlmqWlpyUkWxolpDbVmKQ2BjAxhRxgYGRkgEMRnZcjJT0qqZGAAAPdSIPY=',
  },
  {
    id: 1,
    appId,
    channel: 'gamingRoom',
    title: 'Gaming Room',
    rtcToken:
      '007eJxTYCj4nbRFQ2X+zjUvHs7hkvVdLvB0ZZgbzz3DL5aSLhfvnw5XYDAxN7dMsTCySLM0TjUxSTa1MDZJNkg1S01LS06yME5M+1BmmtIQyMig1naOgREKQXwuhvTE3My89KD8/FwGBgBDyCKL',
  },
  {
    id: 2,
    appId,
    channel: 'discussingRoom',
    title: 'Discussing Room',
    rtcToken:
      '007eJxTYKjfaO0w/cHd85f2OhzymLwkcbY6w5KiKbOOi53PUH95bVO6AoOJubllioWRRZqlcaqJSbKphbFJskGqWWpaWnKShXFimka5aUpDICPDKo+nTIwMEAji8zGkZBYnlxYXZ+alB+Xn5zIwAAA+AyVG',
  },
  {
    id: 3,
    appId,
    channel: 'interviewRoom',
    title: 'Interview Room',
    rtcToken:
      '007eJxTYND/uVN9mUn+hU/iapdYA8p+fvstdd5GiLfU6ktu+u8FC70UGEzMzS1TLIws0iyNU01Mkk0tjE2SDVLNUtPSkpMsjBPT5reZpTQEMjKwfv/JwsgAgSA+L0NmXklqUVlmanlQfn4uAwMAulskTQ==',
  },
  {
    id: 4,
    appId,
    channel: 'floodRoom',
    title: 'Flood Room',
    rtcToken:
      '007eJxTYLiz5Oi15SdX+paeUPzEp33BJl70v252pcCTV8UVTtsMXNgVGEzMzS1TLIws0iyNU01Mkk0tjE2SDVLNUtPSkpMsjBPTLlaZpTQEMjLYP0lnYWSAQBCfkyEtJz8/JSg/P5eBAQAtPyH5',
  },
];

const VideoRoomsScreen: FC = () => {
  const [selectedRoom, setSelectedRoom] = useState<IRoom | null>(null);

  const rtcCallbacks: Partial<CallbacksInterface> = useMemo(
    () => ({
      EndCall: () => setSelectedRoom(null),
    }),
    [],
  );

  return (
    <SafeAreaView style={styles.container}>
      {selectedRoom ? (
        <>
          <CustomButton label="Go back" onPress={rtcCallbacks.EndCall} />
          <AgoraUIKit
            connectionData={{
              appId,
              channel: selectedRoom.channel,
              rtcToken: selectedRoom.rtcToken,
            }}
            rtcCallbacks={rtcCallbacks}
          />
        </>
      ) : (
        <RoomsList rooms={rooms} setRoom={setSelectedRoom} />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default VideoRoomsScreen;
