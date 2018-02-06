import React from 'react';
import { observer, inject } from 'mobx-react';

import Popup from '../component/popup';
import SettingVideo from '../component/setting-video';
import DeviceSelector from '../component/device-selector';
import NameEdit from '../component/name-edit';

const Setting = ({ room, ui, user, action }) =>
  ui.isSettingOpen ? (
    <Popup>
      <div className="L-Setting">
        <div className="L-Setting_Video">
          <SettingVideo room={room} />
        </div>

        <DeviceSelector user={user} action={action} />

        <NameEdit user={user} action={action} />

        <div className="L-Setting_Finish">
          <button
            onClick={() => {
              ui.isRoomJoin
                ? action.$update('ui.isSettingOpen', false)
                : action.onClickJoinRoom();
            }}
          >
            設定完了
          </button>
        </div>
      </div>
    </Popup>
  ) : null;

export default inject('room', 'ui', 'user', 'action')(observer(Setting));
