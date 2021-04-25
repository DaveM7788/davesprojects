function calcTotalScore(hexDeadlift, powerThrow, tPushUp, sprintDrag, legTuck, twoMile) {
    return hexDeadlift + powerThrow + tPushUp + sprintDrag + legTuck + twoMile;
}

function hexDeadliftScore(weight) {
    if (weight >= 340) {
        return 100;
    } else if (weight >= 330) {
        return 97;
    } else if (weight >= 320) {
        return 94;
    } else if (weight >= 310) {
        return 92;
    } else if (weight >= 300) {
        return 90;
    } else if (weight >= 290) {
        return 88;
    } else if (weight >= 280) {
        return 86;
    } else if (weight >= 270) {
        return 84;
    } else if (weight >= 260) {
        return 82;
    } else if (weight >= 250) {
        return 80;
    } else if (weight >= 240) {
        return 78;
    } else if (weight >= 230) {
        return 76;
    } else if (weight >= 220) {
        return 74;
    } else if (weight >= 210) {
        return 72;
    } else if (weight >= 200) {
        return 70;
    } else if (weight >= 190) {
        return 68;
    } else if (weight >= 180) {
        return 65;
    } else if (weight >= 170) {
        return 64;
    } else if (weight >= 160) {
        return 63;
    } else if (weight >= 150) {
        return 62;
    } else if (weight >= 140) {
        return 60;
    } else if (weight >= 130) {
        return 50;
    } else if (weight >= 120) {
        return 40;
    } else if (weight >= 110) {
        return 30;
    } else if (weight >= 100) {
        return 20;
    } else if (weight >= 90) {
        return 10;
    } else {
        return 0;
    }
}

function powerThrowScore(d) {
    if (d >= 12.5) {
        return 100;
    } else if (d >= 12.4) {
        return 99;
    } else if (d >= 12.2) {
        return 98;
    } else if (d >= 12.1) {
        return 97;
    } else if (d >= 11.9) {
        return 96;
    } else if (d >= 11.8) {
        return 95;
    } else if (d >= 11.6) {
        return 94;
    } else if (d >= 11.5) {
        return 93;
    } else if (d >= 11.3) {
        return 92;
    } else if (d >= 11.2) {
        return 91;
    } else if (d >= 11.0) {
        return 90;
    } else if (d >= 10.9) {
        return 89;
    } else if (d >= 10.7) {
        return 88;
    } else if (d >= 10.6) {
        return 87;
    } else if (d >= 10.4) {
        return 86;
    } else if (d >= 10.3) {
        return 85;
    } else if (d >= 10.1) {
        return 84;
    } else if (d >= 10.0) {
        return 83;
    } else if (d >= 9.8) {
        return 82;
    } else if (d >= 9.7) {
        return 81;
    } else if (d >= 9.5) {
        return 80;
    } else if (d >= 9.4) {
        return 79;
    } else if (d >= 9.2) {
        return 78;
    } else if (d >= 9.1) {
        return 77;
    } else if (d >= 8.9) {
        return 76;
    } else if (d >= 8.8) {
        return 75;
    } else if (d >= 8.6) {
        return 74;
    } else if (d >= 8.5) {
        return 73;
    } else if (d >= 8.3) {
        return 72;
    } else if (d >= 8.2) {
        return 71;
    } else if (d >= 8.0) {
        return 70;
    } else if (d >= 7.8) {
        return 69;
    } else if (d >= 7.5) {
        return 68;
    } else if (d >= 7.1) {
        return 67;
    } else if (d >= 6.8) {
        return 66;
    } else if (d >= 6.5) {
        return 65;
    } else if (d >= 6.2) {
        return 64;
    } else if (d >= 5.8) {
        return 63;
    } else if (d >= 5.4) {
        return 62;
    } else if (d >= 4.9) {
        return 61;
    } else if (d >= 4.5) {
        return 60;
    } else if (d >= 4.4) {
        return 55;
    } else if (d >= 4.3) {
        return 50;
    } else if (d >= 4.2) {
        return 45;
    } else if (d >= 4.1) {
        return 40;
    } else if (d >= 4.0) {
        return 35;
    } else if (d >= 3.9) {
        return 30;
    } else if (d >= 3.8) {
        return 25;
    } else if (d >= 3.7) {
        return 20;
    } else if (d >= 3.6) {
        return 15;
    } else if (d >= 3.5) {
        return 10;
    } else if (d >= 3.4) {
        return 5;
    } else if (d >= 3.3) {
        return 0;
    } else {
        return 0;
    }
}

function tPushUpScore(reps) {
    reps = parseInt(reps, 10);
    if (reps >= 60) {
        return 100;
    } else if (reps <= 59 && reps >= 30) {
        return reps + 40;
    } else if (reps >= 28) {
        return 69;
    } else if (reps >= 26) {
        return 68;
    } else if (reps >= 24) {
        return 67;
    } else if (reps >= 22) {
        return 66;
    } else if (reps >= 20) {
        return 65;
    } else if (reps >= 18) {
        return 64;
    } else if (reps >= 16) {
        return 63;
    } else if (reps >= 14) {
        return 62;
    } else if (reps >= 12) {
        return 61;
    } else if (reps >= 10) {
        return 60;
    } else if (reps >= 9) {
        return 55;
    } else if (reps >= 8) {
        return 50;
    } else if (reps >= 7) {
        return 45;
    } else if (reps >= 6) {
        return 40;
    } else if (reps >= 5) {
        return 35;
    } else if (reps >= 4) {
        return 30;
    } else if (reps >= 3) {
        return 25;
    } else if (reps >= 2) {
        return 20;
    } else if (reps >= 1) {
        return 15;
    } else {
        return 0;
    }
}

function sprintDragScore(mins, secs) {
    mins = parseInt(mins, 10);
    secs = parseInt(secs, 10);
    var t = secs + (mins * 60);

    if (t <= (60 + 33)) {
        return 100;
    } else if (t <= (60 + 36)) {
        return 99;
    } else if (t <= (60 + 39)) {
        return 98;
    } else if (t <= (60 + 41)) {
        return 97;
    } else if (t <= (60 + 43)) {
        return 96;
    } else if (t <= (60 + 45)) {
        return 95;
    } else if (t <= (60 + 46)) {
        return 94;
    } else if (t <= (60 + 47)) {
        return 93;
    } else if (t <= (60 + 48)) {
        return 92;
    } else if (t <= (60 + 49)) {
        return 91;
    } else if (t <= (60 + 50)) {
        return 90;
    } else if (t <= (60 + 51)) {
        return 89;
    } else if (t <= (60 + 52)) {
        return 88;
    } else if (t <= (60 + 53)) {
        return 87;
    } else if (t <= (60 + 54)) {
        return 86;
    } else if (t <= (60 + 55)) {
        return 85;
    } else if (t <= (60 + 56)) {
        return 84;
    } else if (t <= (60 + 57)) {
        return 83;
    } else if (t <= (60 + 58)) {
        return 82;
    } else if (t <= (60 + 59)) {
        return 81;
    } else if (t <= (120 + 0)) {
        return 80;
    } else if (t <= (120 + 1)) {
        return 79;
    } else if (t <= (120 + 2)) {
        return 78;
    } else if (t <= (120 + 3)) {
        return 77;
    } else if (t <= (120 + 4)) {
        return 76;
    } else if (t <= (120 + 5)) {
        return 75;
    } else if (t <= (120 + 6)) {
        return 74;
    } else if (t <= (120 + 7)) {
        return 73;
    } else if (t <= (120 + 8)) {
        return 72;
    } else if (t <= (120 + 9)) {
        return 71;
    } else if (t <= (120 + 10)) {
        return 70;
    } else if (t <= (120 + 14)) {
        return 69;
    } else if (t <= (120 + 18)) {
        return 68;
    } else if (t <= (120 + 22)) {
        return 67;
    } else if (t <= (120 + 26)) {
        return 66;
    } else if (t <= (120 + 30)) {
        return 65;
    } else if (t <= (120 + 35)) {
        return 64;
    } else if (t <= (120 + 40)) {
        return 63;
    } else if (t <= (120 + 45)) {
        return 62;
    } else if (t <= (120 + 50)) {
        return 61;
    } else if (t <= (180 + 0)) {
        return 60;
    } else if (t <= (180 + 1)) {
        return 59;
    } else if (t <= (180 + 2)) {
        return 58;
    } else if (t <= (180 + 3)) {
        return 57;
    } else if (t <= (180 + 4)) {
        return 56;
    } else if (t <= (180 + 5)) {
        return 55;
    } else if (t <= (180 + 6)) {
        return 54;
    } else if (t <= (180 + 7)) {
        return 53;
    } else if (t <= (180 + 8)) {
        return 52;
    } else if (t <= (180 + 9)) {
        return 51;
    } else if (t <= (180 + 10)) {
        return 50;
    } else if (t <= (180 + 11)) {
        return 48;
    } else if (t <= (180 + 12)) {
        return 46;
    } else if (t <= (180 + 13)) {
        return 44;
    } else if (t <= (180 + 14)) {
        return 42;
    } else if (t <= (180 + 15)) {
        return 40;
    } else if (t <= (180 + 16)) {
        return 38;
    } else if (t <= (180 + 17)) {
        return 36;
    } else if (t <= (180 + 18)) {
        return 34;
    } else if (t <= (180 + 19)) {
        return 32;
    } else if (t <= (180 + 20)) {
        return 30;
    } else if (t <= (180 + 21)) {
        return 28;
    } else if (t <= (180 + 22)) {
        return 26;
    } else if (t <= (180 + 23)) {
        return 24;
    } else if (t <= (180 + 24)) {
        return 22;
    } else if (t <= (180 + 25)) {
        return 20;
    } else if (t <= (180 + 26)) {
        return 18;
    } else if (t <= (180 + 27)) {
        return 16;
    } else if (t <= (180 + 28)) {
        return 14;
    } else if (t <= (180 + 29)) {
        return 12;
    } else if (t <= (180 + 30)) {
        return 10;
    } else if (t <= (180 + 31)) {
        return 8;
    } else if (t <= (180 + 32)) {
        return 6;
    } else if (t <= (180 + 33)) {
        return 4;
    } else if (t <= (180 + 34)) {
        return 2;
    } else {
        return 0;
    }
}

function legTuckScore(reps) {
    if (reps >= 20) {
        return 100;
    } else if (reps <= 19 && reps >= 4) {
        return 60 + (2 * reps);
    } else if (reps >= 3) {
        return 65;
    } else if (reps >= 2) {
        return 62;
    } else if (reps >= 1) {
        return 60;
    } else {
        return 0;
    }
}

function twoMileScore(mins, secs) {
    mins = parseInt(mins, 10);
    secs = parseInt(secs, 10);
    var t = secs + (mins * 60);
    
    if (t <= ((13*60) + 30)) {
        return 100;
    } else if (t <= ((13*60) + 39)) {
        return 99;
    } else if (t <= ((13*60) + 48)) {
        return 98;
    } else if (t <= ((13*60) + 57)) {
        return 97;
    } else if (t <= ((14*60) + 6)) {
        return 96;
    } else if (t <= ((14*60) + 15)) {
        return 95;
    } else if (t <= ((14*60) + 24)) {
        return 94;
    } else if (t <= ((14*60) + 33)) {
        return 93;
    } else if (t <= ((14*60) + 42)) {
        return 92;
    } else if (t <= ((14*60) + 51)) {
        return 91;
    } else if (t <= ((15*60) + 0)) {
        return 90;
    } else if (t <= ((15*60) + 9)) {
        return 89;
    } else if (t <= ((15*60) + 18)) {
        return 88;
    } else if (t <= ((15*60) + 27)) {
        return 87;
    } else if (t <= ((15*60) + 36)) {
        return 86;
    } else if (t <= ((15*60) + 45)) {
        return 85;
    } else if (t <= ((15*60) + 54)) {
        return 84;
    } else if (t <= ((16*60) + 3)) {
        return 83;
    } else if (t <= ((16*60) + 12)) {
        return 82;
    } else if (t <= ((16*60) + 21)) {
        return 81;
    } else if (t <= ((16*60) + 30)) {
        return 80;
    } else if (t <= ((16*60) + 39)) {
        return 79;
    } else if (t <= ((16*60) + 48)) {
        return 78;
    } else if (t <= ((16*60) + 57)) {
        return 77;
    } else if (t <= ((17*60) + 6)) {
        return 76;
    } else if (t <= ((17*60) + 15)) {
        return 75;
    } else if (t <= ((17*60) + 24)) {
        return 74;
    } else if (t <= ((17*60) + 33)) {
        return 73;
    } else if (t <= ((17*60) + 42)) {
        return 72;
    } else if (t <= ((17*60) + 51)) {
        return 71;
    } else if (t <= ((18*60) + 0)) {
        return 70;
    } else if (t <= ((18*60) + 12)) {
        return 69;
    } else if (t <= ((18*60) + 24)) {
        return 68;
    } else if (t <= ((18*60) + 36)) {
        return 67;
    } else if (t <= ((18*60) + 48)) {
        return 66;
    } else if (t <= ((19*60) + 0)) {
        return 65;
    } else if (t <= ((19*60) + 24)) {
        return 64;
    } else if (t <= ((19*60) + 48)) {
        return 63;
    } else if (t <= ((20*60) + 12)) {
        return 62;
    } else if (t <= ((20*60) + 36)) {
        return 61;
    } else if (t <= ((21*60) + 0)) {
        return 60;
    } else if (t <= ((21*60) + 1)) {
        return 59;
    } else if (t <= ((21*60) + 3)) {
        return 58;
    } else if (t <= ((21*60) + 5)) {
        return 57;
    } else if (t <= ((21*60) + 7)) {
        return 56;
    } else if (t <= ((21*60) + 9)) {
        return 55;
    } else if (t <= ((21*60) + 10)) {
        return 54;
    } else if (t <= ((21*60) + 12)) {
        return 53;
    } else if (t <= ((21*60) + 14)) {
        return 52;
    } else if (t <= ((21*60) + 16)) {
        return 51;
    } else if (t <= ((21*60) + 18)) {
        return 50;
    } else if (t <= ((21*60) + 19)) {
        return 49;
    } else if (t <= ((21*60) + 21)) {
        return 48;
    } else if (t <= ((21*60) + 23)) {
        return 47;
    } else if (t <= ((21*60) + 25)) {
        return 46;
    } else if (t <= ((21*60) + 27)) {
        return 45;
    } else if (t <= ((21*60) + 28)) {
        return 44;
    } else if (t <= ((21*60) + 30)) {
        return 43;
    } else if (t <= ((21*60) + 32)) {
        return 42;
    } else if (t <= ((21*60) + 34)) {
        return 41;
    } else if (t <= ((21*60) + 36)) {
        return 40;
    } else if (t <= ((21*60) + 37)) {
        return 39;
    } else if (t <= ((21*60) + 39)) {
        return 38;
    } else if (t <= ((21*60) + 41)) {
        return 37;
    } else if (t <= ((21*60) + 43)) {
        return 36;
    } else if (t <= ((21*60) + 45)) {
        return 35;
    } else if (t <= ((21*60) + 46)) {
        return 34;
    } else if (t <= ((21*60) + 48)) {
        return 33;
    } else if (t <= ((21*60) + 50)) {
        return 32;
    } else if (t <= ((21*60) + 52)) {
        return 31;
    } else if (t <= ((21*60) + 54)) {
        return 30;
    } else if (t <= ((21*60) + 55)) {
        return 29;
    } else if (t <= ((21*60) + 57)) {
        return 28;
    } else if (t <= ((21*60) + 59)) {
        return 27;
    } else if (t <= ((22*60) + 1)) {
        return 26;
    } else if (t <= ((22*60) + 3)) {
        return 25;
    } else if (t <= ((22*60) + 4)) {
        return 24;
    } else if (t <= ((22*60) + 6)) {
        return 23;
    } else if (t <= ((22*60) + 8)) {
        return 22;
    } else if (t <= ((22*60) + 10)) {
        return 21;
    } else if (t <= ((22*60) + 12)) {
        return 20;
    } else if (t <= ((22*60) + 13)) {
        return 19;
    } else if (t <= ((22*60) + 15)) {
        return 18;
    } else if (t <= ((22*60) + 17)) {
        return 17;
    } else if (t <= ((22*60) + 19)) {
        return 16;
    } else if (t <= ((22*60) + 21)) {
        return 15;
    } else if (t <= ((22*60) + 22)) {
        return 14;
    } else if (t <= ((22*60) + 24)) {
        return 13;
    } else if (t <= ((22*60) + 26)) {
        return 12;
    } else if (t <= ((22*60) + 28)) {
        return 11;
    } else if (t <= ((22*60) + 30)) {
        return 10;
    } else if (t <= ((22*60) + 31)) {
        return 9;
    } else if (t <= ((22*60) + 33)) {
        return 8;
    } else if (t <= ((22*60) + 35)) {
        return 7;
    } else if (t <= ((22*60) + 37)) {
        return 6;
    } else if (t <= ((22*60) + 39)) {
        return 5;
    } else if (t <= ((22*60) + 40)) {
        return 4;
    } else if (t <= ((22*60) + 42)) {
        return 3;
    } else if (t <= ((22*60) + 44)) {
        return 2;
    } else if (t <= ((22*60) + 46)) {
        return 1;
    } else {
        return 0;
    }
}