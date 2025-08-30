 <style>
        body {
            font-family: 'Inter', sans-serif;
            color: #e0e0e0;
            overflow-x: hidden;
            
            /* NEW: Subtle Starfield Background */
            background: 
                radial-gradient(2px 2px at 20px 30px, #eee, rgba(0,0,0,0)),
                radial-gradient(2px 2px at 40px 70px, #fff, rgba(0,0,0,0)),
                radial-gradient(1px 1px at 50px 100px, #ddd, rgba(0,0,0,0)),
                radial-gradient(2px 2px at 90px 40px, #fff, rgba(0,0,0,0)),
                radial-gradient(1px 1px at 100px 90px, #ccc, rgba(0,0,0,0));
            background-color: #1a1a1a;
            background-size: 200px 200px, 300px 300px, 150px 150px, 250px 250px, 180px 180px;
            animation: move-background 60s infinite linear;
        }
        
        @keyframes move-background {
            from {
                background-position: 0 0;
            }
            to {
                background-position: 200px 200px;
            }
        }
        
        .gradient-card {
            background: linear-gradient(to top left, #2c3e50, #1a1a1a);
            color: #f0f0f0;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
        }
        .dark-text-primary {
            color: #f0f0f0;
        }
        .dark-text-secondary {
            color: #b0b0b0;
        }
        .dark-border {
            border-color: #4a4a4a;
        }
        .btn-primary-glow {
            background: linear-gradient(to right, #6b46c1, #805ad5);
            color: #ffffff;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(107, 70, 193, 0.4);
        }
        .btn-primary-glow:hover {
            transform: translateY(-4px) scale(1.02);
            box-shadow: 0 8px 20px rgba(107, 70, 193, 0.6);
        }
        .btn-secondary-glow {
            background: linear-gradient(to right, #38a169, #2f855a);
            color: #ffffff;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(56, 161, 105, 0.4);
        }
        .btn-secondary-glow:hover {
            transform: translateY(-4px) scale(1.02);
            box-shadow: 0 8px 20px rgba(56, 161, 105, 0.6);
        }
        .card-project {
            background: #1a1a1a;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
            transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
            border-left: 4px solid transparent;
        }
        .card-project:hover {
            transform: translateY(-8px) rotate(-1deg);
            box-shadow: 0 12px 25px rgba(0, 0, 0, 0.5);
            border-image: linear-gradient(to bottom, #6b46c1, #805ad5) 1;
        }
        .tag-pill {
            background: #4a4a4a;
            color: #e0e0e0;
            padding: 4px 10px;
            border-radius: 9999px;
            font-size: 0.8rem;
            font-weight: 500;
            transition: transform 0.2s ease;
        }
        .tag-pill:hover {
            transform: scale(1.1);
        }
    </style>
