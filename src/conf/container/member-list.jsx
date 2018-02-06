import React from 'react';
import { observer, inject } from 'mobx-react';

import MemberVideoLocal from '../component/member-video/local';
import MemberVideoRemotes from '../component/member-video/remotes';

const MemberList = ({ room, user, action }) => (
  <div className="L-MemberList">
    <MemberVideoLocal room={room} user={user} action={action} />
    <MemberVideoRemotes room={room} action={action} />
  </div>
);

export default inject('room', 'user', 'action')(observer(MemberList));
