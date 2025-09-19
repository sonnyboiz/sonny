class MoodMixerCosmic {
  constructor() {
    this.moods = {
      stressed: {
        gradient:
          "linear-gradient(135deg, #7f1d1d 0%, #991b1b 50%, #dc2626 100%)",
        accent: "#ef4444",
        accentLight: "#f87171",
        accentRgb: "239, 68, 68",
        accentLightRgb: "248, 113, 113",
        starColor: "#fee2e2",
        tracks: [
          {
            title: "Rainy Days Therapy",
            subtitle: "Acoustic | 3:42",
            duration: "3:42",
            icon: "fas fa-cloud-rain",
          },
          {
            title: "Deep Breathing Space",
            subtitle: "Ambient | 4:15",
            duration: "4:15",
            icon: "fas fa-wind",
          },
          {
            title: "Comfort Zone",
            subtitle: "Lo-fi | 2:58",
            duration: "2:58",
            icon: "fas fa-home",
          },
          {
            title: "Midnight Reflection",
            subtitle: "Piano | 3:30",
            duration: "3:30",
            icon: "fas fa-moon",
          },
          {
            title: "Soft Landing",
            subtitle: "Chillhop | 4:02",
            duration: "4:02",
            icon: "fas fa-feather",
          },
        ],
      },
      hyped: {
        gradient:
          "linear-gradient(135deg, #c2410c 0%, #ea580c 50%, #f97316 100%)",
        accent: "#f97316",
        accentLight: "#fb923c",
        accentRgb: "249, 115, 22",
        accentLightRgb: "251, 146, 60",
        starColor: "#fed7aa",
        tracks: [
          {
            title: "Energy Surge",
            subtitle: "EDM | 3:15",
            duration: "3:15",
            icon: "fas fa-bolt",
          },
          {
            title: "Peak Performance",
            subtitle: "Hip Hop | 2:48",
            duration: "2:48",
            icon: "fas fa-dumbbell",
          },
          {
            title: "Adrenaline Rush",
            subtitle: "Rock | 3:33",
            duration: "3:33",
            icon: "fas fa-fire",
          },
          {
            title: "Victory Lap",
            subtitle: "Pop | 3:08",
            duration: "3:08",
            icon: "fas fa-trophy",
          },
          {
            title: "Power Hour",
            subtitle: "Dance | 4:01",
            duration: "4:01",
            icon: "fas fa-star",
          },
        ],
      },
      chill: {
        gradient:
          "linear-gradient(135deg, #065f46 0%, #047857 50%, #10b981 100%)",
        accent: "#10b981",
        accentLight: "#34d399",
        accentRgb: "16, 185, 129",
        accentLightRgb: "52, 211, 153",
        starColor: "#d1fae5",
        tracks: [
          {
            title: "Ocean Whispers",
            subtitle: "Jazz | 4:20",
            duration: "4:20",
            icon: "fas fa-water",
          },
          {
            title: "Sunday Morning",
            subtitle: "Acoustic | 3:55",
            duration: "3:55",
            icon: "fas fa-coffee",
          },
          {
            title: "Forest Walk",
            subtitle: "Ambient | 5:12",
            duration: "5:12",
            icon: "fas fa-tree",
          },
          {
            title: "Golden Hour",
            subtitle: "Lo-fi | 3:28",
            duration: "3:28",
            icon: "fas fa-sun",
          },
          {
            title: "Evening Calm",
            subtitle: "Instrumental | 4:35",
            duration: "4:35",
            icon: "fas fa-couch",
          },
        ],
      },
      sad: {
        gradient:
          "linear-gradient(135deg, #581c87 0%, #6b21a8 50%, #8b5cf6 100%)",
        accent: "#8b5cf6",
        accentLight: "#a78bfa",
        accentRgb: "139, 92, 246",
        accentLightRgb: "167, 139, 250",
        starColor: "#ede9fe",
        tracks: [
          {
            title: "Fading Echoes",
            subtitle: "Piano | 4:08",
            duration: "4:08",
            icon: "fas fa-music",
          },
          {
            title: "Quiet Rain",
            subtitle: "Acoustic | 3:45",
            duration: "3:45",
            icon: "fas fa-cloud-rain",
          },
          {
            title: "Memory Lane",
            subtitle: "Indie | 3:22",
            duration: "3:22",
            icon: "fas fa-road",
          },
          {
            title: "Soft Goodbye",
            subtitle: "Folk | 4:01",
            duration: "4:01",
            icon: "fas fa-leaf",
          },
          {
            title: "Healing Time",
            subtitle: "Ambient | 5:30",
            duration: "5:30",
            icon: "fas fa-heart",
          },
        ],
      },
      excited: {
        gradient:
          "linear-gradient(135deg, #be185d 0%, #c026d3 50%, #ec4899 100%)",
        accent: "#ec4899",
        accentLight: "#f472b6",
        accentRgb: "236, 72, 153",
        accentLightRgb: "244, 114, 182",
        starColor: "#fce7f3",
        tracks: [
          {
            title: "New Horizons",
            subtitle: "Pop | 3:12",
            duration: "3:12",
            icon: "fas fa-rocket",
          },
          {
            title: "Spark of Joy",
            subtitle: "Dance | 3:25",
            duration: "3:25",
            icon: "fas fa-sparkles",
          },
          {
            title: "Big Moments",
            subtitle: "Indie Pop | 3:40",
            duration: "3:40",
            icon: "fas fa-star",
          },
          {
            title: "Future Bright",
            subtitle: "Electronic | 3:55",
            duration: "3:55",
            icon: "fas fa-sun",
          },
          {
            title: "Celebrate Now",
            subtitle: "Upbeat | 2:58",
            duration: "2:58",
            icon: "fas fa-gift",
          },
        ],
      },
      focused: {
        gradient:
          "linear-gradient(135deg, #0e7490 0%, #0891b2 50%, #06b6d4 100%)",
        accent: "#06b6d4",
        accentLight: "#22d3ee",
        accentRgb: "6, 182, 212",
        accentLightRgb: "34, 211, 238",
        starColor: "#cffafe",
        tracks: [
          {
            title: "Deep Focus",
            subtitle: "Instrumental | 3:50",
            duration: "3:50",
            icon: "fas fa-brain",
          },
          {
            title: "Flow State",
            subtitle: "Ambient | 4:15",
            duration: "4:15",
            icon: "fas fa-eye",
          },
          {
            title: "Productivity Pulse",
            subtitle: "Lo-fi | 3:30",
            duration: "3:30",
            icon: "fas fa-chart-line",
          },
          {
            title: "Clarity Zone",
            subtitle: "Classical | 4:45",
            duration: "4:45",
            icon: "fas fa-book",
          },
          {
            title: "Zen Work",
            subtitle: "Chillhop | 3:20",
            duration: "3:20",
            icon: "fas fa-lightbulb",
          },
        ],
      },
    };

    this.audioContext = null;
    this.currentOscillator = null;
    this.savedMixes = JSON.parse(localStorage.getItem("moodMixesCosmic")) || [];
    this.currentMix = null;
    this.currentTrackIndex = 0;
    this.isPlaying = false;
    this.progressInterval = null;
    this.currentDate = new Date("2025-09-19"); // For testing
    this.init();
  }

  init() {
    this.createStarfield();
    this.createShootingStars();
    this.bindEvents();
    this.updateSliderFill();
    this.showMoodOfDay();
    this.bindModalCloses();
  }

  createStarfield() {
    const starContainer = document.createElement("div");
    starContainer.className = "stars";
    document.body.appendChild(starContainer);

    for (let i = 0; i < 100; i++) {
      const star = document.createElement("div");
      const size = Math.random();
      const sizes = ["small", "medium", "large"];
      const sizeClass = sizes[Math.floor(size * sizes.length)];

      star.className = `star ${sizeClass}`;
      star.style.left = Math.random() * 100 + "%";
      star.style.top = Math.random() * 100 + "%";
      star.style.animationDelay = Math.random() * 3 + "s";
      star.style.animationDuration = Math.random() * 2 + 2 + "s";
      starContainer.appendChild(star);
    }
  }

  createShootingStars() {
    setInterval(() => {
      const shootingStar = document.createElement("div");
      shootingStar.className = "shooting-star";
      shootingStar.style.top = Math.random() * 30 + "%";
      shootingStar.style.animationDelay = "0s";
      shootingStar.style.animationDuration = Math.random() * 2 + 3 + "s";

      document.body.appendChild(shootingStar);

      setTimeout(() => {
        shootingStar.remove();
      }, 5000);
    }, 3000);
  }

  bindEvents() {
    const mixBtn = document.getElementById("mixBtn");
    const playSoundBtn = document.getElementById("playSound");
    const saveMixBtn = document.getElementById("saveMix");
    const newMixBtn = document.getElementById("newMix");
    const shuffleBtn = document.getElementById("shuffleBtn");
    const prevBtn = document.getElementById("prevBtn");
    const playPauseBtn = document.getElementById("playPauseBtn");
    const nextBtn = document.getElementById("nextBtn");
    const logMoodBtn = document.getElementById("logMoodBtn");
    const viewRecapBtn = document.getElementById("viewRecapBtn");
    const viewHistoryBtn = document.getElementById("viewHistoryBtn");
    const intensitySlider = document.getElementById("intensity");

    // Playlist items click events
    document.addEventListener("click", (e) => {
      if (e.target.closest(".playlist-item")) {
        const index = Array.from(
          document.querySelectorAll(".playlist-item")
        ).indexOf(e.target.closest(".playlist-item"));
        if (this.currentMix) {
          this.playTrack(index);
        }
      }
    });

    if (mixBtn) mixBtn.addEventListener("click", () => this.generateMix());
    if (playSoundBtn)
      playSoundBtn.addEventListener("click", () => this.toggleSound());
    if (saveMixBtn) saveMixBtn.addEventListener("click", () => this.saveMix());
    if (newMixBtn) newMixBtn.addEventListener("click", () => this.reset());
    if (shuffleBtn)
      shuffleBtn.addEventListener("click", () => this.startShuffleMode());
    if (prevBtn)
      prevBtn.addEventListener("click", () => this.playPreviousTrack());
    if (playPauseBtn)
      playPauseBtn.addEventListener("click", () => this.togglePlayPause());
    if (nextBtn) nextBtn.addEventListener("click", () => this.playNextTrack());
    if (logMoodBtn)
      logMoodBtn.addEventListener("click", () => this.logTodaysMood());
    if (viewRecapBtn)
      viewRecapBtn.addEventListener("click", () => this.showWeeklyRecap());
    if (viewHistoryBtn)
      viewHistoryBtn.addEventListener("click", () => this.showMoodHistory());
    if (intensitySlider)
      intensitySlider.addEventListener("input", (e) => {
        document.getElementById("intensityValue").textContent = e.target.value;
        this.updateSliderFill();
      });
  }

  bindModalCloses() {
    const closes = document.querySelectorAll(".close-modal");
    closes.forEach((close) => {
      close.addEventListener("click", (e) => {
        e.target.closest(".modal").style.display = "none";
      });
    });

    // Click outside to close
    document.addEventListener("click", (e) => {
      if (e.target.classList.contains("modal")) {
        e.target.style.display = "none";
      }
    });
  }

  updateSliderFill() {
    const value = document.getElementById("intensity").value;
    document.getElementById("sliderFill").style.width = value + "%";
  }

  generateMix() {
    const selectedMood = document.querySelector('input[name="mood"]:checked');
    const intensity = parseInt(document.getElementById("intensity").value);

    if (!selectedMood) {
      this.showCosmicNotification("Please select a mood first", "warning");
      return;
    }

    const mood = selectedMood.value;
    const moodData = this.moods[mood];
    const mixIntensity = Math.min(4, Math.floor(intensity / 25));

    // FULL MOOD IMMERSION
    document.body.className = mood;
    document.body.style.background = moodData.gradient;

    // Update star colors
    const stars = document.querySelectorAll(".star");
    stars.forEach((star) => {
      star.style.background = moodData.starColor;
    });

    // Generate mix title
    const intensityTitles = [
      "Gentle",
      "Balanced",
      "Strong",
      "Intense",
      "Maximum",
    ];
    const mixTitle = `${intensityTitles[mixIntensity]} ${
      mood.charAt(0).toUpperCase() + mood.slice(1)
    } Session`;

    // Create galaxy stars
    this.createGalaxyStars(moodData);

    // Create playlist
    const playlist = this.createProfessionalPlaylist(
      moodData,
      mixIntensity,
      mood
    );

    // Show result
    const moodSelector = document.getElementById("moodSelector");
    const mixResult = document.getElementById("mixResult");

    moodSelector.style.transition = "opacity 0.4s ease";
    moodSelector.style.opacity = "0";

    setTimeout(() => {
      moodSelector.style.display = "none";

      if (!mixResult.querySelector(".galaxy-stars")) {
        const galaxyContainer = document.createElement("div");
        galaxyContainer.className = "galaxy-stars";
        mixResult.insertBefore(galaxyContainer, mixResult.firstChild);
      }

      mixResult.style.display = "block";
      mixResult.style.opacity = "0";

      requestAnimationFrame(() => {
        mixResult.style.transition = "opacity 0.8s ease";
        mixResult.style.opacity = "1";
      });

      document.getElementById("mixTitle").textContent = mixTitle;
      document.getElementById("playlist").innerHTML = playlist;

      // Show motivation for sad mood
      if (mood === "sad") {
        document.getElementById("motivationSection").style.display = "block";
      } else {
        document.getElementById("motivationSection").style.display = "none";
      }

      this.currentMix = {
        mood,
        intensity,
        title: mixTitle,
        tracks: playlist,
        timestamp: new Date().toISOString(),
      };
    }, 400);

    setTimeout(() => {
      this.showCosmicNotification(
        `🌌 "${mixTitle}" beamed into existence!`,
        "success"
      );
    }, 500);
  }

  createGalaxyStars(moodData) {
    const galaxyContainer =
      document.querySelector(".galaxy-stars") || document.createElement("div");
    if (!document.querySelector(".galaxy-stars")) {
      galaxyContainer.className = "galaxy-stars";
    }

    galaxyContainer.innerHTML = "";

    for (let i = 0; i < 30; i++) {
      const star = document.createElement("div");
      const size = Math.random();
      const sizes = ["distant", "medium", "bright"];
      const sizeClass = sizes[Math.floor(size * sizes.length)];

      star.className = `galaxy-star ${sizeClass}`;
      star.style.left = Math.random() * 100 + "%";
      star.style.top = Math.random() * 100 + "%";
      star.style.background = moodData.starColor;
      star.style.animationDelay = Math.random() * 4 + "s";
      star.style.animationDuration = Math.random() * 2 + 3 + "s";

      galaxyContainer.appendChild(star);
    }

    if (!document.querySelector(".galaxy-stars")) {
      document
        .getElementById("mixResult")
        .insertBefore(
          galaxyContainer,
          document.getElementById("mixResult").firstChild
        );
    }
  }

  createProfessionalPlaylist(moodData, intensity, mood) {
    const tracksToShow = moodData.tracks.slice(0, 3 + intensity);
    const playlistItems = tracksToShow
      .map((track, index) => {
        const delay = index * 0.1;
        return `
                <div class="playlist-item ${mood}" style="animation-delay: ${delay}s">
                    <div class="track-icon">
                        <i class="${track.icon}"></i>
                    </div>
                    <div class="track-info">
                        <div class="track-title">${track.title}</div>
                        <div class="track-subtitle">${track.subtitle}</div>
                    </div>
                    <div class="duration">${track.duration}</div>
                </div>
            `;
      })
      .join("");

    return playlistItems;
  }

  startShuffleMode() {
    if (!this.currentMix) {
      this.showCosmicNotification("Generate a mix first!", "warning");
      return;
    }

    document.getElementById("playerControls").style.display = "block";
    this.currentTrackIndex = Math.floor(
      Math.random() * this.currentMix.tracks.length
    );
    this.playTrack(this.currentTrackIndex);
    this.showCosmicNotification("🎧 Shuffle mode activated!", "success");
  }

  playTrack(index) {
    this.stopSound();
    this.currentTrackIndex = index;

    // Play sound
    this.playMoodSound();

    // Waveform
    const waveform = document.getElementById("waveform");
    waveform.innerHTML = "";
    for (let i = 0; i < 5; i++) {
      const bar = document.createElement("div");
      bar.className = "wave-bar";
      waveform.appendChild(bar);
    }

    // Progress bar
    const progressFill = document.getElementById("progressFill");
    progressFill.style.width = "0%";

    clearInterval(this.progressInterval);
    this.progressInterval = setInterval(() => {
      let width = parseFloat(progressFill.style.width) || 0;
      width += 1.5;
      progressFill.style.width = width + "%";
      if (width >= 100) {
        clearInterval(this.progressInterval);
        this.playNextTrack();
      }
    }, 800);

    this.isPlaying = true;
    document.getElementById("playPauseBtn").innerHTML =
      '<i class="fas fa-pause"></i> Pause';

    // Shooting star trail
    this.createShootingStarTrail();
  }

  togglePlayPause() {
    if (this.isPlaying) {
      this.stopSound();
      clearInterval(this.progressInterval);
      this.isPlaying = false;
      document.getElementById("playPauseBtn").innerHTML =
        '<i class="fas fa-play"></i> Play';
    } else if (this.currentMix) {
      this.playMoodSound();
      this.isPlaying = true;
      document.getElementById("playPauseBtn").innerHTML =
        '<i class="fas fa-pause"></i> Pause';

      const progressFill = document.getElementById("progressFill");
      this.progressInterval = setInterval(() => {
        let width = parseFloat(progressFill.style.width) || 0;
        width += 1.5;
        progressFill.style.width = width + "%";
        if (width >= 100) {
          clearInterval(this.progressInterval);
          this.playNextTrack();
        }
      }, 800);
    }
  }

  playPreviousTrack() {
    if (!this.currentMix) return;
    this.currentTrackIndex =
      (this.currentTrackIndex - 1 + this.currentMix.tracks.length) %
      this.currentMix.tracks.length;
    this.playTrack(this.currentTrackIndex);
  }

  playNextTrack() {
    if (!this.currentMix) return;
    this.currentTrackIndex =
      (this.currentTrackIndex + 1) % this.currentMix.tracks.length;
    this.playTrack(this.currentTrackIndex);
  }

  createShootingStarTrail() {
    const shootingStar = document.createElement("div");
    shootingStar.className = "shooting-star";
    shootingStar.style.top = "50%";
    shootingStar.style.animationDuration = "1s";

    const mixResult = document.getElementById("mixResult");
    if (mixResult) {
      mixResult.appendChild(shootingStar);
    }

    setTimeout(() => {
      if (shootingStar.parentNode) {
        shootingStar.remove();
      }
    }, 1000);
  }

  toggleSound() {
    const btn = document.getElementById("playSound");
    if (!btn) return;

    const icon = btn.querySelector("i");

    if (this.currentOscillator) {
      this.stopSound();
      btn.classList.remove("active");
      icon.className = "fas fa-play";
      btn.innerHTML = '<i class="fas fa-play"></i> Play Preview';
    } else {
      this.playMoodSound();
      btn.classList.add("active");
      icon.className = "fas fa-pause";
      btn.innerHTML = '<i class="fas fa-pause"></i> Pause Preview';
    }
  }

  playMoodSound() {
    if (!this.audioContext) {
      this.audioContext = new (window.AudioContext ||
        window.webkitAudioContext)();
    }

    const selectedMood =
      document.querySelector('input[name="mood"]:checked')?.value || "chill";
    const moodFrequencies = {
      stressed: 220,
      hyped: 440,
      chill: 261.6,
      sad: 196,
      excited: 523.3,
      focused: 349.2,
    };

    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);

    const frequency = moodFrequencies[selectedMood] || 261.6;
    const waveType =
      selectedMood === "chill"
        ? "sine"
        : selectedMood === "hyped"
        ? "sawtooth"
        : "triangle";

    oscillator.frequency.setValueAtTime(
      frequency,
      this.audioContext.currentTime
    );
    oscillator.type = waveType;

    gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(
      0.08,
      this.audioContext.currentTime + 0.5
    );
    gainNode.gain.exponentialRampToValueAtTime(
      0.01,
      this.audioContext.currentTime + 3
    );

    oscillator.start();
    oscillator.stop(this.audioContext.currentTime + 3);

    this.currentOscillator = oscillator;
  }

  stopSound() {
    if (this.currentOscillator) {
      this.currentOscillator.stop();
      this.currentOscillator = null;
    }
  }

  saveMix() {
    if (this.currentMix) {
      this.savedMixes.unshift(this.currentMix);
      if (this.savedMixes.length > 20) {
        this.savedMixes = this.savedMixes.slice(0, 20);
      }
      localStorage.setItem("moodMixesCosmic", JSON.stringify(this.savedMixes));
      this.showCosmicNotification(
        "🌠 Mix saved to your cosmic collection!",
        "success"
      );
    }
  }

  showMoodHistory() {
    document.getElementById("historyModal").style.display = "flex";
    const timeline = document.getElementById("timeline");
    timeline.innerHTML = '<div class="timeline-line"></div>';

    if (this.savedMixes.length === 0) {
      timeline.innerHTML +=
        '<p style="text-align: center; color: var(--text-light);">No saved mixes yet. Create some cosmic vibes! 🌌</p>';
      return;
    }

    this.savedMixes.forEach((mix, index) => {
      const item = document.createElement("div");
      item.className = "timeline-item";
      item.innerHTML = `
                <div class="timeline-dot"></div>
                <div class="timeline-date">${new Date(
                  mix.timestamp
                ).toLocaleDateString()}</div>
                <div class="timeline-title">${mix.title}</div>
            `;
      item.addEventListener("click", () => {
        this.loadOldMix(mix);
        document.getElementById("historyModal").style.display = "none";
      });
      timeline.appendChild(item);
    });
  }

  loadOldMix(mix) {
    this.currentMix = mix;
    document.body.className = mix.mood;
    document.body.style.background = this.moods[mix.mood].gradient;

    const stars = document.querySelectorAll(".star, .galaxy-star");
    stars.forEach((star) => {
      star.style.background = this.moods[mix.mood].starColor;
    });

    document.getElementById("moodSelector").style.display = "none";
    document.getElementById("mixResult").style.display = "block";
    document.getElementById("mixTitle").textContent = mix.title;
    document.getElementById("playlist").innerHTML = mix.tracks;

    if (mix.mood === "sad") {
      document.getElementById("motivationSection").style.display = "block";
    } else {
      document.getElementById("motivationSection").style.display = "none";
    }

    this.createGalaxyStars(this.moods[mix.mood]);
  }

  logTodaysMood() {
    const selectedMood = document.querySelector('input[name="mood"]:checked');
    const intensity = parseInt(document.getElementById("intensity").value);

    if (!selectedMood) {
      this.showCosmicNotification("Select a mood to log!", "warning");
      return;
    }

    const today = this.currentDate.toISOString().slice(0, 10);
    const log = {
      mood: selectedMood.value,
      intensity,
      timestamp: this.currentDate.toISOString(),
    };

    // Remove previous log for today
    this.savedMixes = this.savedMixes.filter(
      (m) => new Date(m.timestamp).toISOString().slice(0, 10) !== today
    );
    this.savedMixes.unshift(log);
    localStorage.setItem("moodMixesCosmic", JSON.stringify(this.savedMixes));

    this.showMoodOfDay();
    this.showCosmicNotification("🌟 Mood logged for today!", "success");
  }

  showMoodOfDay() {
    const today = this.currentDate.toISOString().slice(0, 10);
    const todaysLog = this.savedMixes.find(
      (m) => new Date(m.timestamp).toISOString().slice(0, 10) === today
    );

    const badge = document.getElementById("moodOfDay");
    if (todaysLog) {
      badge.textContent = `Today's Vibe: ${
        todaysLog.mood.charAt(0).toUpperCase() + todaysLog.mood.slice(1)
      } (${todaysLog.intensity}%)`;
      badge.style.display = "block";
    } else {
      badge.style.display = "none";
    }
  }

  showWeeklyRecap() {
    document.getElementById("recapModal").style.display = "flex";
    const ctx = document.getElementById("recapChart").getContext("2d");

    const weekAgo = new Date(this.currentDate);
    weekAgo.setDate(weekAgo.getDate() - 7);

    const weeklyLogs = this.savedMixes.filter(
      (m) => new Date(m.timestamp) >= weekAgo
    );

    if (weeklyLogs.length === 0) {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.fillStyle = "#e2e8f0";
      ctx.font = "16px Segoe UI";
      ctx.textAlign = "center";
      ctx.fillText(
        "No mood logs this week yet!",
        ctx.canvas.width / 2,
        ctx.canvas.height / 2
      );
      return;
    }

    const moodsCount = {};
    weeklyLogs.forEach((log) => {
      moodsCount[log.mood] = (moodsCount[log.mood] || 0) + 1;
    });

    const labels = Object.keys(moodsCount);
    const data = Object.values(moodsCount);
    const colors = labels.map((mood) => this.moods[mood].accent);

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    // Simple bar chart
    const barWidth = 35;
    const spacing = 15;
    const maxHeight = 150;
    const maxValue = Math.max(...data, 1);

    data.forEach((value, i) => {
      const height = (value / maxValue) * maxHeight;
      const x = i * (barWidth + spacing) + 30;
      const y = maxHeight - height + 20;

      // Bar
      ctx.fillStyle = colors[i];
      ctx.fillRect(x, y, barWidth, height);

      // Bar glow
      ctx.shadowColor = colors[i];
      ctx.shadowBlur = 10;
      ctx.fillRect(x, y, barWidth, height);
      ctx.shadowBlur = 0;

      // Label
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 12px Segoe UI";
      ctx.textAlign = "center";
      ctx.fillText(
        labels[i].charAt(0).toUpperCase(),
        x + barWidth / 2,
        maxHeight + 25
      );
      ctx.fillText(value, x + barWidth / 2, y - 5);
    });
  }

  showCosmicNotification(message, type = "info") {
    const notification = document.createElement("div");
    notification.className = `notification notification-${type} cosmic`;
    notification.innerHTML = `
            <div style="display: flex; align-items: center; gap: 8px;">
                <span>🌟</span>
                <span>${message}</span>
            </div>
        `;

    const style = document.createElement("style");
    style.id = "notification-style";
    style.textContent = `
            .notification.cosmic {
                background: linear-gradient(45deg, rgba(var(--accent-rgb, 79, 172, 254), 0.9), rgba(var(--accent-light-rgb, 0, 242, 254), 0.7)) !important;
                box-shadow: 0 0 35px rgba(var(--accent-rgb, 79, 172, 254), 0.5);
                border: 1px solid rgba(255, 255, 255, 0.2);
                backdrop-filter: blur(10px);
                color: #ffffff;
            }
            .notification-success.cosmic {
                background: linear-gradient(45deg, rgba(16, 185, 129, 0.9), rgba(34, 197, 94, 0.9)) !important;
                box-shadow: 0 0 35px rgba(16, 185, 129, 0.5);
            }
            .notification-warning.cosmic {
                background: linear-gradient(45deg, rgba(239, 68, 68, 0.9), rgba(248, 113, 113, 0.9)) !important;
                box-shadow: 0 0 35px rgba(239, 68, 68, 0.5);
            }
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                padding: 12px 20px;
                border-radius: 12px;
                font-weight: 500;
                z-index: 10000;
                transform: translateX(100%);
                transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            }
            .notification.show { transform: translateX(0); }
            @media (max-width: 480px) {
                .notification { right: 10px; left: 10px; top: 10px; }
            }
        `;

    const existingStyle = document.getElementById("notification-style");
    if (existingStyle) {
      existingStyle.remove();
    }
    document.head.appendChild(style);

    document.body.appendChild(notification);

    requestAnimationFrame(() => notification.classList.add("show"));

    setTimeout(() => {
      notification.classList.remove("show");
      setTimeout(() => {
        notification.remove();
        if (document.getElementById("notification-style")) {
          document.head.removeChild(style);
        }
      }, 400);
    }, 3500);
  }

  reset() {
    console.log("Reset triggered!");

    this.stopSound();
    clearInterval(this.progressInterval);
    this.isPlaying = false;
    document.getElementById("playerControls").style.display = "none";

    const mixResult = document.getElementById("mixResult");
    const moodSelector = document.getElementById("moodSelector");
    const playBtn = document.getElementById("playSound");

    if (playBtn) {
      playBtn.classList.remove("active");
      playBtn.innerHTML = '<i class="fas fa-play"></i> Play Preview';
    }

    const galaxyStars = document.querySelector(".galaxy-stars");
    if (galaxyStars) {
      galaxyStars.remove();
    }

    this.currentMix = null;
    document.body.className = "";
    document.body.style.background =
      "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)";

    const stars = document.querySelectorAll(".star");
    stars.forEach((star) => {
      star.style.background = "#ffffff";
    });

    mixResult.style.transition = "opacity 0.4s ease";
    mixResult.style.opacity = "0";

    setTimeout(() => {
      mixResult.style.display = "none";

      moodSelector.style.display = "block";
      moodSelector.style.opacity = "0";
      moodSelector.style.transition = "opacity 0.4s ease";

      requestAnimationFrame(() => {
        moodSelector.style.opacity = "1";
      });

      console.log("Reset complete!");
    }, 400);
  }
}

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  new MoodMixerCosmic();
  console.log("🌌 Mood Mixer Cosmic - FULL IMMERSION MODE ACTIVATED! 🚀✨");
});
