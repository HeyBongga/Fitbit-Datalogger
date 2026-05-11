import document from "document";

import { HeartRateSensor } from "heart-rate";
import { Accelerometer } from "accelerometer";
import { Gyroscope } from "gyroscope";
import { battery } from "power";
import { today } from "user-activity";
import { BodyPresenceSensor } from "body-presence";

const batteryLabel = document.getElementById("batteryLabel");
const stepsLabel = document.getElementById("StepsLabel");
const heartRateLabel = document.getElementById("HeartRateLabel");
const accelerometerLabel = document.getElementById("AccelerometerLabel");
const gyroscopeLabel = document.getElementById("GyroscopeLabel");
const bodyPresenceLabel = document.getElementById("BodyPresenceLabel");


// -------------------------
// Battery
// -------------------------

try {
  batteryLabel.text = `Battery: ${battery.chargeLevel}%`;
} catch (e) {
  batteryLabel.text = `Battery: NOT SUPPORTED`;
}

// -------------------------
// Activity
// -------------------------

try {
  stepsLabel.text = `Steps: ${today.adjusted.steps}`;
} catch (e) {
  stepsLabel.text = `Activity: NOT SUPPORTED`;
}

// -------------------------
// Heart Rate
// -------------------------

try {
  const hrm = new HeartRateSensor({ frequency: 1 });

  hrm.addEventListener("reading", () => {
    heartRateLabel.text =`HR: ${hrm.heartRate}`;
  });

  hrm.start();

} catch (e) {
  heartRateLabel.text = `HeartRateSensor: NOT SUPPORTED`;
}

// -------------------------
// Accelerometer
// -------------------------

try {
  const accel = new Accelerometer({ frequency: 1 });

  accel.addEventListener("reading", () => {
    accelerometerLabel.text =`ACC X:${accel.x.toFixed(1)}`;
  });

  accel.start();

} catch (e) {
  accelerometerLabel.text = `Accelerometer: NOT SUPPORTED`;
}

// -------------------------
// Gyroscope
// -------------------------

try {
  const gyro = new Gyroscope({ frequency: 1 });

  gyro.addEventListener("reading", () => {
    gyroscopeLabel.text =`GYRO X:${gyro.x.toFixed(1)}`;
  });

  gyro.start();

} catch (e) {
  gyroscopeLabel.text = `Gyroscope: NOT SUPPORTED`;
}

// -------------------------
// Body Presence
// -------------------------

try {
  const bodyPresence = new BodyPresenceSensor();
    bodyPresence.addEventListener("reading", () => {
        bodyPresenceLabel.text =`Body Presence: ${bodyPresence.present}`;
    });
    bodyPresence.start();
} catch (e) {
  bodyPresenceLabel.text = `Body Presence Sensor: NOT SUPPORTED`;
}