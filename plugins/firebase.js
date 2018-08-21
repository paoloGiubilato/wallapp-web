/*
    WallApp Web
    Copyright (C) 2018  Simone Sestito

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published
    by the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import firebase from "firebase/app";
import "firebase/storage";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyC1BbwsuqsmoFBpg6P1YPmHrg8s-10JKxc",
    authDomain: "wallapp-b7805.firebaseapp.com",
    databaseURL: "https://wallapp-b7805.firebaseio.com",
    projectId: "wallapp-b7805",
    storageBucket: "wallapp-b7805.appspot.com",
    messagingSenderId: "637150678980"
  });
}

export default firebase;
