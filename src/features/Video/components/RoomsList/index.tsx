import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import CustomButton from '../../../../components/CustomButton';
import TextWrapper from '../../../../components/TextWrapper';
import {colors, dimensions, text} from '../../../../constants';
import {IRoom} from '../../../../models/types';

type Props = {
  rooms: IRoom[];
  setRoom: (room: IRoom) => void;
};

const RoomsList: FC<Props> = ({rooms, setRoom}) => {
  return (
    <View style={styles.buttonList}>
      <TextWrapper style={styles.titleStyle}>Video rooms</TextWrapper>
      {rooms.map(room => {
        return (
          <CustomButton
            key={room.id}
            label={room.title}
            onPress={() => setRoom(room)}
          />
        );
      })}
    </View>
  );
};

export default RoomsList;

const styles = StyleSheet.create({
  buttonList: {
    gap: dimensions.offset.normal,
    padding: dimensions.offset.normal,
  },
  titleStyle: {
    color: colors.white,
    backgroundColor: colors.blue,
    fontWeight: text.weight.bold,
    fontSize: text.size.large,
    width: '100%',
    padding: dimensions.offset.normal,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
