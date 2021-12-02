import { of } from "rxjs";
import { VoterService } from "."
import { ISession } from "../events";

describe('VoterService', () => {

    let voterService: VoterService,
        mockHttp;

    beforeEach(() => {
        mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post'])
        voterService = new VoterService(mockHttp);
    });

    describe('deleteVoter', () => {
        it('should remove the voter from the list of voters', () => {
            var session = {
                id: 6,
                voters: ["joe", "john"]
            }
            mockHttp?.delete.and.returnValue(of(false));

            voterService.deleteVoter(3, <ISession>session, "joe")

            expect(session.voters.length).toBe(1);
            expect(session.voters[0]).toBe("john");
        })

        it('should call http.delete with the right url', () => {
            var session = {
                id: 6,
                voters: ["joe", "john"]
            }
            mockHttp?.delete.and.returnValue(of(false));

            voterService.deleteVoter(3, <ISession>session, "joe")
            const url = `/api/events/3/sessions/6/voters/joe`;

            expect(mockHttp.delete).toHaveBeenCalledWith(url);
        })
    })

    describe('addVoter', () => {
        it('should call http.post with the right url', () => {
            var session = {
                id: 6,
                voters: ["joe", "john"]
            }
            mockHttp?.post.and.returnValue(of(false));

            voterService.addVoter(3, <ISession>session, "joe")
            const url = `/api/events/3/sessions/6/voters/joe`;

            expect(mockHttp.post).toHaveBeenCalledWith(url, {}, jasmine.any(Object));
        })
    })
})