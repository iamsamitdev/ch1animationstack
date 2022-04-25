import React from 'react'
import Navigation from './src/navigations/Navigation'

const App = () => {
  return <Navigation />
}

export default App

/*
import {StyleSheet, Text, View, SafeAreaView, ScrollView, Platform} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.containter}>
        <Text style={styles.heading1}>หัวเรื่องที่ 1</Text>
        <Text style={{color: '#ff1'}}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur
          inventore debitis laborum quibusdam? Architecto odit, deserunt
          nesciunt laboriosam culpa praesentium ipsam accusantium. Aliquam ex
          sit veritatis asperiores consequatur fugit. Repellendus iure, harum
          ratione alias tempore corrupti consequuntur debitis. Assumenda
          mollitia illum harum, minima ea quae explicabo voluptates iusto et
          provident necessitatibus cumque tenetur reprehenderit, sint doloremque
          blanditiis maxime nam. Et, expedita nihil. Exercitationem, excepturi
          sapiente quaerat architecto fugiat fuga dolore praesentium cumque
          magnam temporibus libero porro dolor dolores repellat magni illo
          dignissimos vitae, labore eum consequatur iusto rem doloribus, placeat
          molestias. Omnis, excepturi! Eaque sapiente aut, dignissimos odit
          possimus minima?
        </Text>

        <Text style={styles.heading1}>หัวเรื่องที่ 2</Text>
        <Text style={{color: '#f80'}}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur
          inventore debitis laborum quibusdam? Architecto odit, deserunt
          nesciunt laboriosam culpa praesentium ipsam accusantium. Aliquam ex
          sit veritatis asperiores consequatur fugit. Repellendus iure, harum
          ratione alias tempore corrupti consequuntur debitis. Assumenda
          mollitia illum harum, minima ea quae explicabo voluptates iusto et
          provident necessitatibus cumque tenetur reprehenderit, sint doloremque
          blanditiis maxime nam. Et, expedita nihil. Exercitationem, excepturi
          sapiente quaerat architecto fugiat fuga dolore praesentium cumque
          magnam temporibus libero porro dolor dolores repellat magni illo
          dignissimos vitae, labore eum consequatur iusto rem doloribus, placeat
          molestias. Omnis, excepturi! Eaque sapiente aut, dignissimos odit
          possimus minima?
        </Text>

        <Text style={styles.heading1}>หัวเรื่องที่ 3</Text>
        <Text style={{color: '#2f2'}}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur
          inventore debitis laborum quibusdam? Architecto odit, deserunt
          nesciunt laboriosam culpa praesentium ipsam accusantium. Aliquam ex
          sit veritatis asperiores consequatur fugit. Repellendus iure, harum
          ratione alias tempore corrupti consequuntur debitis. Assumenda
          mollitia illum harum, minima ea quae explicabo voluptates iusto et
          provident necessitatibus cumque tenetur reprehenderit, sint doloremque
          blanditiis maxime nam. Et, expedita nihil. Exercitationem, excepturi
          sapiente quaerat architecto fugiat fuga dolore praesentium cumque
          magnam temporibus libero porro dolor dolores repellat magni illo
          dignissimos vitae, labore eum consequatur iusto rem doloribus, placeat
          molestias. Omnis, excepturi! Eaque sapiente aut, dignissimos odit
          possimus minima?
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  containter: {
    ...Platform.select({
      ios: {
        backgroundColor: 'green'
      },
      android: {
        backgroundColor: 'teal'
      }
    }),
    padding: 20,
  },
  heading1: {
    fontSize: 24,
    ...Platform.select({
      ios: {
        color: '#fff000',
      },
      android: {
        color: '#ff9142',
      }
    }),
    paddingVertical: 20,
  },
});
*/