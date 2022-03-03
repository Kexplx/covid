import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Announcement } from '../announcement.service';

const CLOSED_ANNOUNCEMENT_IDS_KEY = 'CLOSED_ANNOUNCEMENT_IDS';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css'],
})
export class AnnouncementsComponent implements OnInit {
  announcements: Announcement[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.data$.subscribe(data => {
      if (data) {
        this.announcements = data.announcements;
        this.filterAnnouncements();
      } else {
        this.announcements = [];
      }
    });
  }

  onClose(announcement: Announcement) {
    let closedAnnouncementIdsJson = localStorage.getItem(CLOSED_ANNOUNCEMENT_IDS_KEY);

    if (!closedAnnouncementIdsJson) {
      closedAnnouncementIdsJson = '[]';
    }

    const closedAnnouncementIds: string[] = JSON.parse(closedAnnouncementIdsJson);
    closedAnnouncementIds.push(announcement.id);

    localStorage.setItem(CLOSED_ANNOUNCEMENT_IDS_KEY, JSON.stringify(closedAnnouncementIds));

    this.filterAnnouncements();
  }

  filterAnnouncements() {
    this.announcements = this.announcements
      .filter(a => {
        const isRelevant = new Date(a.relevantUntil) > new Date();
        if (!isRelevant) {
          return false;
        }

        const wasClosed = this.wasAnnouncementClosed(a);
        if (wasClosed) {
          return false;
        }

        return true;
      })
      .reverse();
  }

  wasAnnouncementClosed(announcement: Announcement): boolean {
    const announcementIdsJson = localStorage.getItem(CLOSED_ANNOUNCEMENT_IDS_KEY);
    if (!announcementIdsJson) {
      return false;
    }

    const closedAnnouncementIds: string[] = JSON.parse(announcementIdsJson);

    const announcementWasClosed = closedAnnouncementIds.includes(announcement.id);

    return announcementWasClosed;
  }
}
