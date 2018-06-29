import * as firebase from 'firebase'

import { FirebaseConfig } from '../config/keys'

firebase.initializaApp( FirebaseConfig );

const databseRef = firebase.database().ref();
export const todosRef = databaseRef.child("todos");
