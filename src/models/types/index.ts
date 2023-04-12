import {ConnectionData} from 'agora-rn-uikit';

export interface IRoom extends ConnectionData {
  id: number;
  title: string;
}
